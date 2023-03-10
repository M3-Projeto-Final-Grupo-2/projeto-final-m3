import  styled from "styled-components";

const StyledHeader = styled.header`
width: 100vw;
height: 90px;
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
      cursor: pointer;
      font-size: 16px;
      font-family: 'Poppins', sans-serif;

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
    width: 96%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.buttonsContainer{
    display: flex;
    flex-direction: row;
    gap: 10px;

}
@media(min-width: 1099px){
    h1{
        font-size: 20px;
    }
    .buttonsContainer{
    flex-direction: row;
     gap: 34px;
}
}
`

export default StyledHeader;