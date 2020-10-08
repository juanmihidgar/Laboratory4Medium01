import React from 'react';
import { ThemeContext } from 'core/theme';
import { generateProductCardStyles } from 'core/theme/commonStyles';
import { generateStyles } from './productCard.styles';
import { useDefineComponentStyle } from 'common/hooks';

interface Props {
  imageUrl: string;
  imageAlt?: string;
  title: string;
  description?: string;
  classes?: string[];
}

export const ProductCard: React.FunctionComponent<Props> = ({
  imageUrl,
  imageAlt,
  title,
  description,
  classes = [],
}) => {
  const { palette } = React.useContext(ThemeContext);
  const [isActive, setIsActive] = React.useState(false);
  const { className } = useDefineComponentStyle(
    palette,
    generateProductCardStyles,
    generateStyles,
    classes
  );

  const handleCard = () => {
    setIsActive(!isActive);
  };

  return (
    <div onClick={handleCard} className={`${className}`}>
      <div
        style={{
          minHeight: '20rem',
          maxHeight: '20rem',
          overflow: 'hidden',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <img
          style={{ maxHeight: '100%' }}
          src={`${imageUrl}`}
          alt={`${imageAlt === undefined ? imageAlt : ''}`}
        />
      </div>
      <span>{title}</span>
      <span>{description}</span>
      <input
        type="checkbox"
        name={`activeCard-${title.trim()}`}
        id={`activeCard-${title.trim()}`}
        // Review why onChange
        onChange={() => {}}
        checked={isActive}
        style={{ visibility: 'hidden' }}
      />
    </div>
  );
};
