import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/news", async (req, res) => {

  const { query, loggedIn } = req.query;
  let constructedQuery = ""

  try {
    const apiKey = "gJt8QAwXGc_mzm8Nc9Gvj975ZSnKD-A9Pr2oBIkr9g4";
    const apiUrl = "https://api.newscatcherapi.com/v2/search";

    const baseParams = {
        lang: "en", 
        countries: "US", 
        topic: "politics",
        sources: "foxnews.com,wsj.com,nytimes.com,cnn.com,npr.org,washingtonpost.com,apnews.com,msnbc.com",
        sort_by: "date",
        page_size: 20
    };

    if (loggedIn === "true") {
        constructedQuery = query.length > 0 ? `(${query.join(" OR ")})` : "politics";
    } 
    else {
        constructedQuery = "politics";
    }

    const params = { ...baseParams, q: constructedQuery };

    const response = await axios.get(apiUrl, {
        params,
        headers: {
          "x-api-key": apiKey,
        },
    });

    const articles = response.data.articles;
    res.json({ articles });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;