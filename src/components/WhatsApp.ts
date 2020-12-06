import styled from "styled-components";

export const ContainerWhats = styled.div`
    width: 68px;
    height: 68px;
    border-radius: 100%;
    background-color: #fff;
    position: fixed;
    margin-top: 5px;
    margin-right: 5px;
    right: 10px;
    z-index:11;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    span{
        font-size: 60px;
        text-align: center;
        color: #25D366;
        margin-top: 10px;

        :hover{
            color: #075E54;
        }
    }
`;