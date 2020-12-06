import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Header = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  padding-top: 65px;
`;
// MAIN PART
export const FirstSection = styled.div`
  background-color: #fff;
  width: 100%;
  height: max-content;
  padding: 70px 100px;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 2.8rem;
    font-weight: 700;
    color: #000;
  }
  h2 {
    color: #44475a;
    border-bottom: solid #ff5555 4px;
    margin-top: 25px;
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

export const SecondSection = styled.div`
  background-color: #fff;
  width: 100%;
  height: max-content;
  padding: 70px 100px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 15px;
  align-content: center;
  justify-items: center;

  @media (max-width: 700px){
    display: flex;
    flex-direction: column;
  }
`;
