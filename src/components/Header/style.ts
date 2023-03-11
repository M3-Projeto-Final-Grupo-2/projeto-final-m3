import  styled from "styled-components";

const StyledHeader = styled.header`
width: 100vw;
height: 125px;
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

button{
    width: 121px;
    height: 44px;
    border: 2px solid #00356B;
    font-weight: 600;
    border-radius: 4px;
    font-size: 20px;
}

.whiteBtn{
    color: #00356B;
    background-color: white;
}

.blueBtn{
    color: white;
    background-color: #00356B;
}

.headerContainer{
    width: 88.9%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.buttonsContainer{
    display: flex;
    flex-direction: column;
    gap: 10px;

}
@media(min-width: 1099px){
    .buttonsContainer{
    flex-direction: row;
     gap: 34px;
}
}
`

export default StyledHeader;