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
    main: '#FF9385',
  },
  navbar: {
    main: '#FF9385',
    secondary: '#50BAA8',
  },
  productCard: {
    background: '#FF9385',
    borderColor: '#50BAA8',
    imageBackground: '#F0F0F0',
  },
  button: {
    main: '#50BAA8',
    borderColor: '#FC8260',
    textColor: '#ffffff',
  },
});

export const blackTheme: Palette = createPalette({
  common: {
    textColor: '#ffffff',
    scrollbarBackground: '#ec8f18',
  },
  primary: {
    main: '#161e25',
    dark: '#A1600B',
  },
  secondary: {
    main: '#1d252f',
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
    main: '#F09016',
    textColor: '#000000',
    borderColor: '#F09016',
  },
});
