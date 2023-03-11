import styled from "styled-components";

const StyledHome = styled.div`

justify-content: center;

.homeContainer{
    
display: flex;
flex-direction: column-reverse;
align-items: center;
gap: 44px;
padding: 62px 0;
max-width: 1300px;
}

@media(min-width: 1099px){
 display: flex;
 justify-content: center;
    .homeContainer{
        justify-content: space-between;
        flex-direction: row;
        width: 90%;
    }
}
`

export default StyledHome;