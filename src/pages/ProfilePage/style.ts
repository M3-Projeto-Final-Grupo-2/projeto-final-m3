import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100vw;
  height: 546px;
  display: flex;
  flex-direction: column;

  .conatiner__buttons {
    display: flex;
    justify-content: flex-end;
    gap: 34px;
    margin-top: 28px;
    margin-right: 28px;

    span {
      width: 65px;
      height: 38px;
      border: 2px solid #00356b;
      color: #00356b;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
