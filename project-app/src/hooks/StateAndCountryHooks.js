import React, { useState } from 'react';

const StateAndCountryHooks = () => {
    const [state, setState] = useState({
        city: '',
        country: '',
    })

    const handleCityChange = (event) => {
        console.log('in handle city change')
        setState({
            ...state, city: event.target.value
        })
    }

    const handleCountryChange = (event) => {
        setState({ 
            ...state, country:event.target.value
        })
    }
 
    return (
        <form>
            {console.log('in return...')}
            <div>
                <input
                    type="text"
                    placeholder="city"
                    value={state.city}
                    onChange={handleCityChange}
                />

                <input
                    type="text"
                    placeholder="country"
                    value={state.country}
                    onChange={handleCountryChange}
                />

                <h3>You live in {state.city} , {state.country}</h3>
            </div>
        </form>
    )
}
export default StateAndCountryHooks;


// --------------Another way (best way to write above state values)-------------

//  const [city, setCity] = useState('')
//  const [country, setCountry] = useState('')

//  const handleCityChange = (event) => setCity(event.target.value)
//  const handleCountryChange = (event) => setCountry(event.target.value)

//  // accessing with city and country varialbes.