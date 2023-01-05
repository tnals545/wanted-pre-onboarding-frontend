import styled, { css } from "styled-components";

const PURPOSE = {
  navbar: css`
    position: fixed;
    float: right;
    top: 40px;
    right: 80px;
  `,
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
  todo: css`
    justify-content: center;
    align-items: center;

    &.todoTitle {
      text-align: center;
      padding-bottom: 50px;
    }
    &.todoList {
      position: fixed;
      top: 200px;
    }
    &.todoInsert {
      form {
        width: 800px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding-bottom: 40px;
        border-bottom: 1px solid #965c9d;
      }
    }
  `,
  todoItem: css`
    align-items: center;
    padding: 8.5px 0;

    form {
      display: flex;
    }

    &.todoItem {
      justify-content: space-between;
    }
    &.todoItem,
    &.todoContents,
    &.editAndDelete {
      flex-direction: row;
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
