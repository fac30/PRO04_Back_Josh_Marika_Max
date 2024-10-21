import express, { Request, Response } from "express";
import cors from "cors"; // Use import instead of require

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors()); // Enable CORS for all routes

// Function to search for album cover using Fetch API
async function searchAlbumCover(albumTitle: string): Promise<string | null> {
  const searchUrl = `https://api.discogs.com/database/search?q=${encodeURIComponent(
    albumTitle
  )}&type=release&per_page=1`;

  const options = {
    method: "GET",
    headers: {
      "User-Agent": "FontHillRecords/1.0 +http://mydiscogsclient.org",
    },
  };

  try {
    const response = await fetch(searchUrl, options);
    if (response.ok) {
      const jsonResponse = await response.json();
      const results = jsonResponse.results;

      if (results.length > 0) {
        return results[0].cover_image;
      } else {
        console.log("No results found for the album title:", albumTitle);
        return null;
      }
    } else {
      console.error("Error:", response.status, response.statusText);
      return null;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Propagate the error
  }
}

// Define a route to search for an album cover
app.get("/search", async (req: Request, res: Response) => {
  const albumTitle = req.query.title as string; // Get album title from query parameters

  if (!albumTitle) {
    return res.status(400).send("Album title is required.");
  }

  try {
    const coverImageUrl = await searchAlbumCover(albumTitle);

    if (coverImageUrl) {
      res.json({ coverImageUrl });
    } else {
      res.status(404).send("Cover image not found.");
    }
  } catch (error) {
    res.status(500).send("Internal server error.");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
