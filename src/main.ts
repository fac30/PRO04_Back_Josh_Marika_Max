import express, { Request, Response } from "express";
import dbRequest from "./database/vinyl-data";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/vinyls", async (req: Request, res: Response) => {
  try {
    const vinyls = await dbRequest();
    res.status(200).json(vinyls);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching vinyl data" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export { app };
