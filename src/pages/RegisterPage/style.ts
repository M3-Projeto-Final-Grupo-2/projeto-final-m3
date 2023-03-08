import styled from "styled-components";

const StyledRegisterPage = styled.div`
    background-color: #1E1E1E;

    main{
        padding: 1.5rem 0;
        background-color: #1E1E1E;
        width: 100%;
        margin: 0 auto;
    }
    .page-description{
        border-radius: 5px;
        height: 150px;
        width: 90%;
        margin: 0 auto;
        background-color: #E8E8E8;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        margin-bottom: 1.5rem;
    }
    .page-description > h2{
        display: none;
    }
    .page-description > p{
        font-size: 18px;
        font-weight: 600;
    }
    .page-description > img{
        width: 250px;
    }
    aside{
        border-radius: 5px;
        width: 90%;
        margin: 0 auto;
        background-color: #E8E8E8;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem 0;
    }
    aside > h2{
        font-size: 22px;
        font-weight: 700;
        margin-bottom: 1.5rem;
    }

    @media (min-width: 750px){
        main{
            display: flex;
            flex-direction: row;
            align-items: center;
            width: 90%;
            max-width: 1100px;
        }
        .page-description{
            min-height: 705px;
            margin: 0;
            border-radius: 5px 0 0 5px;
            border-right: 5px solid #EACCCC;
        }
        .page-description > h2{
        display: block;
        }
        aside{
            border-radius: 0 5px 5px 0;
        }
    }

`;
export default StyledRegisterPage;