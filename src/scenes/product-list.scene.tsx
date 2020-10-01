import React from 'react';
import { routes } from 'core/router';
import { Link } from 'react-router-dom';
import { ProductListLayout, CartLayout } from 'layouts';
import * as classes from './product-list.scene.styles';

export const ProductListScene: React.FC = () => {
  const [expandedSidebar, setExpandedSidebar] = React.useState(false);

  const onToggle = () => {
    setExpandedSidebar(!expandedSidebar);
  };

  return (
    <div className={classes.general}>
      <div className={classes.productListBlock}>
        <ProductListLayout />
      </div>

      <div
        className={`${classes.sidebar} ${
          expandedSidebar ? classes.expanded : classes.collapsed
        }`}
      >
        <CartLayout />
        <Link to={routes.checkout}>Finish</Link>
      </div>
    </div>
  );
};
