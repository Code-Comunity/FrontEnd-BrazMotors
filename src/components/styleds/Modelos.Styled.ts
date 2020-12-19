import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #c8c8c8;
  display: flex;
  justify-content: center;
`;

export const TodosOsCarros = styled.div`
  width: 90%;
  height: 100%;
  background: tomato;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
`;

export const CardCarro = styled.div`
  width: 250px;
  height: 250px;
  padding: 50px;
  background: rebeccapurple;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  
  h1{
    font-size: 1.1rem;
  }
  span{
    font-size: 0.7rem;
  }
  img{
    width: 210px;
    height: 210px;
    object-fit: fill;
  }
`;