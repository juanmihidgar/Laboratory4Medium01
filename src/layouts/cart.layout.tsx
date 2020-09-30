import React from 'react';
import * as classes from './cart.layout.styles';

export const CartLayout: React.FunctionComponent = props => {
  const { children } = props;
  return <div className={classes.root}>{children}</div>;
};
