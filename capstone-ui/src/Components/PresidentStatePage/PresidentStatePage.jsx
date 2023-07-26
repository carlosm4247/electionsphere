import * as React from "react"
import StateMap from "../StateMap/StateMap"
import { useParams } from "react-router-dom"
import ResultsBox from "../ResultsBox/ResultsBox";
import CandidateView from "../CandidateView/CandidateView";

export default function PresidentialStatePage( { selectedCandidates, setSelectedCandidates }) {

    const { stateName } = useParams();

    return (
        <div className="state-page">
            <div className="map-container">
                <StateMap stateName={stateName} />
            </div>
            <div className="results-container">
                <ResultsBox 
                    locationLevel={2}
                    selectedCandidates={selectedCandidates}
                    setSelectedCandidates={setSelectedCandidates}
                />
            </div>
            <div className="candidate-comparison-container">
                {selectedCandidates ? (selectedCandidates.map((candidate) => (
                            <CandidateView
                                key={candidate.key}
                                candidateName={candidate.name}
                            />
                        ))) : <></>}
            </div>
        </div>
    )
}