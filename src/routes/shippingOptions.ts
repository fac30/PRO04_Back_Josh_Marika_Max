import { Request, Response, Router } from 'express';
import { dbGet } from '../models/dbGet';

const router = Router();

router.get('/shipping-options', async (req: Request, res: Response) => {
    try {
      const data = await dbGet('shipping_locations', {
        join: [
          {
            relatedTable: 'shipping_options',
            foreignKey: 'shipping_option_id',
            columns: ['shipping_option', 'price', 'lead_time_days']
          },
          {
            relatedTable: 'locations',
            foreignKey: 'location_id',
            columns: ['region', 'country']
          }
        ]
      });

      const transformedData = data.reduce((acc: any[], shippingLocation: any) => {
        const location = {
          region: shippingLocation.region,
          country: shippingLocation.country
        };

        let existingOption = acc.find((opt: any) => opt.id === shippingLocation.shipping_option_id);

        if (existingOption) {
          existingOption.locations.push(location);
        } else {
          acc.push({
            id: shippingLocation.shipping_option_id,
            shipping_option: shippingLocation.shipping_option,
            price: shippingLocation.price,
            lead_time_days: shippingLocation.lead_time_days,
            locations: [location]
          });
        }
        return acc;
      }, []);

      res.status(200).json(transformedData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: `Error fetching shipping options data` });
    }
});

export default router;