import React, { useState } from 'react';

const HooksPlayGround = () => {
    const [activated, setActivate] = useState(false)
    const buttonText = activated ? 'Active' : 'Inactive';

    const [count, setCount] = useState(0)

    const changeButtonText = () => setActivate(!activated)

    // const incrementValue = () => setCount(count + 1)

    const incrementValue = () => setCount((prevState) => { // another way of arrow function
        return prevState + 1;
    });

    return (
        <div>
            <button onClick={changeButtonText}>
                {buttonText}
            </button>
            <br/><br/>
            <button onClick={incrementValue}>
                Increase
            </button>
            <h1>{count}</h1>
        </div>
    )
}

export default HooksPlayGround;