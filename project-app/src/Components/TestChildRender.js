import React from 'react';

import ChildOneComponent from './ChildOneComponent';

export default class TestChildRender extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            increase: 0,
        }
    }

    componentDidMount () {
        console.log('did mount of parent');
    }

    componentWillUnmount () {
        console.log('unmount of parent ')
    }

    componentDidUpdate () {
        console.log('did update of parent');
    }

    increaseButton = () => {
        console.log('method of parent increase value');
        this.setState((prevState) => ({
                increase: prevState.increase + 1
        }));
    }

    render () {
        console.log('parent render')
        return (
            <li key="1">Hello 1</li>,
            <li key="2">Hello 2</li>,
            <h1 key="3">Hello h1</h1>,
            <h2>Hello 4567</h2>,
            <h3>Hello code here</h3>
            // <div>
            //     <button onClick={this.increaseButton}>
            //         Increase
            //     </button>
            //     <h2>{this.state.increase}</h2>
            //     {/* <ChildOneComponent increase={this.state.increase} /> */}
            // </div>
        )
    }
}