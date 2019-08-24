import {ThemeContextConfig} from './contextConfig';
import React from 'react';
class ThemeButton extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        let props = this.props;
        let theme = this.context;
        return (
            <div>
                <button {...props}
                    style={{backgroundColor: theme.background}}>
                    Change
                </button>
            </div>
        );
    }
}
ThemeButton.contextType = ThemeContextConfig;
export default ThemeButton;
