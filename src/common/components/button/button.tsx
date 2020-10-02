import React from 'react';
import { generateStyles } from './button.styles';
import { ThemeContext } from 'core/theme';

export const Button: React.FunctionComponent<{
  onClick: () => void;
  buttonText: string;
  classes: string[];
}> = ({ onClick, buttonText, classes }) => {
  const { palette } = React.useContext(ThemeContext);
  const styles = generateStyles(palette);

  const finalClasses = () => {};

  return (
    <button
      className={classes.reduce(
        (acc, value) => (acc += styles[value] + ' '),
        ''
      )}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};
