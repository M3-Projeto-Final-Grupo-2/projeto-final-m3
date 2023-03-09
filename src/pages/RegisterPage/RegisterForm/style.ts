import styled from "styled-components";

const StyledRegisterForm = styled.form`
    width: 80%;
    margin: 0 auto;

    fieldset{
        width: 100%;
        display: flex;
        flex-direction: column;
        position: relative;

        label{
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 1rem;
            width: fit-content;
        }

        input{
            border-radius: 5px;
            height: 40px;
            border: 1px solid #E8E8E8;
            padding-left: 1rem;
            margin-bottom: 1.5rem;
            font-size: 16px;
        }
        input:focus{
            outline: 0;
        } 

        p{
            position: absolute;
            top: 80px;
            font-size: 14px;
            margin-bottom: 1rem;
        }
    }

    button{
        display: block;
        width: 100%;
        height: 40px;
        background-color: #00356B;
        color: #FFFFFF;
        text-align: center;
        border-radius: 5px;
        border: none;
        font-size: 18px;
        font-weight: 700;
        margin: 1rem 0;
        cursor: pointer;
    }
    button:hover{
        background-color: #00354F;
    }
    a{
        display: block;
        width: 100%;
        max-height: 40px;
        background-color:#FFFFFF;
        text-align: center;
        border-radius: 5px;
        border: none;
        font-size: 18px;
        font-weight: 700;
        margin: 1rem 0;
        text-decoration: none;
        color: black;
        padding: 20px 0;
        padding-bottom: -10px;
        line-height: 0;
    }
    a:hover{
       background-color: rgb(234, 204, 204);
    }
`;
export default StyledRegisterForm;