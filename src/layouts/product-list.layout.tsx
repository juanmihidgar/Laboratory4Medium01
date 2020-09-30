import { ThemeContext } from 'core/theme';
import React from 'react';

export const ProductListLayout: React.FunctionComponent = () => {
  const themeContext = React.useContext(ThemeContext);

  const onChangeTheme = () => {
    themeContext.setTheme(themeContext.theme === 'white' ? 'black' : 'white');
  };

  return (
    <>
      <button onClick={onChangeTheme}></button>
      <div>{'hola desde productList'}</div>
    </>
  );
};
