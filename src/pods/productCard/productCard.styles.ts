import { css } from 'emotion';
import { Palette } from 'core/theme/viewModel/palette.vm';

export const generateStyles = (palette: Palette) => {
  const themeProductCard = css`
    max-width: calc(20% - 2rem);
    max-height: 25rem;
    padding: 1rem;
    margin: 1rem;
    box-sizing: border-box;
    text-align: center;
    background: ${palette.productCard.background};
    color: ${palette.common.textColor};
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    flex: 1;
  `;

  const productSelected = css`
    box-shadow: 0px 0px 0.3rem 5px rgba(80, 186, 168, 1);
  `;

  const cardContainer = css`
    min-height: 15rem;
    max-height: 15rem;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
  `;

  const productImageCard = css`
    width: 100%;
    border-radius: 0.5rem;
    overflow: hidden;
    background: white;
  `;

  const image = css`
    height: 100%;
  `;

  return {
    themeProductCard,
    cardContainer,
    productSelected,
    productImageCard,
    image,
  };
};
