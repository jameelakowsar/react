import React from 'react';

export default class DummyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dummyState: 10,
            value: this.props.value,
            data: this.props.data,
        }
        this.ref = React.createRef();
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('In getDerivedStateProps ', 'nextProps', nextProps, 'prevState', prevState);
        if (nextProps.data !== prevState.data || nextProps.value !== prevState.value) {
            return { data: nextProps.data,  value: nextProps.value  };
        }
        return null;
    }

    componentDidMount(){
        console.log('In componentDidMount ', 'this.props', this.props, 'this.state', this.state);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('In shouldComponentUpdate ', 'nextProps', nextProps, 'nextState', nextState, 'this.state', this.state);
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('In getSnapshotBeforeUpdate ', 'prevProps', prevProps, 'prevState', prevState);
        return 123;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log(this.ref.current, 'refff');
        console.log('In componentDidUpdate ', 'prevProps', prevProps, 'prevState', prevState, 'snapshot', snapshot, 'this.stae', this.state);
    }

    render() {
       console.log( 'renderr', hellVar)
       if (1) {
           let hell = 10;
           var hellVar = 20;
       }
        return (
            <div name="nnn" id={909090} >
                <input type="text" name="oneone"  ref={this.ref} id={12345}/>
                <p> DummyState: {this.state.dummyState}</p>
                <p>Value: {this.state.value}</p>
                <p>Data: {this.state.data}</p>
                <div>Helloooooooooooooo</div>
            </div>
        );
    }

}