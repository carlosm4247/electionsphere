import React, { useState, useEffect } from "react";
import "./Feed.css"

export default function Feed ( { loggedin }) {

    const [articles, setArticles] = useState([]);
    const [searchQuery, setSearchQuery] = useState([]);

    useEffect(() => {
        const fetchNewsArticles = async () => {
          try {
            const url = `http://localhost:3001/news?query=${JSON.stringify(searchQuery)}&loggedIn=${loggedin}`;
    
            const response = await fetch(url, {
                method: "GET",
                credentials: "include",
            });

            const data = await response.json();
    
            setArticles(data.articles);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchNewsArticles();
      }, [searchQuery, loggedin]);

    return (
        <div className="feed-container">
            <h3>Feed</h3>
            <ul>
                {articles.map((article, index) => (
                <li key={index}>
                    <a href={article.url} target="_blank">
                    {article.title}
                    </a>
                </li>
                ))}
            </ul>
        </div>
    )
}