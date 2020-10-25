import React from 'react';
import { routes } from 'core/router';
import { Link } from 'react-router-dom';
import { ProductListLayout, CartLayout } from 'layouts';
import * as classes from './product-list.scene.styles';
import { ThemeContext } from 'core/theme';

enum SidebarState {
  Default,
  Expanded,
  Collapsed,
}

export const ProductListScene: React.FC = () => {
  const [sidebarState, setSidebarState] = React.useState(SidebarState.Default);
  const { palette, productList, setProductList } = React.useContext(
    ThemeContext
  );
  const className = classes.generateStyles(palette);

  const sidebarStateClass = {
    [SidebarState.Default]: '',
    [SidebarState.Expanded]: className.expanded,
    [SidebarState.Collapsed]: className.collapsed,
  };

  const onToggle = () => {
    setSidebarState(
      sidebarState === SidebarState.Default ||
        sidebarState === SidebarState.Collapsed
        ? SidebarState.Expanded
        : SidebarState.Collapsed
    );
  };

  return (
    <div className={className.general}>
      <div className={className && className.productListBlock}>
        <ProductListLayout />
      </div>

      <div
        className={`${className.sidebar} ${sidebarStateClass[sidebarState]}`}
      >
        <CartLayout onToggle={onToggle} sidebarState={sidebarState} />
        <Link to={routes.checkout}>Finish</Link>
      </div>
    </div>
  );
};
