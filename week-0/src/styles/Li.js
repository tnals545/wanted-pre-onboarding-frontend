import styled from "styled-components";

export const Li = styled.li`
  width: 800px;
  height: fit-content;

  border-radius: 8px;

  margin: 20px 0;
  padding: 5px 10px;

  border: ${(p) =>
    p.className === "border-none" ? "none" : "1px solid #965c9d"};

  :last-child {
    margin-bottom: 40px;
  }
`;
