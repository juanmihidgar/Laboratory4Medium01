import React from 'react';
import { generateButtonStyles } from 'core/theme/commonStyles';
import { generateStyles } from './button.styles';
import { ThemeContext } from 'core/theme';

export const Button: React.FunctionComponent<{
  onClick: () => void;
  buttonText: string;
  classes?: string[];
}> = ({ onClick, buttonText, classes }) => {
  const { palette } = React.useContext(ThemeContext);

  const defaultStyles = generateButtonStyles(palette);
 /* const styles = generateStyles(palette);

  const specificClass = () => {
    return classes.reduce((acc, value) => (acc += styles[value] + ' '), '');
  };
*/
  return (
//    <button className={`${defaultStyles} ${specificClass()}`} onClick={onClick}>
    <button className={`${defaultStyles}`} onClick={onClick}>
      {buttonText}
    </button>
  );
};
