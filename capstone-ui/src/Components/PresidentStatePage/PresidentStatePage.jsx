import * as React from "react"
import StateMap from "../StateMap/StateMap"
import { useParams } from "react-router-dom"
import ResultsBox from "../ResultsBox/ResultsBox";

export default function PresidentialStatePage() {

    const { stateName } = useParams();

    return (
        <div className="state-page">
            <div className="map-container">
                <StateMap stateName={stateName} />
            </div>
            <div className="results-container">
                <ResultsBox locationLevel={2} />
            </div>
            <div className="candidate-comparison-container">
                Candidate Comparison
            </div>
        </div>
    )
}