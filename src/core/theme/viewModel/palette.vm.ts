import { DefaultPalette } from './defaultPalette.vm';

export interface Palette extends DefaultPalette {
  productCard?: {
    background?: string;
  };
}
