import React, { useState, useEffect, useContext, useRef } from "react";
import "./Feed.css"
import { UserContext } from "../../UserContext";

export default function Feed ( { loggedin }) {

    const [articles, setArticles] = useState([]);
    const [searchQuery, setSearchQuery] = useState([]);

    const user = useContext(UserContext);

    const currentUser = user.user;

    const [isFetching, setIsFetching] = useState(false);
    const fetchTimerRef = useRef(null);

    const fetchData = async () => {
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

    useEffect(() => {
      if (loggedin) {
        const tagsArray = Object.values(currentUser.stances).map(([tag, option]) => tag);
        setSearchQuery(tagsArray.concat(currentUser.following));
      }
    }, [loggedin, user.stances, user.following]);

    useEffect(() => {
      if (isFetching && fetchTimerRef.current) {
        clearTimeout(fetchTimerRef.current);
      }
      setIsFetching(true);
      fetchTimerRef.current = setTimeout(() => {
        fetchData();
        setIsFetching(false);
      }, 1000);

      return () => {
        if (fetchTimerRef.current) {
          clearTimeout(fetchTimerRef.current);
        }
      };
  }, [searchQuery]);
  
    return (
        <div className="feed-container">
            <h3>Feed</h3>
            <ul>
                {articles ? (articles.map((article, index) => (
                    <div key={index} className="article-container">
                        <div className="article-content">
                            <a href={article.link} target="_blank" className="article-title">{article.title}</a>
                            <p className="article-info">{article.published_date} | By: {article.author}</p>
                            <p className="article-description">{article.excerpt}</p>
                        </div>
                    </div>
                ))) : (
                    <p>No articles right now, check later or refresh the page.</p>
                )}
            </ul>
        </div>
    )
}