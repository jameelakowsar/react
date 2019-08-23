import React from 'react';

export default class JustTesting extends React.Component {

    componentDidMount () {
        this.setState({ error: '404 not found' });
    }
    onClickHandler = () => {

    }
    render () {
        console.log(this.state, 'state values');
        return(
            <h1 onClick={()=>{this.onClickHandler('H')}}>Jammu</h1>
        );
    }
}
