import styled from "styled-components";

export const NavBar = styled.div`
  background-color: black;
  width: 100%;
  height: max-content;
  position: fixed;
  display: flex;
  justify-content: space-between;
  padding: 10px 90px;
  z-index: 15;

  #Logo {
    width: 150px;
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
  background-color: black;
  position: absolute;
  right: 400px;
  padding-top: 10px;
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
  background-color: black;
  position: absolute;
  right: 220px;

  list-style: none;

  display: flex;
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

  &:hover ${ShowroomDrop} {
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
    color: white;
    transition: 0.3s;
  }
  a:hover {
    color: #ff5555;
  }
  @media(max-width: 500px){
    display: none;
  } 
  
`;


