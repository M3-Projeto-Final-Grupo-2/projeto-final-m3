import styled from "styled-components";

export const StyledContainerModal = styled.div`
  background-color: white;
  position: fixed;
  z-index: 1;
  width: 80vw;
  align-self: center;
  top: 150px;
  padding: 60px 10px 20px 10px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  background-color: #d9d9d9;

  div {
    margin: 0 auto;
    margin-top: -30px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 95%;

    h2 {
      font-size: 1.2rem;
      font-weight: bold;
      display: flex;
      gap: 4px;
      /* color: #001318; */
      color: #00356b;
      align-items: center;

      p {
        font-size: 0.7rem;
        color: #00356b;
      }
    }

    button {
      font-weight: bold;
      width: 20px;
      height: 20px;
      border: solid 1px #00356b;
      background-color: white;
      color: #00356b;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  h2 {
    width: 95%;
    margin: 0 auto;
    font-size: 1rem;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 95%;
    margin: 0 auto;
    margin-top: 20px;

    label {
      font-size: 0.7rem;
      color: #00356b;
      margin-bottom: 3px;
    }

    input {
      border-radius: 8px;
      border: solid 1px #00356b;
      height: 20px;
    }
    .container__buttons {
        margin-top: 20px;
        display: flex;
        align-items: center;

      button {
        background-color: #00356b;
        color: white;
        width: 80px;
        height: 30px;
        margin-top: 15px;
        align-self: center;
        border-radius: 8px;
        border: solid 1px #00356b;

        :hover{
            background-color: white;
            color: #00356b;
            transition: 0.4s;
        }
      }
      span{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 15px;
        background-color: #8D0606;
        color: white;
        width: 80px;
        height: 30px;
        margin-top: 15px;
        align-self: center;
        border-radius: 8px;
        border: solid 1px #8D0606;

        :hover{
            background-color: white;
            color: #8D0606;
            transition: 0.4s;
        }
      }
    }
  }
  @media (min-width: 769px) {
    width: 612px;

}
`;

export const StyledBackground = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    background: rgba(0, 0, 0, 0.67);


`
