import React from 'react';

export default class ChildOneComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: this.props.increase,
        }
    }

    static getDerivedStateFromProps (props, state) {
        console.log(props, state, 'gDSFP log');
    }

    componentDidMount () {
        console.log('did mount of child 1');
    }

    componentWillUnmount () {
        console.log('unmount of child 1');
    }

    // UNSAFE_componentWillReceiveProps (nextProps) {
    //     console.log('in unsafe will receive props');
    //     if (nextProps.increase !== this.props.increase) {
    //         this.setState({ value: nextProps.increase });
    //     }
    // }   

    // UNSAFE_componentWillUpdate () {
    //     console.log('unsafe of will update')
    // }

    render () {
        console.log('child 1 of render', );
        return (
            <div>
                this is child 1 component {this.state.value}
            </div>
        )
    }
}