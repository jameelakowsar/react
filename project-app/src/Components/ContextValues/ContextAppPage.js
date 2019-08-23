
import React from 'react';
import { ThemeContext, themes} from './ThemeContext';
import ThemedButton from './ThemedButton';
import ThemeToggler from './ThemeToggler';

function Toolbar(props) {
    return (
      <ThemedButton onClick={props.changeTheme}>
        Change Theme
      </ThemedButton>
    );
  }

function Content() {
    return (
        <div>
            <ThemeToggler />
        </div>
    )
}  

class ContextAppPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Theme: themes.light,
            toggleTheme: this.toggleTheme,
        }
    }

    toggleTheme = () => {
        this.setState((state) => ({theme: state.theme === themes.dark ? themes.light : themes.dark }));
    }

    render () {
        return (
            <div>
                <ThemeContext.Provider value={this.state}>
                    {/* <Toolbar changeTheme={this.toggleTheme}/> */}
                    <Content />
                </ThemeContext.Provider>
                <div>
                    {/* <ThemedButton /> */}
                </div>
            </div>
        );
    }
}

export default ContextAppPage;