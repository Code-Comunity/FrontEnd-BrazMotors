import styled from "styled-components";

export const QualidadesContainer = styled.div`
    width: 65%;
    height: 400px;
    background: #f6f7fb;
    display: flex;
    justify-content: space-around;
`

export const Qualidade = styled.div`
    width: 200px;
    color: grey;

    display: flex;
    flex-direction: column;

    span{
        font-size: 80px;
    }
    
    h3{
        font-size: 20px;
        margin-bottom: 5px;
    }
`

export const BlocoForm = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    width: 50vw;
    height: 400px;
    background: gray;
    margin: 0 auto;
    margin-bottom: -35px;
    z-index: 10;

    @media (max-width: 700px){
        width: 60vh;
        grid-template-columns: 1fr;
        margin-bottom: 100px;
    }
`;

export const LeftBlocoForm = styled.div`
    width: 100%;
    height: 100%;
    background: #ff5555;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const RightBlocoForm = styled.div`
    background:  #282525;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10%;
    align-items: center;

    h2{
        color: white;
        margin-bottom: 15px;
    }
    h4{
        color: gray;
    }
`;

export const HeroImageBottomPart = styled.div`
    width: 100%;
    height: 500px;
    background: black;
    z-index: 5;
    background-attachment: fixed;
    background-position: 0px 0px;
`;