import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding-top: 70px;
    background-color: #fff;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    width: 80%;
    
    display: flex;
    flex-direction: column;
`;

export const UpSide = styled.div`
    width: 100%;
    height: 50%;

    display: flex;
    flex-direction: row;
`;

export const DownSide = styled.div`
    width: 100%;
    height: 50%;
`;

export const Left = styled.div`
    width: 50%;
    padding: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
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
`;

export const LeftDown = styled.div`
    width: 50%;
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