import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 70px;
  background: #F2F3F8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TodosOsCarros = styled.div`
  width: 90%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;

  @media (max-width: 450px) {
        display: flex;
        flex-direction: column;
        margin: 10px;
    }
`;

export const CardCarroHover = styled.div`
  width: 100%;
  height: 100%;
  background-color:rgba(255,0,0,0.6);
  position: absolute;

  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 1s;

  h1{
    font-size: 40px;
    margin: 15px;
  }
  h2{
    font-size: 20px;
  }

`;

export const CardCarro = styled.div`
  width: 250px;
  height: 310px;
  padding: 50px;
  background: rebeccapurple;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-position: center;
  background-size: cover;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 9px;
  cursor: pointer;
  
 
  span{
    font-size: 0.7rem;
  }
  img{
    width: 100%;
    height: 100%;
    object-fit: fill;
  }

  :hover ${CardCarroHover}{
    display: flex;
    transition: 1s;
  }

  @media (max-width: 450px) {
        margin: 20px;
    }

`;

