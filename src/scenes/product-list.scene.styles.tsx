import { keyframes, css } from 'emotion';

export const general = css`
  position: relative;
  display: flex;
  height: 100vh;
  overflow: hidden;
`;

export const productListBlock = css`
  background: red;
  flex: 1;
  flex-basis: 75%;
`;

export const sidebar = css`
  width: 25%;
  background: green;
`;

const expand = keyframes`
  0% {
    width: 0%;
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
    width: 0%;
  }
  `;

export const expanded = css`
  animation: ${expand};
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-timing-function: ease;
`;

export const collapsed = css`
  animation: ${collapse};
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-timing-function: ease;
`;
