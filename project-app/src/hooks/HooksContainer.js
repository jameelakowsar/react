import React, { useState, useEffect, useReducer } from 'react';
import * as Reducer from '../store/hooks_state/HooksReducer';
import * as Actions from '../store/actions/actions.js';

const HooksContainer = () => {
    const [stateVal, setVal] = useState(0)
    const [useEffectStateVal, useEffectSetVal] = useState(null)
    const [state, dispatch] = useReducer(Reducer.HooksReducer, Reducer.initialState)

    useEffect(() => {
        setTimeout(() => useEffectSetVal("useEffect Worked"), 3000);
    }, [stateVal])

    const incrementValue = () => {
        setVal(stateVal + 1);
    }

    const decrementValue = () => {
        setVal(stateVal - 1);
    }

    const useChangeEffectValue = () => {
        useEffectSetVal("useEffect string changed to Dell String")
    }

    const handleDispatchTrue = () => {
        dispatch(Actions.success())
    }

    const handleDispatchFalse = () => {
        dispatch(Actions.failure())
    }
  
    return (
        <div>{console.log(useState, 'usestate value', state, dispatch)}
            React Hooks
            <br />
            <button onClick={() => incrementValue()}>Increment Local value</button>
            <br />
            <br />
            <button onClick={() => decrementValue()}>Decrement Local value</button>
            <br />
            <br />
            <button onClick={() => useChangeEffectValue()}>Use Effect value</button>
            <br />
            <br />
            <button onClick={() => handleDispatchTrue()}>Dispatch True</button>
            <button onClick={() => handleDispatchFalse()}>Dispatch False</button>
            <br />
            <div>
                <p>Local state value: {stateVal} </p>
            </div>
            <br />
            <div>
                {
                    useEffectStateVal
                        ? <p>{useEffectStateVal}</p>
                        : <p>No value of useEffect</p>
                }
           
            <br />
            {
                state.stateProp1
                ? <p> stateProp1 is True </p>
                : <p> stateProp1 is false </p>
            }
             </div>
        </div>
    )
}

export default HooksContainer;