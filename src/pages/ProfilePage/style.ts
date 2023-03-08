import styled from "styled-components";

export const StyledOver = styled.header`
  overflow-x: hidden;
  background-color: #001318;
`;

export const StyledHeader = styled.header`
  width: 100vw;
  height: 219px;
  display: flex;
  flex-direction: column;
  position: relative;
  background-image: url("https://document-export.canva.com/x-Hjs/DAFcYWx-Hjs/3/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20230308%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230308T020616Z&X-Amz-Expires=48172&X-Amz-Signature=7ba2119ef31bfc2ee645b6440c97c5c17f00cfb59068772c19cade7073c7a91b&X-Amz-SignedHeaders=host&response-expires=Wed%2C%2008%20Mar%202023%2015%3A29%3A08%20GMT");
  background-repeat: no-repeat, repeat;
  background-position: center;
  background-color: rgb(232 232 232);
  margin-bottom: 110px;

  .conatiner__buttons {
    display: flex;
    justify-content: flex-end;
    gap: 30px;
    margin-top: 22px;
    margin-right: 28px;

    span {
      width: 65px;
      height: 34px;
      border: 2px solid #00356b;
      color: #00356b;
      background-color: white;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      :hover {
        background-color: #00356b;
        color: white;
        transition: 0.2s;
      }
    }

    .span__right {
      width: 65px;
      height: 34px;
      background-color: #00356b;
      color: white;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;

      :hover {
        background-color: white;
        color: #00356b;
        border: 2px solid #00356b;

        transition: 0.2s;
      }
    }
  }

  .user__info {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-self: center;
    position: absolute;
    bottom: -100px;

    h2 {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100%;
      background-color: #00356b;
      width: 120px;
      height: 120px;
      box-shadow: 0px 0px 4px 5px rgba(0, 0, 0, 0.25);
      color: white;
      font-size: 40px;
    }
    h1 {
      align-self: center;
      color: white;
      font-size: 1.3rem;
    }
  }
`;

export const StyledFlexDirection = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  width: 100vw;
  margin-bottom: 32px;

  div {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
    background-color: #d9d9d9;
    border-radius: 4px;

    .tilte__card{
        margin: 20px;
        font-size: 1.1rem;
        font-weight: bold;
    }

    ul{
        display: flex;
        flex-direction: column;
        gap: 20px;
        overflow: auto;
        height: 50vh;
        margin-bottom: 20px;
    }
  }
`;

export const StyledAside = styled.aside`
  width: 100vw;
  margin-top: 30px;
  margin-bottom: 50px;

  div {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 20px;

    h2 {
      font-size: 1.2rem;
      font-weight: bold;
      color: white;
    }
    p {
      font-size: 1rem;
      color: #868e96;
    }
    button {
      width: 156px;
      height: 35px;
      align-self: center;
      background-color: #00356b;
      border: solid 2px #00356b;
      border-radius: 8px;
      color: white;
      cursor: pointer;
      font-weight: 400;

      :hover {
        background-color: white;
        color: #00356b;
      }
    }
  }
`;
