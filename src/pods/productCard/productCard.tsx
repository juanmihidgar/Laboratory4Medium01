import React from 'react';
import { ThemeContext } from 'core/theme';
import * as classes from './productCard.styles';

interface Props {
  id: number;
  imageUrl: string;
  imageAlt?: string;
  title: string;
  description?: string;
  checked: boolean;
  onProductChecked: (id: number) => () => void;
  onImageLoad: (number) => void;
}

export const ProductCard: React.FunctionComponent<Props> = ({
  id,
  imageUrl,
  imageAlt,
  title,
  description,
  onImageLoad,
  checked,
  onProductChecked,
}) => {
  const { palette } = React.useContext(ThemeContext);
  const className = classes.generateStyles(palette);

  return (
    <div
      onClick={onProductChecked(id)}
      className={`${className.productCard} ${checked &&
        className.productSelected}`}
    >
      <div className={className.cardContainer}>
        <div className={`${className.productImageCard}`}>
          <img
            className={className.image}
            onLoad={onImageLoad}
            src={`${imageUrl}`}
            alt={`${imageAlt === undefined ? imageAlt : ''}`}
          />
        </div>
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      <input
        type="checkbox"
        name={`activeCard-${title.replace(/\s/g, '')}`}
        id={`activeCard-${title.replace(/\s/g, '')}`}
        // Review why onChange
        onChange={() => {}}
        checked={checked}
        style={{ visibility: 'hidden' }}
      />
    </div>
  );
};
