// Composition example.
import React from 'react';

function Fancy(props) {
    return (
        <div className={props.color}>
            {props.children} {/* will render childs of Fancy in dilouge*/}
        </div>
    )
}

function Dilouge(props) {
    return (
        <Fancy color='red'>
            {props.children}
            <h1>{props.title}</h1>
            <p>{props.message}</p>
        </Fancy>
    )
}

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textValue: 'hello',
        }
    }

    onChangeValue = (e) => {
        this.setState({ textValue: e.target.value })
    }

    render() {
        return (
            <Dilouge title="title1" message="first message" >
            <input value={this.state.textValue} onChange = {this.onChangeValue} />
            </Dilouge>
        );
    }
}