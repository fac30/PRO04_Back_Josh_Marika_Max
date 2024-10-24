import { dbGet } from '../models/dbGet';
import { Vinyl, Disc } from '../utils/schemaTypes';

export const getVinyls = async (ids?: number[]) => {
  try {
    const vinyls: Vinyl[] = await dbGet<Vinyl>('vinyls', {
      where: ids && ids.length > 0 ? { id: ids } : undefined,
      join: [
        {
          relatedTable: 'genres',
          foreignKey: 'genre_id',
          columns: 'genre'
        },
        {
          relatedTable: 'conditions',
          foreignKey: 'condition_id',
          columns: 'condition'
        },
        {
          relatedTable: 'price_ranges',
          foreignKey: 'price_range_id',
          columns: 'price_range'
        },
        {
          relatedTable: 'collection_types',
          foreignKey: 'collection_type_id',
          columns: 'collection_type'
        },
        {
          relatedTable: 'time_periods',
          foreignKey: 'time_period_id',
          columns: 'time_period'
        },
        {
          relatedTable: 'labels',
          foreignKey: 'label_id',
          columns: 'label'
        }
      ]
    });

    if (!vinyls || vinyls.length === 0) {
      return vinyls;
    }

    const vinylIds = vinyls.map(vinyl => vinyl.id);
    console.log('Vinyl IDs to fetch discs for:', vinylIds);

    const discs: Disc[] = await dbGet<Disc>('discs', {
      where: { vinyl_id: vinylIds }
    });

    const vinylsWithDiscs = vinyls.map((vinyl: Vinyl) => {
      const associatedDiscs = discs.filter(disc => disc.vinyl_id === vinyl.id);
      return {
        ...vinyl,
        discs: associatedDiscs
      };
    });

    return vinylsWithDiscs;
  } catch (error) {
    console.error('Error in getVinyls:', error);
    throw new Error('Error fetching vinyls and discs data');
  }
};
