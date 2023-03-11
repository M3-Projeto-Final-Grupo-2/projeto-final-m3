import  styled from "styled-components";

const StyledHeader = styled.header`
width: 100vw;
height: 115px;
display: flex;
justify-content: center;
align-items: center;
background-color: #E8E8E8;
box-shadow: 0 10px 25px rgba(255, 255, 255, 0.25);

h1{
    font-weight: 700;
    font-size: 20;
}

span{
    color: #00356B;
}

.buttonsContainer{
    display: flex;
    gap: 30px;
    margin-right: 28px;
}

button{
    width: 65px;
      height: 34px;
      border: 2px solid #00356b;
      color: #00356b;
      background-color: white;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      cursor: pointer;

      :hover {
        background-color: #00356b;
        color: white;
        transition: 0.2s;
      }
}


.blueBtn{
    color: white;
    background-color: #00356B;

    :hover{
        background-color: white;
        color: #00356b;
        border: 2px solid #00356b;
        transition: 0.2s;
    }
}

.headerContainer{
    width: 88.9%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
`

export default StyledHeader;