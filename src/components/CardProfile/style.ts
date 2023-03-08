import styled from "styled-components";

export const StyledCardProfile = styled.li`
  display: flex;
  background-color: white;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  border-radius: 8px;

  img {
    height: 150px;
    width: 100px;
    object-fit: cover;
    border-radius: 8px;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;

    h2 {
      align-self: flex-end;
      display: flex;
      font-size: 1rem;
      align-items: center;
      gap: 4px;
      margin-top: 25px;
      margin-right: 15px;

      p {
        font-size: 0.7rem;
      }
    }
  }
  .button__editCard {
    height: 25px;
    width: 60px;
    align-self: flex-end;
    margin-bottom: 25px;
    margin-right: 15px;
    background-color: #00356b;
    border-radius: 4px;
    border: 2px solid #00356b;
    color: white;
    :hover {
      background-color: white;
      color: #00356b;
      transition: 0.2s;
      border: 2px solid #00356b;
    }
  }
`;


