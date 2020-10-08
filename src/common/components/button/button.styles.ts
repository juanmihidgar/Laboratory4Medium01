import { css } from 'emotion';
import { Palette } from 'core/theme/viewModel/palette.vm';

export const generateStyles = (palette: Palette) => {
  const themeButton = css`
    border-radius: 0.3rem 0.3rem 0.3rem 0.3rem;
  `;

  const toggleButton = css`
    position: absolute;
    width: 5rem;
    top: 5rem;
    left: -5rem;
    border-radius: 0.3rem 0rem 0rem 0.3rem;
  `;

  return {
    toggleButton,
    themeButton,
  };
};
