import express, { Request, Response } from "express";
import cors from "cors";
import dbRequest from "./database/dbRequest";
import endpoints from "./database/endpoints.json"

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

endpoints.map(endpoint => {
  app.get(`/${endpoint}`, async (req: Request, res: Response) => {
    try {
      const data = await dbRequest(endpoint);
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: `Error fetching ${endpoint} data` });
    }
  });
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export { app };
