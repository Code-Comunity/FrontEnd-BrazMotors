import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding-top: 70px;
    background: #f6f7fb;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

export const CardsContainer = styled.div`
    width: 100%;
    height: max-content;
    justify-items: center;
    align-items: center;

    margin-top: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 5%;
    filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25));
    border-radius: 9px;
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