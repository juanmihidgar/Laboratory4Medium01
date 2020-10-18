import { css } from 'emotion';
import { Palette } from 'core/theme/viewModel/palette.vm';

export const generateStyles = (palette: Palette) => {
  const main = css`
    background: ${palette.primary.main};
  `;

  const productListContent = css`
    display: flex;
    flex-wrap: wrap;
    overflow-y: scroll;
    height: 100vh;
  `;

  const loadingScreen = css`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${palette.common.white};
    font-size: 2.5rem;
    font-weight: bold;
    background: ${palette.primary.light};
  `;

  const notLoading = css`
    display: none;
  `;

  const navbar = css`
    padding: 1rem;
    display: flex;
    gap: 0.25rem;
    color: ${palette.common.textColor};
  `;

  const inactiveLink = css`
    color: ${palette.navbar.secondary};
    text-decoration: none;
  `;

  const activeLink = css`
    color: ${palette.navbar.main};
    text-decoration: none;
    font-weight: bold;
  `;

  return {
    main,
    productListContent,
    loadingScreen,
    notLoading,
    navbar,
    inactiveLink,
    activeLink,
  };
};
