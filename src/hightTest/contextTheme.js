import {ThemeContextConfig, themes} from './contextConfig';
import ThemedButton from './contextButton';
import React from 'react';


function Toolbar(props) {
    return (
      <ThemedButton onClick={props.changeTheme}>
        Change Theme
      </ThemedButton>
    );
  }


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: themes.light,
        };

        this.toggleTheme = () => {
            this.setState(state => ({
                theme: state.theme === themes.dark ? themes.light:themes.dark,
            }));
        };
    }
    render() {
        return (
            <div>
                <ThemeContextConfig.Provider value={this.state.theme}>
                    <Toolbar changeTheme={this.toggleTheme}></Toolbar>
                </ThemeContextConfig.Provider>
                <section>
                    <ThemedButton />
                </section>
            </div>
        )
    }
}

export default App;