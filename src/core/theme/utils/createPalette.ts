import { merge } from 'lodash';
import { defaultPalette } from './defaultPalette';
import { Palette } from '../viewModel/palette.vm';

export const createPalette = ({ ...palette }: Palette) => {
  console.log(merge({ ...defaultPalette }, palette));

  return merge({ ...defaultPalette }, palette);
};
