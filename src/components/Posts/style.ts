import styled from "styled-components";

const PostsSection = styled.section`
width: 82.2%;
background-color: #D9D9D9;
border-radius: 10px;
display: flex;
flex-direction: column;
align-items: center;
padding-top: 10px;
height: 373px;

.postsBoxContainer {
    width: 89.88%;
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
    width: 178px;
    height: 50px;
    background-color: white;
    border: 2px solid #00356B;
    border-radius: 15px;
    font-weight: 500;
    font-size: 20px;
    color: #4E4E4E;
}

ul{
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow-y: auto;
    max-height: 300px;
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

`
export default PostsSection;