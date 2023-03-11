import styled from "styled-components";

export const Main = styled.div`
  background-color: rgb(0, 19, 24);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    color: black;
  }
`;

export const Container = styled.div`
  width: 702px;
  max-width: 100%;
  height: 546px;
  margin: 0px auto;
  display: flex;
  justify-content: center;
`;

export const Descript = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  align-items: center;
  gap: 12px;

  width: 80%;
  max-width: 351px;
  margin: 0 auto;

  border-radius: 0px 8px 8px 0px;
  background-color: rgb(232, 232, 232);

  img {
    width: 172px;
  }

  p {
    width: 339px;
    font-family: "Poppins";
    font-style: normal;
    font-size: 16px;
    font-weight: 600;
    line-height: 33px;
    text-align: center;
  }
`;

export const Images = styled.div`
  display: flex;
  flex-direction: row;
  width: 311px;
  height: 159px;
  -webkit-box-pack: center;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  img {
    width: 172px;
  }
`;
