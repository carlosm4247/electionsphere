import React, { useEffect } from 'react';
import * as topojson from 'topojson-client';
import usData from '../../data/us.json';
import "./StateMap.css";

export default function StateMap({ stateName }) {

    const FIPSfromStateName = {
        'alabama': '1',
        'alaska': '2',
        'arizona': '4',
        'arkansas': '5',
        'california': '6',
        'colorado': '8',
        'connecticut': '9',
        'delaware': '10',
        'district-of-columbia': '11',
        'florida': '12',
        'georgia': '13',
        'hawaii': '15',
        'idaho': '16',
        'illinois': '17',
        'indiana': '18',
        'iowa': '19',
        'kansas': '20',
        'kentucky': '21',
        'louisiana': '22',
        'maine': '23',
        'maryland': '24',
        'massachusetts': '25',
        'michigan': '26',
        'minnesota': '27',
        'mississippi': '28',
        'missouri': '29',
        'montana': '30',
        'nebraska': '31',
        'nevada': '32',
        'new-hampshire': '33',
        'new-jersey': '34',
        'new-mexico': '35',
        'new-york': '36',
        'north-carolina': '37',
        'north-dakota': '38',
        'ohio': '39',
        'oklahoma': '40',
        'oregon': '41',
        'pennsylvania': '42',
        'rhode-island': '44',
        'south-carolina': '45',
        'south-dakota': '46',
        'tennessee': '47',
        'texas': '48',
        'utah': '49',
        'vermont': '50',
        'virginia': '51',
        'washington': '53',
        'west-virginia': '54',
        'wisconsin': '55',
        'wyoming': '56',
    };

    const stateFIPS = FIPSfromStateName[stateName];

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

        const counties = topojson.feature(usData, {type: 'GeometryCollection', geometries: usData.objects.counties.geometries.filter((county) => String(county.id).length - String(stateFIPS).length == 3 && String(county.id).substring(0,String(stateFIPS).length) == String(stateFIPS))}).features;

        svg.selectAll('.county')
        .data(counties)
        .enter().append('path')
        .attr('class', 'county')
        .attr('d', path);
    }, []);

    return (
        <div id="map"></div>
        )
}