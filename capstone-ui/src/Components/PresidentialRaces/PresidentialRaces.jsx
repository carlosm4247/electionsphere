import * as React from "react"
import InteractiveMap from "../InteractiveMap/InteractiveMap"
import ResultsBox from "../ResultsBox/ResultsBox"
import CandidateView from "../CandidateView/CandidateView"

export default function PresidentialRaces({ selectedCandidates, setSelectedCandidates }) {
    return (
        <div className="presidential-races">
            <div className="map-container">
                <InteractiveMap 
                    raceType='president'
                />
            </div>
            <div className="results-container">
                <ResultsBox 
                    locationLevel={1}
                    selectedCandidates={selectedCandidates}
                    setSelectedCandidates={setSelectedCandidates} 
                />
            </div>
            <div className="candidate-comparison-container">
                Candidate Comparison
            </div>
        </div>
    )
}