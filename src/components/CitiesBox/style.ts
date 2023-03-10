import styled from "styled-components";

const CitiesSection = styled.section`
   width: 82.2%;
background-color: #D9D9D9;
border-radius: 10px;
display: flex;
flex-direction: column;
align-items: center;
padding-top: 10px;
height: 169px;

.citiesBoxContainer{
    display: flex;
    flex-direction: column;
    height: 142px;
    width: 89.9%;
    gap: 15px;
    justify-content: space-between;
}

.imgContainer{
    width: 66px;
    height: 66px;
    border-radius: 4px;
    border: 2px solid #00356B;
}

img{
 width: 100%;
 height: 100%;
}

ul{
    width: 100%;
    display: flex;
    overflow-x: auto;
    gap: 20px;
    overflow-y: hidden;
}

span{
    display: none;
}

h3{
    font-weight: 700;
    font-size: 20px;
}

li{
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 90px;
    text-align: center;
    gap: 5px;
}

h4{
    font-weight: 700;
}
`
export default CitiesSection;