import express, { Request, Response } from "express";
import cors from "cors";
import { dbGet, dbPost, dbPatch, dbDelete } from "./database/dbRequests";
import endpoints from "./database/endpoints.json"

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

Object.entries(endpoints).forEach(([endpoint, methods]) => {
  if (methods.GET) {
    app.get(`/${endpoint}`, async (req: Request, res: Response) => {
      try {
        const data = await dbGet(endpoint); // Call dbRequest with the endpoint name
        res.status(200).json(data);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: `Error fetching ${endpoint} data` });
      }
    });
  }
  if (methods.POST) {
    app.post(`/${endpoint}`, async (req: Request, res: Response) => {
      try {
        const data = await dbPost(endpoint, req.body); // Handle POST logic
        res.status(201).json(data);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: `Error posting to ${endpoint}` });
      }
    });
  }
  if (methods.PATCH) {
    app.patch(`/${endpoint}/:id`, async (req: Request, res: Response) => {
      const { id } = req.params;
      try {
        const data = await dbPatch(endpoint, id, req.body); // Handle PATCH logic
        res.status(200).json(data);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: `Error patching ${endpoint} with ID: ${id}` });
      }
    });
  }
  if (methods.DELETE) {
    app.delete(`/${endpoint}/:id`, async (req: Request, res: Response) => {
      const { id } = req.params;
      try {
        const data = await dbDelete(endpoint, id); // Handle DELETE logic
        res.status(200).json({ message: `${endpoint} with ID ${id} deleted successfully` });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: `Error deleting from ${endpoint} with ID: ${id}` });
      }
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export { app };
