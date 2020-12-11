import styled from 'styled-components';

export const InputFilter = styled.select`
  width: 80%;
  height: 50px;
  background: gray;
  border: none;
  border-radius: 15px;
  margin-top: 20px;
  padding-left: 15px;
  outline: none;
  color: white;
  option{
    background: gray;
  }
`;

export const InputHour = styled.select`
 width: 100%;
  height: 50px;
  background: white;
  border: solid 1px black;
  margin-top: 20px;
  padding-left: 15px;
  outline: none;
  color: black;
  option{
    background: white;
  }
`

export const InputsBox = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: 50%;
  height: 50px;
  background: white;
  padding-left: 15px;
  outline: none;
  background: #FFFFFF;
  border: 1px solid #000000;
  box-sizing: border-box;
  margin: 15px;

  @media (max-width: 700px){
    width: 80%;
  }
`;

export const SmallInput = styled.input`
  width: 48%;
  height: 50px;
  background: white;
  padding-left: 15px;
  outline: none;
  background: #FFFFFF;
  border: 1px solid #000000;
  box-sizing: border-box;
`;