import React from 'react';
import { Button } from 'common/components/button';
import { Theme, ThemeContext } from 'core/theme';
import * as classes from './cart.layout.styles';
import { CartProduct } from 'pods/cartProduct';
import { cloneDeep, merge } from 'lodash';

export const CartLayout: React.FunctionComponent<{
  onToggle: () => void;
  sidebarState: number;
}> = ({ onToggle, sidebarState }) => {
  const { theme, setTheme, productList, setProductList } = React.useContext(
    ThemeContext
  );
  const { palette } = React.useContext(ThemeContext);
  const className = classes.generateStyles(palette);

  const onChangeTheme = () => {
    setTheme(theme === Theme.White ? Theme.Black : Theme.White);
  };

  const onProductChecked = (productId: number) => (): void => {
    const clonedList = cloneDeep(productList);

    Object.keys(clonedList).map(item =>
      Object.keys(clonedList[item]).map(product => {
        if (clonedList[item][product].id === productId) {
          clonedList[item][product].checked = !clonedList[item][product]
            .checked;
        }
      })
    );

    setProductList(clonedList);
  };

  return (
    <div className={className.cartContent}>
      <Button
        onClick={onChangeTheme}
        buttonText="Change Theme"
        classes={className.themeButton}
      />

      <Button
        onClick={onToggle}
        buttonText=""
        classes={className.toggleButton}
      />

      {/* Review this multiple Map */}
      <div className={className.cartProductList}>
        {Object.keys(productList).map(item =>
          Object.keys(productList[item]).map(
            product =>
              productList[item][product].checked && (
                <CartProduct
                  key={productList[item][product].id}
                  product={productList[item][product]}
                  sidebarState={sidebarState}
                  onProductChecked={onProductChecked}
                />
              )
          )
        )}
      </div>
    </div>
  );
};
