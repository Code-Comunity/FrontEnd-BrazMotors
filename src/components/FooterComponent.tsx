import React from 'react'
import Link from 'next/link'

import {  IoLocationSharp, IoMailSharp } from 'react-icons/io5'
import { GiPhone } from 'react-icons/gi'
import { FiInstagram } from 'react-icons/fi'
import { AiOutlineFacebook } from 'react-icons/ai'

import {
  Container,
  Header,
  FirstSection,
  SecondSection,
  CentralizeText,

} from "./styleds/Layout.Styled";

import {   Footer, ItemsBot, ItemsFooter, ItemsMid, ItemsTop} from './styleds/Footer.Styled'

export default function FooterComponent() { 
  return (
    <Footer>
      <ItemsTop>
        <ItemsFooter>
          <h3><IoMailSharp size="22px" /></h3>
          <a href="#">brazmotorsrj@gmail.com</a>
        </ItemsFooter>
        <ItemsFooter>
          <h3><IoLocationSharp size="22px" /></h3>
          <span style={{ width: 200 }}>
            Av. Pref. Dulcídio Cardoso, 2900 - Barra da Tijuca, Rio de Janeiro
            - RJ, 22631-052, Brasil
          </span>
        </ItemsFooter>
        <ItemsFooter>
        <h3><GiPhone size="22px" /></h3>
          <ul>
            <li>(21) 96489-6555</li>
            <li>(21) 2439-8048</li>
          </ul>
        </ItemsFooter>
    </ItemsTop>
    <ItemsMid>
      <div>
        <a href="https://www.instagram.com/brazmotorsrj" target="_blank"  > <h2> <FiInstagram size="28px" /> </h2></a>
        <a href="https://www.facebook.com/brazmotorsrj" target="_blank"  > <h2> <AiOutlineFacebook size="28px"/> </h2></a>
      </div>
      <hr style={{ width: "100%", border: "1px solid #FF5555"}}></hr>
    </ItemsMid>
    <ItemsBot>
      <p>© 2020 por Brazmotors.</p>
    </ItemsBot>
  </Footer>
  )
}
