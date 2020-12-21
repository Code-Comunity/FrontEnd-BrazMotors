import styled from 'styled-components'

export const Footer = styled.div`
  width: 100%; 
  height: max-content;
  background-color: black;
  color: white;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  a{
    color: white;
    text-decoration: none;
    font-weight: bold;
  }

  h3{
      font-size: 3px;
      margin: 5px;
  } 

`

export const ItemsFooter = styled.div`
  display: flex;
  align-items: center;

  ul{
    list-style: none;
  }

`

export const ItemsTop = styled.div`
  width: 100%;
  height: max-content;
  padding: 70px 100px;
  background-color: #FF5555;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: white;
`

export const ItemsMid = styled.div`
  width: 100%;
  padding: 10px;
  background: #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div{
      display: flex;
      flex-direction: row;
  } 

  h2{
      color: #FF5555;
      font-size: 40px;
      margin: 2px;
  }
`

export const ItemsBot = styled.div`
  background: #fff;
  width: 100%;
  height: 30px;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;

  p{
      color: #FF5555;
      font-size: 15px;
  }
`