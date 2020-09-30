import React from 'react';
import { createPalette } from './utils/createPalette';
import { defaultPalette } from './utils/defaultPalette';
import { Palette } from './viewModel/Palette.vm';

export const ThemeContext = React.createContext({
  palette: defaultPalette,
  makePalette: (palette: Palette) => {},
});

export const MyThemeProvider = props => {
  const [palette, setPalette] = React.useState(defaultPalette);

  const makePalette = (palette: Palette) => {
    setPalette(createPalette(palette));
  };

  return (
    <ThemeContext.Provider value={{ palette, makePalette }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
