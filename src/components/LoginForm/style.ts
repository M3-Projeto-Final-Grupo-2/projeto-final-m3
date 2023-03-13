import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  justify-content: space-evenly;
  gap: 12px;
  width: 100%;
  max-width: 351px;
  margin: 0px auto;
  background-color: rgb(232, 232, 232);
  border-radius: 8px 0px 0px 8px;
  padding: 40px 0px;

  h2 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 33px;
  }

  fieldset {
    width: 278px;
    height: 94px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: relative;

    label {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 0.2rem;
      width: fit-content;
    }

    input {
      border-radius: 5px;
      height: 35px;
      border: 1px solid #e8e8e8;
      padding-left: 1rem;
      font-size: 14px;
    }
    input:focus {
      outline: 0;
    }

    p {
      font-size: 12px;
      margin-bottom: 1rem;
      text-align: end;
      width: 100%;
    }

    i{
      position: absolute;
      top: 42px;
      right: 15px;
      font-size: 14px;
      color: #5d5454;
    }
  }
  button {
    width: 278px;
    height: 40px;

    background-color: rgb(0, 53, 107);
    color: rgb(255, 255, 255);

    border-radius: 5px;
    border: none;

    font-size: 16px;
    font-weight: 700;

    cursor: pointer;
  }

  span {
    width: 339px;
    font-family: "Poppins";
    font-style: normal;
    font-size: 16px;
    font-weight: 600;
    line-height: 33px;
    text-align: center;
  }

  p {
    width: 339px;
    font-family: "Poppins";
    font-style: normal;
    font-size: 14px;
    font-weight: 400;
    line-height: 25px;
    text-align: center;
  }

  @media (max-width: 750px){
    border-radius: 5px;
  }
`;
