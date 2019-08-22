import React from 'react';
import { jsonStructure, graphData } from './JSON';
import DisplayTable from './DisplayTable';

export default class DataContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            studentData: jsonStructure,
        };
    }

    render() {
        const studentData = this.state.studentData;
        return (
            <React.Fragment>
                {/* <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Date</th>
                            <th scope="col">City</th>
                            <th scope="col">District</th>
                            <th scope="col">College</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            studentData && studentData.map((data) => {
                                return (
                                    <tr>
                                        <td>{data.JoiningDate ? data.JoiningDate : '--'}</td>
                                        <td>{data.City ? data.City : '--'}</td>
                                        <td>{data.District ? data.District : '--'}</td>
                                        <td>{data.College ? data.College : '--'}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table> */}
                {/* <div style={{width: '60%', height: '200px', border: '5px', borderColor: '#d6d7da'}}>
                        Hell
                </div> */}
                <DisplayTable data={this.state.studentData}/>
            </React.Fragment>
        );
    }
}
