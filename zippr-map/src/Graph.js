import React from 'react';
import * as d3 from 'd3'

class Graph extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        // this.drawGraph(1001, this.props.graphData);
    }

    drawGraph = (id, graphData) => {
        const wrapper = document.getElementById(id);

        const colors = {
            track: '#c3edfb',
            fill: '#00C0FF',
        };

        const xFormat = d3.format('.2')

        const width = 500;
        const height = 350;
        const margin = 20;

        const h = height - 2 * margin;
        const w = width - 2 * margin;

        //x scale
        const x = d3.scaleLinear()
            .domain(d3.extent(graphData, d => d.a)) //domain: [min,max] of a
            .range([margin, w])

        //y scale
        const y = d3.scaleLinear()
            .domain([0, d3.max(graphData, d => d.b)]) // domain [0,max] of b (start from 0)
            .range([h, margin])

        const line = d3.line()
            .x(d => x(d.a))
            .y(d => y(d.b))
            .curve(d3.curveCatmullRom.alpha(0.5)) //curve line

        const xTicks = x.ticks(6).map(d => (
            x(d) > margin && x(d) < w ?
                <g transform={`translate(${x(d)},${h + margin})`}>
                    <text>{xFormat(d)}</text>
                    <line x1='0' x1='0' y1='0' y2='5' transform="translate(0,-20)" />
                </g>
                : null
        ))

        const yTicks = y.ticks(5).map(d => (
            y(d) > 10 && y(d) < h ?
                <g transform={`translate(${margin},${y(d)})`}>
                    <text x="-12" y="5">{xFormat(d)}</text>
                    <line x1='0' x1='5' y1='0' y2='0' transform="translate(-5,0)" />
                    <line className='gridline' x1='0' x1={w - margin} y1='0' y2='0' transform="translate(-5,0)" />
                </g>
                : null
        ))
    }

    render() {
        return (
            <div className="graph" id="graphId">Hell</div>
        );
    }
}
export default Graph;