import { Theme, ThemeContext } from 'core/theme';
import React from 'react';

export const ProductListLayout: React.FunctionComponent = () => {
  const { theme, setTheme, palette } = React.useContext(ThemeContext);

  const onChangeTheme = () => {
    setTheme(theme === Theme.White ? Theme.Black : Theme.White);
    console.log(palette);
  };

  return (
    <>
      <button onClick={onChangeTheme}></button>
      <div>{'hola desde productList'}</div>
    </>
  );
};
