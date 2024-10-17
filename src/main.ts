import express, { Request, Response } from "express";
import cors from "cors"; // Use import instead of require
import dbRequest from "./database/vinyl-data"; // Assuming this is your data-fetching function

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors()); // Enable CORS for all routes

app.get("/vinyls", async (req: Request, res: Response) => {
  try {
    const vinyls = await dbRequest(); // Fetch data from your database
    res.status(200).json(vinyls); // Send vinyl data as JSON
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching vinyl data" }); // Handle errors
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
