import styled from "styled-components";

const CitiesSection = styled.section`
  width: 82.2vw;
  background-color: #d9d9d9;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 180px;
  padding-top: 20px;

  .citiesBoxContainer {
    display: flex;
    flex-direction: column;
    height: 97%;
    width: 90%;
    gap: 25px;
  }

  .imgContainer {
    width: 66px;
    height: 66px;
    border-radius: 4px;
    border: 2px solid #00356b;
  }

  img {
    height: 100%;
    width: 100%;
  }

  ul {
    width: 100%;
    display: flex;
    overflow-x: auto;
    gap: 20px;
    overflow-y: hidden;
  }

  span {
    display: none;
  }

  h3 {
    font-weight: 700;
    font-size: 20px;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 90px;
    text-align: center;
    gap: 5px;
  }

  h4 {
    font-weight: 700;
    font-size: 16px;

}

@media(min-width: 1099px){
    max-width: 413px;
    width: 50%;
    height: 432px;
    align-self: flex-start;
    overflow: hidden;
    padding-top: 30px;

    
   

    h3{
        font-size: 20px;
    }

    h4 {
    font-weight: 700;
    font-size: 18px;

}

    .citiesBoxContainer{
        gap: 25px;
    }

    ul{
    width: 100%;
    display: flex;
    overflow-y: auto;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    overflow: auto;
    padding-top: 22px;
    h4{
      font-size: 16px;
    }

    span{
      font-size: 12px;
    }
    }

    li{
        background-color: white;
        width: 90%;
        display: flex;
        flex-direction: row;
    }

    span{
        display: block;
        width: 60px;
    }

    .cityText{
        display: flex;
        justify-content: space-between;
        width: 70%;
        align-items: center;
    }
}
`
export default CitiesSection;

