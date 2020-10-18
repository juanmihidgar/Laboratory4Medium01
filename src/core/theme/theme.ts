import { Palette } from './viewModel/palette.vm';
import { createPalette } from './utils/createPalette';

export const whiteTheme: Palette = createPalette({
  common: {
    textColor: '#333333',
    scrollbarBackground: '#E8BD23',
  },
  primary: {
    main: '#F0F0F0',
  },
  secondary: {
    main: '#E8BD23',
  },
  navbar: {
    main: 'red',
    secondary: 'green',
  },
  productCard: {
    background: '#ec8f18',
    borderColor: '#50BAA8',
    imageBackground: '#F0F0F0',
  },
  button: {
    main: '#FC8260',
  },
});

export const blackTheme: Palette = createPalette({
  common: {
    textColor: '#ffffff',
    scrollbarBackground: '#ec8f18',
  },
  primary: {
    main: '#161e25',
    dark: '#1d252f',
  },
  secondary: {
    main: '#bf7519',
  },
  navbar: {
    main: '#ffffff',
    secondary: '#449ad5',
  },
  productCard: {
    background: '#1d252f',
    borderColor: '#ec8f18',
    imageBackground: '#333333',
  },
  button: {
    main: '#915757',
  },
});
