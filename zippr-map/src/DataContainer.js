import React from 'react';
import { jsonStructure, graphData, lineData } from './JSON';
import DisplayTable from './DisplayTable';
import Graph from './Graph';

export default class DataContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            studentData: jsonStructure,
            graphData: lineData,
        };
    }

    render() {
        const studentData = this.state.studentData;
        return (
            <React.Fragment>
                <div>
                    {/* <Graph graphData={this.state.graphData} /> Graph part not done */}
                    <DisplayTable data={this.state.studentData} />
                </div>
            </React.Fragment>
        );
    }
}
