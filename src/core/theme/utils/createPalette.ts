import { merge } from 'lodash';
import { defaultPalette } from './defaultPalette';
import { Palette } from '../viewModel/palette.vm';

export const createPalette = (palette: Palette) => {
  return merge(defaultPalette, palette);
};
