import styled from 'styled-components'


export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #F2F3F8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Cards = styled.div`
  width: 80%;
  padding: 15px;
  display: grid;
  grid-gap: 1.1rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

export const Card = styled.div`
  width: 260px;
  height: 400px;
  background: #FFFFFF;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 9px;

  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 5px;

  h3{
    color: #FF5555;
    font-family: Product Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 27px;
  }
`;