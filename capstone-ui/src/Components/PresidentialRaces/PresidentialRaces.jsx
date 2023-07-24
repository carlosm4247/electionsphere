import * as React from "react"
import InteractiveMap from "../InteractiveMap/InteractiveMap"
import ResultsBox from "../ResultsBox/ResultsBox"

export default function PresidentialRaces() {
    return (
        <div className="presidential-races">
            <div className="map-container">
                <InteractiveMap 
                    raceType='president'
                />
            </div>
            <div className="results-container">
                <ResultsBox locationLevel={1} />
            </div>
            <div className="candidate-comparison-container">
                Candidate Comparison
            </div>
        </div>
    )
}