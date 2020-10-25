import { css } from 'emotion';
import { Palette } from 'core/theme/viewModel/palette.vm';

export const generateStyles = (palette: Palette) => {
  const cartContent = css`
    background: ${palette.secondary.main};
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    border-left: 2px solid ${palette.button.borderColor};
    z-index: 1;
    margin-left: 0.5rem;
  `;

  const cartProductList = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    overflow-y: auto;
    width: 100%;
  `;

  const themeButton = css`
    background: ${palette.button.main};
    border-radius: 0.3rem;
    border: 1px solid ${palette.button.main};
    color: ${palette.button.textColor};
    border: 0px;
    margin: 0.5rem;
  `;

  const toggleButton = css`
    background: ${palette.button.main};
    border-radius: 0.3rem 0rem 0rem 0.3rem;
    position: absolute;
    width: 2.5rem;
    height: 2.5rem;
    left: calc(-2.5rem - 2px);
    top: 0.25rem;
    color: white;
    border: none;
    outline: none;

    &::before {
      content: 'c';
      background-image: url(../src/common/icons/shopping-cart.svg);
      background-position: center;
      background-repeat: no-repeat;
      background-size: 1rem;
      font-size: 1.8rem;
      color: transparent;
      text-align: center;
    }
  `;

  return {
    cartContent,
    cartProductList,
    themeButton,
    toggleButton,
  };
};
