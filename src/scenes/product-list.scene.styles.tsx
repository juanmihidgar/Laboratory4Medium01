import { keyframes, css } from 'emotion';
import { Palette } from 'core/theme/viewModel/palette.vm';

export const generateStyles = (palette: Palette) => {
  const productListBlock = css`
    background: ${palette.primary.main};
    flex: 1;
    flex-basis: 75%;
    width: ${100 - 25}%;
  `;

  const general = css`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
    font-family: 'Roboto', sans-serif;

    position: relative;
    display: flex;
    height: 100vh;
    overflow: hidden;

    div::-webkit-scrollbar {
      width: 0.6rem;
    }
    div::-webkit-scrollbar-track {
      background: ${palette.secondary.dark};
      border-radius: 0.3rem;
    }
    div::-webkit-scrollbar-thumb {
      background: ${palette.common.scrollbarBackground};
      border-radius: 0.3rem;
    }
  `;

  const sidebar = css`
    width: 5%;
    background: ${palette.primary.dark};
  `;

  const expand = keyframes`
  0% {
    width: 5%;
  }

  100% {
    width: 25%;
  }
`;

  const collapse = keyframes`
  0% {
    width: 25%;
  }

  100% {
    width: 5%;
  }
  `;

  const expanded = css`
    animation: ${expand};
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-timing-function: ease;
  `;

  const collapsed = css`
    animation: ${collapse};
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-timing-function: ease;
  `;

  return {
    productListBlock,
    general,
    sidebar,
    expanded,
    collapsed,
  };
};
