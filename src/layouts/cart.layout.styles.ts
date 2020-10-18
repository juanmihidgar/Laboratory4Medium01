import { css } from 'emotion';
import { Palette } from 'core/theme/viewModel/palette.vm';

export const generateStyles = (palette: Palette) => {
  const root = css`
    background: green;
    height: 100vh;
    position: relative;
  `;

  const themeButton = css`
    background: ${palette.button.main};
    border-radius: 0.3rem;
    border: 1px solid ${palette.button.borderColor};
    color: white;
    border: 0px;
  `;

  const toggleButton = css`
    background: ${palette.button.main};
    border-radius: 0.3rem 0rem 0rem 0.3rem;
    border: 1px solid ${palette.button.borderColor};
    position: absolute;
    width: 2rem;
    height: 2rem;
    left: -2rem;
    top: 1rem;
    color: white;
    border: 0px;

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
    root,
    themeButton,
    toggleButton,
  };
};
