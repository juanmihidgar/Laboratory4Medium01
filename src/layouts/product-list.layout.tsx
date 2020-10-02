import React from 'react';
import { Button } from 'common/components/button/button';
import { Theme, ThemeContext } from 'core/theme';

export const ProductListLayout: React.FunctionComponent<{
  onToggle: () => void;
}> = ({ onToggle }) => {
  const { theme, setTheme, palette } = React.useContext(ThemeContext);

  const onChangeTheme = () => {
    setTheme(theme === Theme.White ? Theme.Black : Theme.White);
  };

  return (
    <>
      <button onClick={onToggle}></button>
      <Button
        onClick={onChangeTheme}
        buttonText="Change Theme"
        classes={['themeButton', 'random']}
      ></Button>
      <button onClick={onChangeTheme}>cambia tema</button>
      <div>{'hola desde productList'}</div>
    </>
  );
};
