import { css } from 'emotion';
import { Palette } from 'core/theme/viewModel/palette.vm';

export const generateStyles = (palette: Palette) => {
  const themeProductCard = css`
    padding: 0.5rem;
    text-align: center;
    background: ${palette.button.main};
    border: 1px solid ${palette.button.dark};
    color: ${palette.button.textColor};
    border-radius: 0.3rem;
  `;

  return {
    themeProductCard,
  };
};
