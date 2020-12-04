import React, { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import {
  Container,
  Header,
  FirstSection,
  SecondSection,
} from "../components/Layout";
import { NavBar, OptionsNavbar } from "../components/Navbar";
import { Card, CardImage, CardInfo } from "../components/CardComponents";
const Logo =
  "https://static.wixstatic.com/media/f55eb9_75da84b90d074eb492e51266a5110559~mv2.png/v1/fill/w_284,h_87,al_c,q_85,usm_0.66_1.00_0.01/logo_02.webp";

//APIS
import { CardsHome } from "./api/fakeApi";
//import axios from "axios";

export default function Home() {
  return (
    <>
      <Head>
        <title>HomePage</title>
      </Head>
      <NavBar>
        <img id="Logo" src={Logo} alt="logo" />
        <OptionsNavbar>
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">Mecanica Preventiva</Link>
          </li>
          <li>
            <Link href="#">Catalogo</Link>
          </li>
        </OptionsNavbar>
      </NavBar>
      <Container>
        <Header>
          <img
            style={{ objectFit: "cover" }}
            src="https://static.wixstatic.com/media/ff6b3b_4eb252be33414a11a847a55a67505e4b~mv2.png/v1/fill/w_1219,h_295,al_c,q_85/ff6b3b_4eb252be33414a11a847a55a67505e4b~mv2.webp"
          />
        </Header>

        <FirstSection>
          <h1>Escolha o que combina com você</h1>
          <h2>CARROS INCRÍVEIS COM PREÇOS IMPERDÍVEIS</h2>
        </FirstSection>
        <SecondSection>
          {CardsHome.map(
            (e): JSX.Element => (
              <Card key={e.id}>
                <CardImage uri={e.img} />
                <CardInfo>
                  <h4>{e.titulo}</h4>
                  <h5>{e.preço}</h5>
                </CardInfo>
              </Card>
            )
          )}
        </SecondSection>
      </Container>
    </>
  );
}
