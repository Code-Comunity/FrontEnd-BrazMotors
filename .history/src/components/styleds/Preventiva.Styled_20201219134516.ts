import styled from "styled-components";

export const  Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 80px;
  background-color: #fff;
  text-align: center;

  display: flex;
  align-items: center;
  flex-direction: column;

  h2{
    margin-top: 80px;
    font-size: 30px;
    color: black;
  }
`

export const CardsContainer = styled.div`
  width: 65%;
  margin-top: 15px;
  padding-left: 70px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-around;
  grid-gap: 10px;
  padding: 10px;
`

export const CardTop = styled.div`
  width: 100%;
  height: 315px;
`

export const ContainerForms = styled.div`
  width: 100%;
  height: 600px;
  margin-top: 50px;
  margin-bottom: 50px;
  background-color: black;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`
export const CardHover = styled.div`
  width: 480px;
  height: 400px;
  color: #fff;
  background-color: black;
  position: absolute;
  z-index: 10;
  padding: 20px;
  
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3{
    color: #fff;
    margin-bottom: 10px;
  }
`
export const PrecoHover = styled.div`
  width: 100%;
  padding-left: 20px;

  h1{
    font-size
  }
`
export const Card = styled.div`
  width: 480px;
  height: 400px;
  background: black;
  cursor: pointer;
  transition: 0.3s;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  h1{
    margin-top: 20px;
    font-size: 25px;
  }

  &:hover ${CardHover} {
      display: flex;
  }
`