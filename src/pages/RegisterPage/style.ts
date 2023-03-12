import styled from "styled-components";

const StyledRegisterPage = styled.div`
    background-color: #001318;
    min-height: 100vh;
    main{
        padding: 1.5rem 0;
        background-color: #001318;
        width: 100%;
        margin: 0 auto;
        max-width: 400px;
    }
    .page-description{
        border-radius: 5px;
        height: 100px;
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
        line-height: 150%;
    }
    .page-description > p{
        font-size: 16px;
        font-weight: 600;
    }
    .page-description > img{
        width: 200px;
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
        min-height: 100vh;
        main{
            display: flex;
            flex-direction: row;
            align-items: center;
            width: 100%;
            padding: 0;
            max-width: 700px;
            min-height: 100vh;
        }
        .page-description{
            min-height: 546px;
            margin: 0;
            border-radius: 5px 0 0 5px;
            border-right: 3px solid #EACCCC;
            margin: 0;
        }
        .page-description > h2{
            display: block;
            font-size: 18px;
            font-weight: 700;
            width: 80%;
        }
        .page-description > h2 > span{
            color: #00356b ;
        }
        aside{
            border-radius: 0 5px 5px 0;
            height: 482px;
            margin: 0;
        }
    }

`;
export default StyledRegisterPage;