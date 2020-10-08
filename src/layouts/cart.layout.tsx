import React from 'react';
import { Button } from 'common/components/button';
import * as classes from './cart.layout.styles';
import { SvgIcon } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export const CartLayout: React.FunctionComponent<{ onToggle: () => void }> = ({
  onToggle,
}) => {
  return (
    <div className={classes.root}>
      <Button
        onClick={onToggle}
        buttonText="toggle"
        classes={['themeButton', 'toggleButton']}
      />
      {/* {ShoppingCartIcon} */}
    </div>
  );
};
