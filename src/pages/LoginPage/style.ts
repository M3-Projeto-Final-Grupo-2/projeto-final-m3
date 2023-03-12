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
  @media (max-width: 750px){
    height: fit-content;
  }
`;

export const Container = styled.div`
  width: 702px;
  max-width: 100%;
  height: 546px;
  margin: 0px auto;
  display: flex;
  justify-content: center;

  @media (max-width: 750px){
    flex-direction: column-reverse;
    height: fit-content;
    padding: 2rem 0;
  }
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
  border-left: 3px solid #eacccc;

  padding-left: 0 1rem;

  img {
    width: 200px;
  }

  p {
    width: 339px;
    font-family: "Poppins";
    font-style: normal;
    font-size: 18px;
    font-weight: 700;
    line-height: 150%;
    text-align: center;
  }
  p > span{
    color: #00356B;
    font-size: 18px;
    font-weight: 700;
  }
  span{
    font-size: 16px;
    text-align: center;
    font-weight: 600;
    line-height: 150%;
    margin-top: 0.5rem;
  }

  @media (max-width: 750px){
    padding: 2rem 0;
    border-radius: 5px;
    margin-bottom: 1rem;
    p{
    display: none;
    }
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

  @media (max-width: 750px){
    display: none;
  }
`;


