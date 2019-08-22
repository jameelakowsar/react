import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import './index.css';

const StyledTableCell = withStyles({
	head: {
		backgroundColor: 'white',
		color: 'black',
		fontSize: 18,
		fontWeight: 'bold'
	},
	body: {
		fontSize: 14,
		fontWeight: 'bold',
		borderBottom: '1px solid white'
	},
})(TableCell);

const StyledTableRow = withStyles({
	root: {
		'&:nth-of-type(odd)': {
			backgroundColor: '#f0f4f7',
		},
		'&:nth-of-type(even)': {
			backgroundColor: '#f7f7f7',
		},
	},
})(TableRow);

const StyledTable = withStyles({
	root: {
		width: '70%',
		// marginTop: '10px',
		marginLeft: '30px',
		marginBottom: '50px',
		overflowX: 'auto',
		minWidth: 500,
		maxWidth: 700,
		border: '2px solid #5f597d',
	}
})(Table)

class DisplayTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}
	render() {
		return (
			<React.Fragment>
				<div className="header">
					Report
				</div>
				<StyledTable>
					<TableHead>
						<StyledTableRow>
							<StyledTableCell align="left">Date</StyledTableCell>
							<StyledTableCell align="left">City</StyledTableCell>
							<StyledTableCell align="left">District</StyledTableCell>
							<StyledTableCell align="left">College</StyledTableCell>
						</StyledTableRow>
					</TableHead>
					<TableBody>
						{
							this.props.data.map((row) => (
								<StyledTableRow >
									<StyledTableCell align="left">{row.JoiningDate}</StyledTableCell>
									<StyledTableCell align="left">{row.City}</StyledTableCell>
									<StyledTableCell align="left">{row.District}</StyledTableCell>
									<StyledTableCell align="left">{row.College}</StyledTableCell>
								</StyledTableRow>
							))
						}
					</TableBody>
				</StyledTable>
			</React.Fragment>
		);
	}
}
export default DisplayTable;