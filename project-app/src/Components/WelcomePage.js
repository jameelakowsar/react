import React from 'react';
// import PropTypes from 'prop-types';
import SignUp from './SignUp';
import PieLayout from './PieLayout';
import ContextAppPage from './ContextValues/ContextAppPage';
import JustTesting from './JustTesting';
// import { connect } from 'react-redux';

export default class WelcomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignUP: false,
            isPieChart: false,
            isContextThems: false,
        }
    }

    componentWillMount() {
        // Any API call before render.
    }

    componentDidMount() {
        // set the values after the render.
    }

    signUpForm = (e) => {
        this.setState({ isSignUP: true });
    }

    pieLayout = (e) => {
        this.setState({ isPieChart: true });
    }

    contextThems = (e) => {
        this.setState({ isContextThems: true });
    }

    justTestig = () => {
        this.setState({ isJustTesting: true });
    }

    render() {
        return (
            <div>
                <h1>Hello World!!!</h1>
                <div onClick={this.signUpForm}> SignUp Form </div>
                <div onClick={this.pieLayout}> PieLayout </div>
                <div onClick={this.contextThems}> ContextThems </div> 
                <div onClick={this.justTestig}> JustTesting </div> 
                 { this.state.isSignUP && <SignUp />}
                { this.state.isPieChart && <PieLayout />}
                { this.state.isContextThems && <ContextAppPage/> }
                { this.state.isJustTesting && <JustTesting/> }

            </div>
        );
    }
}

// export default connect(null)(WelcomePage);