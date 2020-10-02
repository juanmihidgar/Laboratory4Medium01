import { merge } from 'lodash';
import { defaultPalette } from './defaultPalette';
import { Palette } from '../viewModel/palette.vm';
import { LightenDarkenColor } from './lightenDarken';

export const createPalette = (palette: Palette) => {
  return merge({}, defaultPalette, addingColorsToPalette(palette));
};

const addingColorsToPalette = ({ ...paletteItems }: Palette): Palette => {
  Object.entries(paletteItems).map(value => {
    const item = value[1];

    if (item.main !== undefined) {
      item.light =
        item.light === undefined
          ? LightenDarkenColor(item.main, -20)
          : item.light;

      item.dark =
        item.dark === undefined ? LightenDarkenColor(item.main, 20) : item.dark;
    }
  });

  return paletteItems;
};
