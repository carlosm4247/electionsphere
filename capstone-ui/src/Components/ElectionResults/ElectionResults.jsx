import { useState, useEffect, useContext, useRef } from "react";
import { UserContext } from "../../UserContext";
import PresidentialRaces from "../PresidentialRaces/PresidentialRaces"
import RaceTypeDropdown from "../RaceTypeDropdown/RaceTypeDropdown";

export default function ElectionResults({selectedCandidates, setSelectedCandidates}) {
    return (<div className="election results">
                <RaceTypeDropdown />
                <PresidentialRaces selectedCandidates={selectedCandidates} setSelectedCandidates={setSelectedCandidates}/>
            </div>
            );
}