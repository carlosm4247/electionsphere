import React from "react";
import "./Feed.css"

export default function Feed ( { loggedin }) {

    return (
        <div className="feed-container">
            { loggedin ? (
                <h3>Logged in Feed</h3>
            ) : (
                <h3>Not Logged in Feed</h3>
            )}
        </div>
    )
}