import styled from 'styled-components';

export const CardContainerHome = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
`

export const Card = styled.div`
  background-color: #fff;
  width: 500px;
  height: 280px;
  padding: 15px;
  border-radius: 9px;
  cursor: pointer;

  display: flex;
  justify-content: space-around;
  align-items: center;

  h4{
    color: #282A36;
    font-size: 37px;
  }
  h5{
    font-size: 20px;
    color: #FF5555;
  }
  h6{
    color: #282A36;
    font-size: 20px;
  }
`;

export const CardSeparaTop = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  flex-direction: column;

`
export const CardSeparaBot = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

export const CardImage = styled.div`
  width: 50%;
  height: 100%;
  border-radius: 9px;
  background-image: url(${prop => prop.uri || "https://media.istockphoto.com/vectors/car-flat-icon-vector-id1144092062?b=1&k=6&m=1144092062&s=612x612&w=0&h=zMH-_u3shpUjbCFQiewi6AhSItMmtI-MMVsayqeHRpc="});
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  :hover{
    border: #bf3f3f solid;
    transition: 0.3s;
  }
`;

export const CardImageService = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${prop => prop.uri || "https://media.istockphoto.com/vectors/car-flat-icon-vector-id1144092062?b=1&k=6&m=1144092062&s=612x612&w=0&h=zMH-_u3shpUjbCFQiewi6AhSItMmtI-MMVsayqeHRpc="});
  background-repeat: no-repeat;
  background-size: cover;

`;

export const CardInfo = styled.div`
  width: 50%;
  height: 100%;
  padding: 15px;

  h4{
    font-size: 1.5rem;
  }
  h5{
    font-size: 1.2rem;
  }
`;

