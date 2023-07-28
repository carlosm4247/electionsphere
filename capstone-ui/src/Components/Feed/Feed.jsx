import React, { useState, useEffect, useContext } from "react";
import "./Feed.css"
import { UserContext } from "../../UserContext";

export default function Feed ( { loggedin }) {

    const [articles, setArticles] = useState([]);
    const [searchQuery, setSearchQuery] = useState([]);

    const user = useContext(UserContext);

    const currentUser = user.user;

    useEffect(() => {
        if (loggedin) {
          const tagsArray = Object.values(currentUser.stances).map(([tag, option]) => tag);
          setSearchQuery(tagsArray.concat(currentUser.following));
        }
      }, [loggedin, user.stances, user.following]);
    
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
                {articles ? (articles.map((article, index) => (
                <li key={index}>
                    <a href={article.url} target="_blank">
                    {article.title}
                    </a>
                </li>
                ))) : (
                    <p>No articles right now, check later or refresh the page.</p>
                )}
            </ul>
        </div>
    )
}