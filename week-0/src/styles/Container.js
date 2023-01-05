import styled from "styled-components";

export const Container = styled.div`
  width: 372px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &.todo {
    width: 1280px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    top: 20%;
  }
`;
