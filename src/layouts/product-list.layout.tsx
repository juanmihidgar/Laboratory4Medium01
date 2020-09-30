import { ThemeContext } from 'core/theme';
import React from 'react';

export const ProductListLayout: React.FunctionComponent = () => {
  const themeContext = React.useContext(ThemeContext);

  const onChangeTheme = () => {
    themeContext.makePalette({
      success: {
        main: 'red',
      },
      productCard: {
        background: 'green',
      },
    });

    console.log(themeContext.palette);
  };

  return (
    <>
      <button onClick={onChangeTheme}></button>
      <div>{'hola desde productList'}</div>
    </>
  );
};
