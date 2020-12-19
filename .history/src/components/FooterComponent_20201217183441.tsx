import React from 'react'
import { IoCall, IoLocationSharp, IoMailSharp } from 'react-icons/io5';

import {
  Container,
  Header,
  FirstSection,
  SecondSection,
  CentralizeText,
  Footer,
  ItemsFooter,
} from "./styleds/Layout.Styled";

export default function FooterComponent() {
  return (
    <Footer>
    <ItemsFooter>
      <IoMailSharp />
      <a href="#">brazmotorsrj@gmail.com</a>
    </ItemsFooter>
    <ItemsFooter>
      <IoLocationSharp />
      <span style={{ width: 200 }}>
        Av. Pref. Dulcídio Cardoso, 2900 - Barra da Tijuca, Rio de Janeiro
        - RJ, 22631-052, Brasil
      </span>
    </ItemsFooter>
    <ItemsFooter>
    <IoCall />
      <ul>
        <li>(21) 96489-6555</li>
        <li>(21) 2439-8048</li>
      </ul>
    </ItemsFooter>
  </Footer>
  )
}
