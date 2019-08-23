import React from 'react';
import { connect } from 'react-redux';
import { storeData, storeIndex } from '../store/actions/FernsNPetalsActions';

class ScrollTestComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.myRef = React.createRef();
	}

	triggerAction = (index) => {
		const myData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 23, 45, 22, 76, 89, 10, 89, 2, 28, 2, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 4, 5, 6, 7, 8, 9, 1, 23, 45, 22, 76, 89, 10, 89, 2, 28, 2, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 4, 5, 6, 7, 8, 9, 1, 23, 45, 22, 76, 89, 10, 89, 2, 28, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 90, 100000]
		this.props.storeData(myData, index);
	}

	handleScroll = () => {
		const node = this.myRef.current;
		const windowHeight = Math.floor(node.scrollHeight);
		const cHeight = Math.floor(node.clientHeight);
		const scrollT = Math.floor(node.scrollTop);
		if (windowHeight - cHeight === scrollT) {
			this.props.storeIndex(this.props.endIndex);
		}
	}

	componentDidMount() {
		this.triggerAction(20);
	}

	render() {
		console.log(this.props, 'all props data');
		return (
			<div id="scrollingDiv" onScroll={this.handleScroll} style={{ height: 300, overflowY: 'scroll' }} ref={this.myRef} >
				Nothing Right!!!
				{this.props.oData && this.props.oData.map((value) => (<div>{value}</div>))}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	console.log(state, 'state');
	const endIndex = state.indexValues.endIndex;
	return {
		endIndex,
		oData: state.FernsNPetals.slice(0, endIndex),
	};
}

export default connect(mapStateToProps, {
	storeData,
	storeIndex,
})(ScrollTestComponent);
