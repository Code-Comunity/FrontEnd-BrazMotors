import styled from 'styled-components';

export const Card = styled.div`
  background-color: #fff;
  width: 500px;
  height: 280px;
  border-radius: 9px;
  cursor: pointer;

  display: flex;
  justify-content: space-around;
  ali

  :hover{
    background-color: #bf3f3f;
    transition: 0.3s;
  }

`;

export const CardImage = styled.div`
  width: 100%;
  height: 80%;
  background:#282a36;
  background-image: url(${prop => prop.uri || "https://media.istockphoto.com/vectors/car-flat-icon-vector-id1144092062?b=1&k=6&m=1144092062&s=612x612&w=0&h=zMH-_u3shpUjbCFQiewi6AhSItMmtI-MMVsayqeHRpc="});
  background-repeat: no-repeat;
  background-size: cover;
  border: solid #ff5555;
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
  width: 100%;
  padding: 15px;

  h4{
    font-size: 1.5rem;
  }
  h5{
    font-size: 1.2rem;
  }
`;

