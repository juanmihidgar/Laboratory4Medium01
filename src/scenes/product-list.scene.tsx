import React from 'react';
import { routes } from 'core/router';
import { Link } from 'react-router-dom';

export const ProductListScene: React.FC = () => {
  return (
    <>
      <h1>Hello from Product List Scene!</h1>
      <Link to={routes.checkout}>Checkout</Link>
    </>
  );
};
