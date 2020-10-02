import React, { useEffect } from 'react';
import { defaultPalette } from './utils/defaultPalette';
import { whiteTheme, blackTheme } from './theme';
import { Palette } from './viewModel/palette.vm';

export enum Theme {
  Default,
  Black,
  White,
}

const themes: { [key in Theme]: Palette } = {
  [Theme.Default]: defaultPalette,
  [Theme.White]: whiteTheme,
  [Theme.Black]: blackTheme,
};

export const ThemeContext = React.createContext({
  palette: defaultPalette,
  setTheme: (theme: Theme) => {},
  theme: Theme.Default,
  getPalette: () => {},
});

export const MyThemeProvider = props => {
  const [palette, setPalette] = React.useState(defaultPalette);
  const [theme, setTheme] = React.useState(Theme.White);

  React.useEffect(() => {
    setPalette(themes[theme]);
    //  console.log('activeTheme => ', theme);
  }, [theme]);

  const getPalette = () => {
    console.log(themes);
    console.log(theme);
    console.log('en la paleta', themes[theme]);
    return themes[theme];
  };

  return (
    <ThemeContext.Provider value={{ palette, setTheme, theme, getPalette }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
