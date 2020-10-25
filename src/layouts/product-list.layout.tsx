import React, { useEffect } from 'react';
import { ProductCard } from 'pods/productCard';
import { ProductInfo } from 'core/api';
import * as classes from './product-list.layout.styles';
import { ThemeContext } from 'core/theme';
import { cloneDeep, merge } from 'lodash';

export enum ProductType {
  kittyes,
  puppyes,
}

export const ProductListLayout: React.FunctionComponent = () => {
  const { palette, productList, setProductList } = React.useContext(
    ThemeContext
  );

  const productChain: { [key in ProductType]: string } = {
    [ProductType.kittyes]: 'kittyes',
    [ProductType.puppyes]: 'puppyes',
  };

  const [typeFilter, setTypeFilter] = React.useState<string>(
    productChain[ProductType.kittyes]
  );
  const [filteredProductList, setFilteredProductList] = React.useState<
    ProductInfo[]
  >(productList[typeFilter]);
  const [imagesLoaded, setImagesLoaded] = React.useState<number>(0);

  const className = classes.generateStyles(palette);

  React.useEffect(() => {
    setFilteredProductList(productList[typeFilter]);
  }, [productList]);

  const onImageLoaded = (): void => {
    setImagesLoaded(imagesLoaded + 1);
  };

  const onClickFilter = type => e => {
    e.preventDefault();

    setTypeFilter(type);
  };

  const onProductChecked = (productId: number) => (): void => {
    const clonedList = cloneDeep(filteredProductList);
    let finalList = {};
    finalList[typeFilter] = clonedList;

    clonedList.map(product => {
      if (product.id === productId) {
        product.checked = !product.checked;
      }
    });

    const finalProductList = merge({}, productList, finalList);

    setProductList(finalProductList);
  };

  useEffect(() => {
    setImagesLoaded(0);
    setFilteredProductList(productList[typeFilter]);
  }, [typeFilter]);

  return (
    <>
      <div
        className={
          imagesLoaded === filteredProductList.length
            ? className.notLoading
            : className.loadingScreen
        }
      >
        Loading...
      </div>
      <div className={className.main}>
        <div className={className.navbar}>
          <a
            className={
              typeFilter === productChain[ProductType.kittyes]
                ? className.activeLink
                : className.inactiveLink
            }
            href="#"
            onClick={onClickFilter(productChain[ProductType.kittyes])}
          >
            Kittyes
          </a>
          |
          <a
            className={
              typeFilter === productChain[ProductType.puppyes]
                ? className.activeLink
                : className.inactiveLink
            }
            href="#"
            onClick={onClickFilter(productChain[ProductType.puppyes])}
          >
            Puppyes
          </a>
        </div>
        <div className={className.productListContent}>
          {// Review why instanceOf
          filteredProductList instanceof Array &&
            filteredProductList.map(
              ({ id, title, picUrl, description, checked }) => (
                <ProductCard
                  key={id}
                  id={id}
                  imageUrl={picUrl}
                  title={title}
                  description={description}
                  onImageLoad={onImageLoaded}
                  checked={checked}
                  onProductChecked={onProductChecked}
                />
              )
            )}
        </div>
      </div>
    </>
  );
};
