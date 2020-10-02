import { DefaultPalette } from './defaultPalette.vm';

export interface Palette extends DefaultPalette {
  productCard?: {
    light?: string;
    main?: string;
    dark?: string;
    background?: string;
  };
}
