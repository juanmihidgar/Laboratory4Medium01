import React from 'react';
import { generateStyles } from './productCard.styles';
import { generateProductCardStyles } from 'core/theme/commonStyles';
import { ThemeContext } from 'core/theme';
import { css } from '@emotion/core';

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
  const defaultStyles = generateProductCardStyles(palette);
  //  const styles = generateStyles(palette);
  const [isActive, setIsActive] = React.useState(false);
  /*
  const specificClass = () => {
    return classes.reduce((acc, value) => (acc += styles[value] + ' '), '');
  };
*/
  const handleCard = () => {
    setIsActive(!isActive);
  };

  return (
    //<div onClick={handleCard} className={`${defaultStyles} ${specificClass()}`}>
    <div onClick={handleCard} className={`${defaultStyles}`}>
      <img
        src={`${imageUrl}`}
        alt={`${imageAlt === undefined ? imageAlt : ''}`}
      />
      <span>{title}</span>
      <span>{description}</span>
      <input
        type="checkbox"
        name={`activeCard-${title.trim()}`}
        id={`activeCard-${title.trim()}`}
        checked={isActive}
      />
    </div>
  );
};
