import React from 'react';
import { generateButtonStyles } from 'core/theme/commonStyles';
import { generateStyles } from './button.styles';
import { ThemeContext } from 'core/theme';
import { useDefineComponentStyle } from 'common/hooks';

export const Button: React.FunctionComponent<{
  onClick: () => void;
  buttonText: string;
  classes?: string[];
}> = ({ onClick, buttonText, classes }) => {
  const { palette } = React.useContext(ThemeContext);
  const { className } = useDefineComponentStyle(
    palette,
    generateButtonStyles,
    generateStyles,
    classes
  );

  return (
    <button className={className} onClick={onClick}>
      {buttonText}
    </button>
  );
};
