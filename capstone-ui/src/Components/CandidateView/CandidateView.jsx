import * as React from "react"

export default function CandidateView({ candidateName }) {

    return (
        <div className="candidate-view">
            <div className="topbar">
                <div className="candidate-name">
                    {candidateName}
                </div>
                <div className="follow-button">
                    <button>Follow</button>
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