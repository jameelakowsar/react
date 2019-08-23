import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';

import HooksContainer from './hooks/HooksContainer';
import HooksPlayGround from './hooks/HooksPlayGround';
import HooksEffect from './hooks/HooksEffect';
import StateAndCountryHooks from './hooks/StateAndCountryHooks';
import TestChildRender from './Components/TestChildRender';
import Counter from './Components/Counter';
import ParentComponent from './Components/HOC/ParentComponent';
// import OrderOfWord from './Components/OrderOfWord';
import DummyComponent from './Components/DummyComponent';
import ScrollTestComponent from './Components/ScrollTestComponent';


// function Box(props) {
//     return (
//         <div>
//             <h1>{props.title} This is a stateless functional component</h1>
//         </div>
//     )
// }

// const initialState = {
//     count: 0,
// }

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'INCREMENT':
//             return {
//                 count: state.count + 1,
//             };
//         case 'DECREMENT':
//             return {
//                 count: state.count - 1,
//             }
//             default: 
//             return state;
//     }
// }

// const store = createStore(reducer);

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            data: 1,
            value: "first",
        }
    }

    componentDidMount(){
        this.setState({data: 2, value: "second"});
    }

    render(){
        var hell = 10;
    return (
        <div>
            {/* <HooksPlayGround/> */}
            {/* <StateAndCountryHooks /> */}
            {/* <HooksEffect /> */}
            {/* <TestChildRender /> */}
            {/* <Box title="React!!! 890"/> */}
            {/* <Provider store={store}>
                <Counter />
            </Provider> */}
            {/* <ParentComponent /> */}
            {/* <OrderOfWord /> */}
            <ScrollTestComponent />
            <DummyComponent data={this.state.data} value={this.state.value} />
        </div>
    );
    }
}


export default App;
