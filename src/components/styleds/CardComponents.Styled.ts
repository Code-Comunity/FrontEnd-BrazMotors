import styled from 'styled-components';

export const CardContainerHome = styled.div`
  width: 100%;
  padding: 0 10%;
  height: 450px;
  background-color: #fff;
  margin: 100px;


  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  justify-items: center;
`
export const CardsInfoBot = styled.div`
  width: 50.33%;
  height: 50%;
  margin: 30px;
 
  display: flex;
  flex-direction: column;
  justify-content: flex-start;


  span{
    color: #FF5555;
    font-size: 3.3rem;
  }

  h1{
    color: #FF5555;
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 10px;
  }

  p{
    font-size: 0.9rem;
    font-weight: 500;
    color: #282A36;
    text-align: left;
  }
`
export const CardImage = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 9px;
  background-image: url(${prop => prop.uri || "https://media.istockphoto.com/vectors/car-flat-icon-vector-id1144092062?b=1&k=6&m=1144092062&s=612x612&w=0&h=zMH-_u3shpUjbCFQiewi6AhSItMmtI-MMVsayqeHRpc="});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  cursor: pointer;
`;

export const Card = styled.div`
  background-color: #fff;
  width: 70%;
  height: 280px;
  padding: 15px;
  border-radius: 9px;
  cursor: pointer;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  transition: all 0.25s;

  @media (max-width: 700px){
    width: 100%;
  }

  display: flex;
  justify-content: space-around;
  align-items: center;

  h4{
    color: #282A36;
    font-size: 37px;
    line-height: 1.5;
  }
  h5{
    font-size: 20px;
    color: #FF5555;
  }
  h6{
    color: #282A36;
    font-size: 20px;
  }

  :hover{
    transform: perspective(700px)
		translate(0px,-5px);
	  transform-origin: center 37%;
  }
`;

export const CardSeparaTop = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  flex-direction: column;

  h4{
    font-weight: 700;
    font-size: 1.5rem;
  }
  h5{
    font-weight: 500;
    font-size: 1.1rem;
  }
`
export const CardSeparaBot = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`


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

