import React from 'react';

export const Button: React.FunctionComponent<{
  onClick: () => void;
  buttonText: string;
  classes?: string;
}> = ({ onClick, buttonText, classes }) => {
  return (
    <button className={classes} onClick={onClick}>
      {buttonText}
    </button>
  );
};
