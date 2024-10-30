import { Request, Response, Router } from 'express';
import { getCategory, getVinylsByCategory, Category } from '../controllers/getVinylsByCategory';

const router = Router();

const categories = [
    "genre",
    "label",
    "condition",
    "price_range",
    "time_period",
    "collection_type"
];

categories.forEach(category => {
    getCategory(category)
        .then((categoryData: Category[]) => {
            categoryData.forEach(categoryName => {
                router.get(`/${category}/${categoryName[category]}`, async ( req: Request, res: Response) => {
                    console.log(`Querying ${category} of ${categoryName[category]}`);
                    try {
                        const vinyls = await getVinylsByCategory(categoryName, category);
                        res.status(200).json(vinyls);
                    } catch (error) {
                        console.error(error);
                        res.status(500).json({ message: `Error fetching ${category} data` });
                    }
                });
            });
        })
        .catch(error => {
            console.error(`Error setting up routes for category ${category}:`, error);
        });
});

export default router;