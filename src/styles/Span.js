import styled, { css } from "styled-components";

const COLOR = {
  white: css`
    color: #ffffff;
  `,
  red: css`
    color: red;
  `,
  blue: css`
    color: #ba55d3;
  `,
};

const BGCOLOR = {
  bright: css`
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 8px;
  `,
};

const SIZE = {
  small: css`
    font-size: 12px;
  `,
  medium: css`
    font-size: 14px;
  `,
  large: css`
    font-size: 20px;
  `,
  XLarge: css`
    font-size: 30px;
  `,
  XXLarge: css`
    font-size: 50px;
  `,
};

const BOLD = {
  thick: css`
    font-weight: 600;
  `,
};

export const Span = styled.span`
  color: #ffffff;
  padding: 1px 5px;

  ${(p) => p.size && `${SIZE[p.size]}`}
  ${(p) => p.color && `${COLOR[p.color]}`}
  ${(p) => p.bold && `${BOLD[p.bold]}`}
  ${(p) => p.bgColor && `${BGCOLOR[p.bgColor]}`}

  &.success {
    color: green;
  }
  &.error {
    color: red;
  }
`;
