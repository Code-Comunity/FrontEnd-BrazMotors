import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #F2F3F8;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 450px) {
        padding-top: 75px;
    }
`;

export const Content = styled.div`
    width: 100%;
    margin-bottom: 100px;
    
    display: flex;
    flex-direction: column;

    @media (max-width: 450px) {
        margin-top: 0px;
        align-items: center;
    }
`;

export const UpSide = styled.div`
    width: 100%;
    margin-top: 70px;

    display: flex;
    flex-direction: row;

    @media (max-width: 450px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 10px;
    }
`;

export const DownSide = styled.div`
    width: 100%;
    height: 50%;

`;

export const Left = styled.div`
    width: 50%;
    padding: 20px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    img{
      width: 100%;
      height: 500px;
      display: block;
      object-fit: cover;
      @media (max-width: 700px){
        width: 300px;
        height: max-content;
      }
    }

    @media (max-width: 450px) {
        width: 80%;
        align-items: center;
    }
`;

export const Slide = styled.div`
    width: 100%;
    height: 100%;

    img{
        width: 100%;
    }
`

export const Right = styled.div`
    width: 50%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    @media (max-width: 450px) {
        width: 100%;
    }
`;

export const LeftDown = styled.div`
    width: 100%;
    margin-top: 20px;
  

    h1{
        font-size: 20px;
        color: black;
    }

    p{
        font-size: 15px;
        color: #595858;
    }
`;