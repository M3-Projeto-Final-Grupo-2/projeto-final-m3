import styled from "styled-components";

const PostsSection = styled.section`
width: 82.2vw;
background-color: #D9D9D9;
border-radius: 10px;
display: flex;
flex-direction: column;
align-items: center;
padding: 20px 0px;
height: 373px;

.postsBoxContainer {
    width: 90%;
    height: 400px;
}

.postsHeader{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

h3{
    font-weight: 700;
    font-size: 20px;
}

button{
    width: 103px;
    height: 34px;
    border: 2px solid rgb(0, 53, 107);
    color: white;
    background-color: rgb(0, 53, 107);
    border-radius: 4px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-weight: bold;
    cursor: pointer;
}

ul{
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow-y: auto;
    height: 80%;
}

li{
    width: 100%;
    min-height: 76px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 4px;
}

.postContainer{
    display: flex;
    height: 36px;
    width: 95%;
}

p{
    display: none;
}

.userLetter{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #D9D9D9;
    font-weight: 700;
    font-size: 16px;

}

.userTitle{
   display: flex;
   gap: 10px;
   align-items: center;
   font-weight: 700;
   font-size: 14px;
}

@media(min-width: 1099px){
    max-width: 739px;
    height: 420px;
    align-self: flex-start;
    overflow: hidden;

    
    p{
        display: block;
        line-height: 24px;
        overflow: auto;
    }

    ul{
    margin-top: 48px;
    overflow-y: auto;
    }
    h3{
        font-size: 28px;
    }

    li{
        width: 100%;
        min-height: 200px;
    }
    .postContainer{
        align-self: baseline;
        padding-top: 15px;
        width: 91.4%;
        display: flex;
        flex-direction: column;
        height: 251px;
        gap: 32px;
    }

    .userLetter{
        min-width: 66px;
        min-height: 66px;
        font-size: 26px;
        border: 2px solid #00356B;
    }

    .cityTitle{
        display: flex;
        width: 100%;
        justify-content: space-between;
    }

    h4{
        font-size: 23px;
    }

}

`
export default PostsSection;