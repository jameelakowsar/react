// context value changes at consumer
import React from 'react';
import {ThemeContext} from './ThemeContext';

function ThemeToggler() {
    return (
        <ThemeContext.Consumer >
            {
                ({Theme, toggleTheme}) => (
                    <button
                    onClick={toggleTheme}
                    style={{backgroundColor: Theme.background}} >
                    Toggle Theme
                    </button>
            )}
        </ThemeContext.Consumer >    
    );
}

export default ThemeToggler;