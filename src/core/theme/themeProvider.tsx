import React from 'react';
import { createPalette } from './utils/createPalette';
import { defaultPalette } from './utils/defaultPalette';
import { Palette } from './viewModel/Palette.vm';

export const ThemeContext = React.createContext({
  palette: defaultPalette,
  setPalette: (palette: Palette) => {
    createPalette(palette);
  },
});

export const MyThemeProvider = props => {
  const [palette, setPalette] = React.useState(defaultPalette);

  return (
    <ThemeContext.Provider value={{ palette, setPalette }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
