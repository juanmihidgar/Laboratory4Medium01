export interface Palette {
  common?: {
    black?: string;
    white?: string;
    type?: string;
    scrollbarBackground?: string;
    textColor?: string;
  };

  primary?: {
    light?: string;
    main?: string;
    dark?: string;
    contrastText?: string;
  };

  navbar?: {
    main?: string;
    secondary?: string;
  };

  secondary?: {
    light?: string;
    main?: string;
    dark?: string;
    contrastText?: string;
  };

  error?: {
    light?: string;
    main?: string;
    dark?: string;
    contrastText?: string;
  };

  warning?: {
    light?: string;
    main?: string;
    dark?: string;
    contrastText?: string;
  };

  info?: {
    light?: string;
    main?: string;
    dark?: string;
    contrastText?: string;
  };

  success?: {
    light?: string;
    main?: string;
    dark?: string;
    contrastText?: string;
  };

  button?: {
    light?: string;
    main?: string;
    dark?: string;
    textColor?: string;
    borderColor?: string;
  };
  productCard?: {
    light?: string;
    main?: string;
    dark?: string;
    background?: string;
    borderColor?: string;
    imageBackground?: string;
  };
}
