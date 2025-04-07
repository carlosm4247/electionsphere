import { useState, useEffect, useContext, useRef } from "react";
import { UserContext } from "../../UserContext";
import PresidentialRaces from "../PresidentialRaces/PresidentialRaces"

export default function ElectionResults({selectedCandidates, setSelectedCandidates}) {
    return (<PresidentialRaces 
        selectedCandidates={selectedCandidates} 
        setSelectedCandidates={setSelectedCandidates}
      />);
}