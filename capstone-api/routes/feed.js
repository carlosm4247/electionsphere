import express from "express";
import axios from "axios";
import NewsAPI from 'newsapi'

const router = express.Router();

router.get("/news", async (req, res) => {

  const { query, loggedIn, page } = req.query;
  let constructedQuery = ""

  try {
    const apiKey = "0d01b052ee2042faba964a78eea17072";
    const newsapi = new NewsAPI(apiKey);

    const parsedQuery = JSON.parse(query);

    if (loggedIn === "true") {
        constructedQuery = parsedQuery.map((tag) => `"${tag}"`).join(" OR ");
    } else {
        constructedQuery = "politics";
    }

    const params = { country: "us", q: constructedQuery, page: page || 1 };

    newsapi.v2.everything({
      q: constructedQuery,
      page: page || 1,
      domains: "foxnews.com,wsj.com,nytimes.com,cnn.com,npr.org,washingtonpost.com,apnews.com,msnbc.com",
      sortBy: 'publishedAt',
      language: 'en',
      pageSize: 20,
    }).then(response => {
      console.log(response);
      const articles = response.articles;
      const totalPages = Math.ceil(response.totalResults/20);

      res.json({ articles, totalPages });
    })
  
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;