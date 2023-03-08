import styled from "styled-components";

const StyledRegisterImages = styled.div`
    display: none;
    width: 90%;
    max-width: 250px;

    img{
        border-radius: 5px;
        object-fit: cover;
        width: 100%;
    }
    .container-1{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 0.5rem;
    }
    .image-3{
        max-width: 100px;
        margin-left: 0.5rem;
    }


    @media (min-width: 750px){
        display: flex;
    }
`;
export default StyledRegisterImages;