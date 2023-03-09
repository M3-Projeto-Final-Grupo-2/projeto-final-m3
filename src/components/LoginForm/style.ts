import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 12px;

  width: 520px;
  max-width: 100%;
  height: 650px;

  background-color: #e8e8e8;
  border-radius: 8px 0px 0px 8px;

  h2 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 33px;
  }

  fieldset {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  input {
    width: 438px;
    height: 50px;
  }

  button {
    width: 438px;
    height: 50px;
    cursor: pointer;
  }
`;
