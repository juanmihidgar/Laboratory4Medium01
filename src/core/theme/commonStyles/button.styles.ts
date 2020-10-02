import { css } from 'emotion';
import { Palette } from 'core/theme/viewModel/palette.vm';

export const generateButtonStyles = (palette: Palette) => {
  const defaultButton = css`
    padding: 0.5rem;
    color: ${palette.common.black};
  `;

  return {
    defaultButton,
  };
};
