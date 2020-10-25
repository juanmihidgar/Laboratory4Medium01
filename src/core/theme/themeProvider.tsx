import React, { Dispatch } from 'react';
import { defaultPalette } from './utils/defaultPalette';
import { whiteTheme, blackTheme } from './theme';
import { Palette } from './viewModel/palette.vm';
import { ProductsDataMock, productsMock } from 'core/api';

export enum Theme {
  Default,
  Black,
  White,
}

const themes: { [key in Theme]: Palette } = {
  [Theme.Default]: defaultPalette,
  [Theme.White]: whiteTheme,
  [Theme.Black]: blackTheme,
};

type ContextProps = {
  palette: Palette;
  setTheme: Dispatch<React.SetStateAction<Theme>>;
  theme: number;
  productList: ProductsDataMock;
  setProductList: Dispatch<React.SetStateAction<ProductsDataMock>>;
};

export const ThemeContext = React.createContext<ContextProps>({
  palette: defaultPalette,
  setTheme: theme => {},
  theme: Theme.Default,
  productList: productsMock,
  setProductList: () => {},
});

export const MyThemeProvider = props => {
  const [palette, setPalette] = React.useState(defaultPalette);
  const [theme, setTheme] = React.useState(Theme.Black);
  const [productList, setProductList] = React.useState<ProductsDataMock>(
    productsMock
  );

  React.useEffect(() => {
    setPalette(themes[theme]);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{ palette, setTheme, theme, productList, setProductList }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};
