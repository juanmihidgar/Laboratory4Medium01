import { Palette } from './viewModel/palette.vm';
import { createPalette } from './utils/createPalette';

export const whiteTheme: Palette = createPalette({
  primary: {
    main: '#f2f2f2',
  },
  productCard: {
    background: 'white',
  },
  button: {
    main: '#FC8260',
  },
});

export const blackTheme: Palette = createPalette({
  primary: {
    main: '#555555',
  },
  productCard: {
    background: 'red',
  },
  button: {
    main: '#915757',
  },
});
