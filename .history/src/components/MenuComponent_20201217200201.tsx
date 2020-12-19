import React from 'react'

import Link from "next/link"
import Image from 'next/image'
import { NavBar, OptionsNavbar, ShowroomHover } from './styleds/Navbar.Styled'
const Logo =
  "https://static.wixstatic.com/media/f55eb9_75da84b90d074eb492e51266a5110559~mv2.png/v1/fill/w_284,h_87,al_c,q_85,usm_0.66_1.00_0.01/logo_02.webp";

import Burger from './BurgerComp';


export default function MenuComponent() {
  return (
    <NavBar>
        <img id="Logo" src={Logo} alt="logo" />
        <OptionsNavbar>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/home">Empresa</Link>
          </li>
          <ShowroomHover>
          <li>
            <Link href="/showroom">Showroom</Link>
          </li>
          <>
          <li>
            <Link href="/Preventiva">Centro automotivo</Link>
          </li>
          <li>
            <Link href="#">Financiamento</Link>
          </li>
        </OptionsNavbar>
        <Burger />
      </NavBar>
  )
}
