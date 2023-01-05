import styled, { css } from "styled-components";

const COLOR = {
  green: css`
    color: #226bef;
  `,
  bgMagenta: css`
    color: #ffffff;
    background-color: #9b55a5;
  `,
};

const SIZE = {
  small: css`
    height: 8px;
  `,
  medium: css`
    height: 8px;
  `,
  large: css`
    font-size: 20px;
    height: 48px;
  `,
};

const BOLD = {
  thick: css`
    font-weight: 600;
  `,
};

export const Button = styled.button`
  ${(p) => p.color && COLOR[p.color]};
  ${(p) => p.size && SIZE[p.size]};
  ${(p) => p.bold && BOLD[p.bold]};

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 8px;

  :disabled {
    opacity: 0.5;
    cursor: default;
  }

  &.iconBtn {
    padding: 0 10px;
  }
`;
