import React, { useContext } from "react";
import FollowButton from "../FollowButton/FollowButton.jsx"

export default function CandidateView({ candidateName }) {

    return (
        <div className="candidate-view">
            <div className="topbar">
                <div className="candidate-name">
                    {candidateName}
                </div>
                <div className="follow-button-container">
                  <FollowButton candidateName={candidateName} />
                </div>
            </div>
            <div className="details">
                <div className="categories">
                    Categories
                </div>
                <div className="category-content">
                    Category Content
                </div>
            </div>
        </div>
    )
}