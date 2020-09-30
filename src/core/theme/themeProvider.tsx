import React, { useEffect } from 'react';
import { defaultPalette } from './utils/defaultPalette';
import { whiteTheme, blackTheme } from './theme';

export const ThemeContext = React.createContext({
  palette: defaultPalette,
  setTheme: (theme: string) => {},
  theme: '',
});

export const MyThemeProvider = props => {
  const [palette, setPalette] = React.useState(defaultPalette);
  const [theme, setTheme] = React.useState('white');

  React.useEffect(() => {
    console.log('whiteTheme =>', whiteTheme);
    console.log('blackTheme =>', blackTheme);
    setPalette(theme === 'white' ? whiteTheme : blackTheme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ palette, setTheme, theme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
