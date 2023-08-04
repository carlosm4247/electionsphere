import React from 'react'
import './Recommendations.css'
import { questionsWithOptions, partiesOrganized } from '../../constants';

export default function Recommendations() {

    const convertPartyToVector = (selectedParty) => {
        const vector = partiesOrganized.map((party) => (party === selectedParty ? 1 : 0));
        return vector;
    };

    const convertToVector = (stances, question) => {
        const options = questionsWithOptions[question];
        const vector = options.map((option) => (stances.includes(option[1]) ? 1 : 0));

        return vector;
    };

    const calculateHammingDistance = (vector1, vector2) => {
        if (vector1.length !== vector2.length) {
            throw new Error("Vectors must have the same length");
        }
    
        let hammingDistance = 0;
    
        for (let i = 0; i < vector1.length; i++) {
            if (vector1[i] !== vector2[i]) {
                hammingDistance++;
            }
        }
    
        return hammingDistance;
    }

    const calculateAverageHammingDistance = (stancesSet1, stancesSet2) => {
        const questions = Object.keys(questionsWithOptions);
        const similarities = questions.map((question) => {
            const vector1 = convertToVector(stancesSet1[question], question);
            const vector2 = convertToVector(stancesSet2[question], question);
            const hammingDistance = calculateHammingDistance(vector1, vector2);
            return 1 - hammingDistance / vector1.length;
        });

        const totalSimilarity = similarities.reduce((acc, similarity) => acc + similarity, 0);
        const averageSimilarity = totalSimilarity / similarities.length;

        return averageSimilarity;
    }

    return (
        <div className='recommendations-container'>
            <h3>Recommendations</h3>
        </div>
    );
}