import { Palette } from '../viewModel/Palette.vm';

export const defaultPalette: Palette = {
  common: {
    black: '#000',
    white: '#fff',
    type: 'light',
  },
  primary: {
    light: '#7986cb',
    main: '#3f51b5',
    dark: '#303f9f',
    contrastText: '#fff',
  },
  secondary: {
    light: '#ff4081',
    main: '#f50057',
    dark: '#c51162',
    contrastText: '#fff',
  },
  error: {
    light: '#e57373',
    main: '#f44336',
    dark: '#d32f2f',
    contrastText: '#fff',
  },
  warning: {
    light: '#ffb74d',
    main: '#ff9800',
    dark: '#f57c00',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  info: {
    light: '#64b5f6',
    main: '#2196f3',
    dark: '#1976d2',
    contrastText: '#fff',
  },
  success: {
    light: '#81c784',
    main: '#4caf50',
    dark: '#388e3c',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  button: {
    light: '#81c784',
    main: '#4caf50',
    dark: '#388e3c',
    textColor: '#000',
  },
  productCard: {
    light: '#81c784',
    main: '#4caf50',
    dark: '#388e3c',
    background: 'red',
  },
};
