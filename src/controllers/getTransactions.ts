import { dbGet } from '../models/dbGet';

export const getTransactions = async (customer_id: string) => {
  try {
    const transactions = await dbGet('transactions', {
      where: { customer_id },
      join: [
        {
          relatedTable: 'statuses',
          foreignKey: 'status_id',
          columns: 'status'
        },
        {
          relatedTable: 'shipping_options',
          foreignKey: 'shipping_option_id',
          columns: 'shipping_option'
        }
      ]
    });

    if (!transactions || transactions.length === 0) {
      return [];
    }

    const transactionIds = transactions.map((transaction: any) => transaction.id);
    const transactionVinyls = await dbGet('transactions_vinyls', {
      where: { transaction_id: transactionIds },
      join: [
        {
          relatedTable: 'vinyls',
          foreignKey: 'vinyl_id',
          columns: ['title', 'artist', 'price']
        }
      ]
    });

    const transformedData = transactions.map((transaction: any) => ({
      ...transaction,
      vinyls: transactionVinyls
        .filter((tv: any) => tv.transaction_id === transaction.id)
        .map((tv: any) => ({
            ...tv,
        }))
    }));

    return transformedData;
  } catch (error) {
    console.error('Error fetching transaction data:', error);
    throw new Error('Error fetching transaction data');
  }
};
