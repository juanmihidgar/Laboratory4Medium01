import React from 'react';
import { Button } from 'common/components/button';
import { Theme, ThemeContext } from 'core/theme';
import * as classes from './cart.layout.styles';

export const CartLayout: React.FunctionComponent<{ onToggle: () => void }> = ({
  onToggle,
}) => {
  const { theme, setTheme } = React.useContext(ThemeContext);
  const { palette } = React.useContext(ThemeContext);
  const className = classes.generateStyles(palette);

  const onChangeTheme = () => {
    setTheme(theme === Theme.White ? Theme.Black : Theme.White);
  };

  return (
    <div className={className.root}>
      <Button
        onClick={onChangeTheme}
        buttonText="Change Theme"
        classes={className.themeButton}
      />

      <Button
        onClick={onToggle}
        buttonText=""
        classes={className.toggleButton}
      />
    </div>
  );
};
