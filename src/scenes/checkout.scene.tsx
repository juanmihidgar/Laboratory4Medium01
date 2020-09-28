import React from 'react';
import { routes } from 'core/router';
import { Link } from 'react-router-dom';

export const CheckoutScene: React.FC = () => {
  return (
    <>
      <h1>Hello from Checkout List Scene!</h1>
      <Link to={routes.productList}>Product List</Link>
    </>
  );
};
