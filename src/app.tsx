import React from 'react';
import { hot } from 'react-hot-loader/root';
import { RouterComponent } from 'core/router';
import { MyThemeProvider, ThemeContext } from 'core/theme';

const App: React.FunctionComponent = () => {
  const themeContext = React.useContext(ThemeContext);

  themeContext.setPalette({
    success: {
      main: 'red',
    },
    productCard: {
      background: 'green',
    },
  });

  console.log(themeContext.palette);

  return (
    <MyThemeProvider>
      <RouterComponent />
    </MyThemeProvider>
  );
};

export default hot(App);
