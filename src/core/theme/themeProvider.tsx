import React from 'react';
import { defaultPalette } from './utils/defaultPalette';
import { whiteTheme, blackTheme } from './theme';
import { Palette } from './viewModel/palette.vm';
import * as defaultStyles from './commonStyles';

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
});

export const MyThemeProvider = props => {
  const [palette, setPalette] = React.useState(defaultPalette);
  const [theme, setTheme] = React.useState(Theme.White);

  React.useEffect(() => {
    setPalette(themes[theme]);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ palette, setTheme, theme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
