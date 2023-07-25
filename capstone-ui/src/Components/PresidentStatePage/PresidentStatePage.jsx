import * as React from "react"
import StateMap from "../StateMap/StateMap"
import { useParams } from "react-router-dom"

export default function PresidentialStatePage() {

    const { stateName } = useParams();

    return (
        <div className="state-page">
            <div className="map-container">
                <StateMap stateName={stateName} />
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