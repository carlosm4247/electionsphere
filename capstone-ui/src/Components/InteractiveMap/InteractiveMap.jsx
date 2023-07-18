import React, { useEffect } from 'react';
import * as topojson from 'topojson-client';
import usData from '../../data/us.json';
import "./InteractiveMap.css";

export default function InteractiveMap() {
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
        .attr('d', path);
    }, []);

    return (
        <div id="map"></div>
        )
}
