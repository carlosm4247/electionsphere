import * as React from "react"

export default function PresidentialStatePage({ stateName }) {
    return (
        <div className="state-page">
            {console.log(stateName)}
            <div className="map-container">
                {stateName} Map
            </div>
            <div className="results-container">
                Results
            </div>
            <div className="candidate-comparison-container">
                Candidate Comparison
            </div>
        </div>
    )
}