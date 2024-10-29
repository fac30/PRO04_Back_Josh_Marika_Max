import { Request, Response, Router } from 'express';
import { getCategory, Category } from '../controllers/getVinylsByCategory';
import { getTransactions } from '../controllers/getTransactions';

const router = Router();

getCategory('status', true)
    .then((statusData: Category[]) => {
        statusData.forEach(statusName => {
            router.get(`/status/${typeof statusName.status === 'string'? statusName.status.replace(" ", "-") : statusName.status}/:customer_id?`, async (req: Request, res: Response) => {
                console.log(`Querying status of ${statusName.status}`);
                try {
                    const { customer_id } = req.params;
                    const transactions = await getTransactions(customer_id || undefined, statusName.id);
                    res.status(200).json(transactions);
                } catch (error) {
                    console.error(error);
                    res.status(500).json({ message: `Error fetching transaction by status data` });
                }
            });
        });
    })
    .catch(error => {
        console.error(`Error setting up routes for status transactions:`, error);
    });


export default router;