import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: none;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #FF5555;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    display: flex;

    a{
      text-decoration: none;
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
        <li>
          <Link href="/home" >Home</Link>
        </li> 
        <li>
          <Link href="/Empresa" > Empresa </Link>
        </li> 
      
        <li>
          <Link href="/showroom" > Showroom</Link>
        </li> 
     
        <li>
           <Link href="/Preventiva"> Mecanica Preventiva </Link>
        </li> 
     
        <li>
          <Link href="/Especializada">  Mecanica Especializada</Link> 
        </li> 
      
        <li>
          <Link href="/Estetica"> Estética automotiva</Link>
        </li> 
      
        <li>
          <Link href="/Acessorios"> Acessórios automotivos</Link>
        </li> 
       
        <li>
          <Link href="/Financiamento">Financiamento</Link>
        </li> 
    </Ul>
  )
}

export default RightNav
