import React from 'react';
export const themes = {
    light: {
        background: '#eeeeee',
    },
    dark: {
        background: '#222222',
    }
};

export const ThemeContextConfig = React.createContext({
    theme: themes.dark,
});