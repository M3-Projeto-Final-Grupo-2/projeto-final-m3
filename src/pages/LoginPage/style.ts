import styled from "styled-components";

export const Main = styled.div`
  background-color: rgb(0, 19, 24);
  min-height: 800px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    color: black;
  }
`;

export const Descript = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 12px;

  width: 520px;
  max-width: 90%;
  height: 650px;

  border-radius: 0px 8px 8px 0px;
  background-color: rgb(232, 232, 232);

  h1 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;
  }

  p {
    width: 339px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 33px;
  }
`;

export const Images = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;

  width: 402px;
  height: 220px;

  div {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;
