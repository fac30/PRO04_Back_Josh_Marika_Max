import { Request, Response, Router } from 'express';
import { dbGet, dbPost, dbPatch, dbDelete } from "../database/dbRequests";
import endpoints from '../database/endpoints.json';

const router = Router();

Object.entries(endpoints).forEach(([endpoint, methods]) => {
  if (methods.GET) {
    router.get(`/${endpoint}`, async (_req: Request, res: Response) => {
      try {
        const data = await dbGet(endpoint);
        res.status(200).json(data);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: `Error fetching ${endpoint} data` });
      }
    });
  }
  if (methods.POST) {
    router.post(`/${endpoint}`, async (req: Request, res: Response) => {
      try {
        const data = await dbPost(endpoint, req.body);
        res.status(201).json(data);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: `Error posting to ${endpoint}` });
      }
    });
  }
  if (methods.PATCH) {
    router.patch(`/${endpoint}/:id`, async (req: Request, res: Response) => {
      const { id } = req.params;
      try {
        const data = await dbPatch(endpoint, id, req.body);
        res.status(200).json(data);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: `Error patching ${endpoint} with ID: ${id}` });
      }
    });
  }
  if (methods.DELETE) {
    router.delete(`/${endpoint}/:id`, async (req: Request, res: Response) => {
      const { id } = req.params;
      try {
        await dbDelete(endpoint, id);
        res.status(200).json({ message: `${endpoint} with ID ${id} deleted successfully` });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: `Error deleting from ${endpoint} with ID: ${id}` });
      }
    });
  }
});

export default router;