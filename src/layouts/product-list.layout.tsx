import React, { useEffect } from 'react';
import { ProductCard } from 'pods/productCard';
import { productsMock, ProductsDataMock } from 'core/api';
import * as classes from './product-list.layout.styles';
import { ThemeContext } from 'core/theme';

export enum ProductType {
  kittyes,
  puppyes,
}

const productChain: { [key in ProductType]: string } = {
  [ProductType.kittyes]: 'kittyes',
  [ProductType.puppyes]: 'puppyes',
};

export const ProductListLayout: React.FunctionComponent = () => {
  const { palette } = React.useContext(ThemeContext);
  const className = classes.generateStyles(palette);

  const [productType, setProductType] = React.useState<string>(
    productChain[ProductType.kittyes]
  );
  const [imagesLoaded, setImagesLoaded] = React.useState<number>(0);
  const [productList, setProductList] = React.useState<ProductsDataMock>(
    productsMock[productType]
  );

  const onImageLoaded = (): void => {
    setImagesLoaded(imagesLoaded + 1);
  };

  useEffect(() => {
    setProductList(productsMock[productType]);

    return () => {
      setImagesLoaded(0);
    };
  }, [productType]);

  const onChangeType = type => e => {
    e.preventDefault();

    setProductType(type);
  };

  return (
    <>
      <div
        className={
          imagesLoaded === productsMock[productType].length
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
              productType === productChain[ProductType.kittyes]
                ? className.activeLink
                : className.inactiveLink
            }
            href="#"
            onClick={onChangeType(productChain[ProductType.kittyes])}
          >
            Kittyes
          </a>
          |
          <a
            className={
              productType === productChain[ProductType.puppyes]
                ? className.activeLink
                : className.inactiveLink
            }
            href="#"
            onClick={onChangeType(productChain[ProductType.puppyes])}
          >
            Puppyes
          </a>
        </div>
        <div className={className.productListContent}>
          {productList instanceof Array &&
            productList.map(value => (
              <ProductCard
                key={value.id}
                imageUrl={value.picUrl}
                title={value.title}
                onImageLoad={onImageLoaded}
              />
            ))}
        </div>
      </div>
    </>
  );
};
