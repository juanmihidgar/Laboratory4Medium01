import { ThemeContext } from 'core/theme';
import React from 'react';

export const ProductListLayout: React.FunctionComponent = () => {
  const themeContext = React.useContext(ThemeContext);

  console.log(themeContext.palette);

  return (
    <>
      <div>{'hola desde productList'}</div>
    </>
  );
};
