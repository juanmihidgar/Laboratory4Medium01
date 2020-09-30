import React from 'react';
import { routes } from 'core/router';
import { Link } from 'react-router-dom';
import { ProductListLayout, CartLayout } from 'layouts';
import * as classes from 'core/styles';

export const ProductListScene: React.FC = () => {
  return (
    <>
      <div className={classes.main}>
        <ProductListLayout />
      </div>
      <CartLayout>
        <button>hola</button>
        <Link to={routes.checkout}>Finish</Link>
      </CartLayout>
    </>
  );
};
