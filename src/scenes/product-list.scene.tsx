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

const sidebarStateClass = {
  [SidebarState.Default]: '',
  [SidebarState.Expanded]: classes.expanded,
  [SidebarState.Collapsed]: classes.collapsed,
};

export const ProductListScene: React.FC = () => {
  const [sidebarState, setSidebarState] = React.useState(SidebarState.Default);

  const { palette } = React.useContext(ThemeContext);
  const classescitas = classes.generateStyles(palette);

  const onToggle = () => {
    setSidebarState(
      sidebarState === SidebarState.Default ||
        sidebarState === SidebarState.Collapsed
        ? SidebarState.Expanded
        : SidebarState.Collapsed
    );
  };

  return (
    <div className={classes.general}>
      <div className={classescitas && classescitas.productListBlock}>
        <ProductListLayout onToggle={onToggle} />
      </div>

      <div className={`${classes.sidebar} ${sidebarStateClass[sidebarState]}`}>
        <CartLayout />
        <Link to={routes.checkout}>Finish</Link>
      </div>
    </div>
  );
};
