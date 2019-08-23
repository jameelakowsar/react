import React, { useState, useEffect } from 'react';

const HooksEffect = () => {
    const [state, setState] = useState(0);

    const increaseValue = () => {
        console.log('in increase state', state);
        setState(state + 1);
    }

    useEffect(() => {
        console.log('in use effect', state);

        return () => {
            console.log('removing anything!!!', state)
        }
    })
    return React.createElement(
        "div",
        1,
        "helloooo!!!"
    );
    // <div>
    /* {console.log('in return method', state)}
    <button onClick={increaseValue}>
        Increase
    </button>
    <br />
    <h1>{state}</h1>
</div> */

}

export default HooksEffect;