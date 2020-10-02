import { css } from 'emotion';
import { Palette } from 'core/theme/viewModel/palette.vm';

export const generateProductCardStyles = (palette: Palette) => {
  const defaultProductCard = css`
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    background: ${palette.productCard.background};
    width: 100%;
  `;

  return {
    defaultProductCard,
  };
};
