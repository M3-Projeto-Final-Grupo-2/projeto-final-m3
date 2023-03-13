import styled from "styled-components";


const StyledHome = styled.div`
width: 100vw;

justify-content: center;
display: flex;
.homeContainer{
    
display: flex;
flex-direction: column-reverse;
align-items: center;
gap: 44px;
padding-top: 62px;
max-width: 1300px;
}

@media(min-width: 1099px){
    display: flex;
    justify-content: center;
    overflow: hidden;
    .homeContainer{
        justify-content: space-between;
        flex-direction: row;
        width: 90%;
        overflow: hidden;
    }
}
`



export default StyledHome;