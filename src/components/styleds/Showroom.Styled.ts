import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding-top: 70px;
    background-color: #fff;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CardsContainer = styled.div`
    width: 70%;
    height: 80%;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-items: inherit;

    @media (max-width: 700px) {
        display: flex;
        flex-direction: row;

    }
`;


export const Card =  styled.div`
    width: 262px;
    height: 262px;
    border-radius: 17px;
    border-style: solid;
    border-width: 1px;
    border-color: black;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    img{
        width: 75%;
    }

    @media (max-width: 700px){
        width: 33.33%;
    }
`;