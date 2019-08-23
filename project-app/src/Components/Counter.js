import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
        this.setState({ count: 90 });
        console.log('constuructor,', this.state, this.state.count);
    };
    // state = { count: 0 }

    // increment = () => {
    //     this.props.dispatch({ type: 'INCREMENT' });
    //     // this.setState({
    //     //     count: this.state.count + 1
    //     // });
    // }

    // decrement = () => {
    //     this.props.dispatch({ type: 'DECREMENT' });
    //     // this.setState({
    //     //     count: this.state.count - 1
    //     // });
    // }

    render() {
        return (
            <div>
                <h2>Counter</h2>
                <div>
                    {/* <button onClick={this.decrement}>-</button> */}
                    <span>{this.state.count}</span>
                    {/* <button onClick={this.increment}>+</button> */}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    count: state.count,
})

export default connect(mapStateToProps)(Counter);