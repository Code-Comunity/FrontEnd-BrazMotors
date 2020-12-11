import styled from 'styled-components';

export const Form = styled.div`
  width: 100%;
  height: max-content;
  padding: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InputForm = styled.input`
  border: none;
  background: white;
  height: 40px;
  width: 90%;
  margin: 15px;
`;

export const TextAreaForm = styled.textarea`
    text-rendering: auto;
    color: black;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    text-align: start;
    appearance: textarea;
    background-color: white;
    -webkit-rtl-ordering: logical;
    resize: auto;
    cursor: text;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    font: 400 13.3333px Arial;
    padding: 2px;
    resize: none;
    border-radius: 2px;
    width: 90%;
    height: 100px;    
    margin: 15px;
`

export const BoxesForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;