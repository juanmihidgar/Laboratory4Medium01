import { css } from 'emotion';
import { Palette } from 'core/theme/viewModel/palette.vm';

export const generateStyles = (palette: Palette) => {
  const productCart = css`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 80%;
    max-height: 8rem;
    color: ${palette.common.textColor};
    position: relative;

    @media (max-width: 1486px) {
      max-height: 14rem;
      flex-direction: column;
    }

    & > div {
      overflow: hidden;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      max-width: 8rem;
      border-radius: 0.3rem;
    }

    img {
      width: 100%;
    }
  `;

  const deleteProductExpanded = css`
    height: 2rem;
    width: 2rem;
    padding: 0.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100rem;
    background: ${palette.productCard.borderColor};
    cursor: pointer;

    svg {
      width: 100%;
      height: 100%;
    }
    svg path {
      fill: ${palette.common.textColor};
    }
  `;

  const deleteProductCollapsed = css`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    svg {
      display: none;
    }

    svg path {
      fill: ${palette.common.textColor};
    }

    &:hover > svg {
      display: block;
      width: 2rem;
      height: 2rem;
      padding: 10%;
      border-radius: 100rem;
      background: ${palette.productCard.borderColor};
      cursor: pointer;
    }
  `;

  return {
    productCart,
    deleteProductExpanded,
    deleteProductCollapsed,
  };
};
