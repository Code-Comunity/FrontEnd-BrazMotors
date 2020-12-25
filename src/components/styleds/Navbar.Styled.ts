import styled from "styled-components";

export const NavBar = styled.div`
  background-color: white;
  width: 100%;
  height: max-content;
  position: fixed;
  display: flex;
  justify-content: space-between;
  padding: 10px 90px;
  z-index: 15;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
 

  #Logo {
    width: 41px;
  }
  @media (max-width: 700px){
    padding: 10px 30px;

    input{
      display: none;
    }
  }
`;

export const ShowroomDrop = styled.div`
  width: 110px;
  height: max-content;
  background-color: white;
  position: absolute;
  right: 370px;

  list-style: none;

  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  a{
    font-size: 13px; 
  }

  
`
export const ShowroomHover = styled.div`
  font-size: 17px;
  font-weight: bold;

  &:hover ${ShowroomDrop} {
      display: flex;
  }
`

export const MecanicaDrop = styled.div`
  width: 190px;
  height: max-content;
  background-color: white;
  position: absolute;
  right: 200px;

  list-style: none;

  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  a{
    font-size: 13px; 
  }

  
`
export const MecanicaHover = styled.div`
  font-size: 17px;
  font-weight: bold;

  &:hover ${MecanicaDrop} {
      display: flex;
  }
`


export const OptionsNavbar = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;

  li {
    margin: 10px;
    font-size: 17px;
    font-weight: bold;
  }
  a {
    text-decoration: none;
    color: #FF5555;
    transition: 0.3s;
  }
  a:hover {
    color: #ff5555;
  }
  @media(max-width: 500px){
    display: none;
  } 
  
`;


