import React, { useEffect } from 'react';
import * as topojson from 'topojson-client';
import usData from '../../data/us.json';
import "./InteractiveMap.css";

export default function InteractiveMap({ raceType }) {

    const fipsStateCodes = {
        '1': 'alabama',
        '2': 'alaska',
        '4': 'arizona',
        '5': 'arkansas',
        '6': 'california',
        '8': 'colorado',
        '9': 'connecticut',
        '10': 'delaware',
        '11': 'district-of-columbia',
        '12': 'florida',
        '13': 'georgia',
        '15': 'hawaii',
        '16': 'idaho',
        '17': 'illinois',
        '18': 'indiana',
        '19': 'iowa',
        '20': 'kansas',
        '21': 'kentucky',
        '22': 'louisiana',
        '23': 'maine',
        '24': 'maryland',
        '25': 'massachusetts',
        '26': 'michigan',
        '27': 'minnesota',
        '28': 'mississippi',
        '29': 'missouri',
        '30': 'montana',
        '31': 'nebraska',
        '32': 'nevada',
        '33': 'new-hampshire',
        '34': 'new-jersey',
        '35': 'new-mexico',
        '36': 'new-york',
        '37': 'north-carolina',
        '38': 'north-dakota',
        '39': 'ohio',
        '40': 'oklahoma',
        '41': 'oregon',
        '42': 'pennsylvania',
        '44': 'rhode-island',
        '45': 'south-carolina',
        '46': 'south-dakota',
        '47': 'tennessee',
        '48': 'texas',
        '49': 'utah',
        '50': 'vermont',
        '51': 'virginia',
        '53': 'washington',
        '54': 'west-virginia',
        '55': 'wisconsin',
        '56': 'wyoming',
      };



    useEffect(() => {
        const margin = { top: 50, left: 50, right: 50, bottom: 50 };
        const height = 400 - margin.top - margin.bottom;
        const width = 800 - margin.left - margin.right;

        const svg = d3
        .select('#map')
        .append('svg')
        .attr('height', height + margin.top + margin.bottom)
        .attr('width', width + margin.left + margin.right)
        .append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`);

        const projection = d3.geoAlbersUsa().translate([width / 2, height / 2]).scale(800);

        const path = d3.geoPath().projection(projection);

        const states = topojson.feature(usData, usData.objects.states).features;

        svg.selectAll('.state')
        .data(states)
        .enter().append('path')
        .attr('class', 'state')
        .attr('d', path)
        .on('click', function(d) {
            const stateName = fipsStateCodes[d.id];
            window.location.href = `/${raceType}/${stateName}`;
        });
    }, []);

    return (
        <div id="map"></div>
        )
}
