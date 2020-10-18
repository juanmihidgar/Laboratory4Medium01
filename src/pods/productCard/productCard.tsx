import React from 'react';
import { ThemeContext } from 'core/theme';
import * as classes from './productCard.styles';

interface Props {
  imageUrl: string;
  imageAlt?: string;
  title: string;
  description?: string;
  onImageLoad?: () => void;
}

export const ProductCard: React.FunctionComponent<Props> = ({
  imageUrl,
  imageAlt,
  title,
  description,
  onImageLoad,
}) => {
  const { palette } = React.useContext(ThemeContext);
  const className = classes.generateStyles(palette);
  const [isActive, setIsActive] = React.useState(false);

  const handleCard = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      onClick={handleCard}
      className={`${className.themeProductCard} ${isActive &&
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
      <span>{title}</span>
      <span>{description}</span>
      <input
        type="checkbox"
        name={`activeCard-${title.replace(/\s/g, '')}`}
        id={`activeCard-${title.replace(/\s/g, '')}`}
        // Review why onChange
        onChange={() => {}}
        checked={isActive}
        style={{ visibility: 'hidden' }}
      />
    </div>
  );
};
