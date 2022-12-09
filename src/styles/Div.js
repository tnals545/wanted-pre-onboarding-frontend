import styled, { css } from "styled-components";

const PURPOSE = {
  login: css`
    &.logo,
    &.signupSpan {
      justify-content: center;
      align-items: center;
      padding: 32px 0;
    }
    &.loginBtn {
      padding-top: 32px;
    }
    &.emailInput,
    &.passwordInput {
      padding-bottom: 32px;
    }
    &.errMessage {
      align-items: center;
    }

    span {
      margin: 16px 0;
    }
  `,
  signup: css`
    &.signupEmail,
    &.signupPW,
    &.signupPWConfirm {
      padding: 16px 0;
    }
    &.signupBtn {
      padding-top: 32px;
    }
    &.errMessage {
      align-items: flex-start;
    }
    &.errMessage:last-child {
      padding-top: 16px;
      align-items: center;
    }

    span {
      margin: 16px 0;
    }
  `,
};

export const Div = styled.div`
  ${(p) => p.purpose && `${PURPOSE[p.purpose]}`}

  display: flex;
  flex-direction: column;

  &.header {
    justify-content: center;
    align-items: center;
    padding: 32px 0;
  }
  &.errMessage {
    justify-content: center;
    height: 32px;

    span {
      padding: 5px;
    }
  }
`;
