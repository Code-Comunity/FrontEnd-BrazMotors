import React, { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from 'next/image';
import {
  Container,
  Header,
  FirstSection,
  SecondSection,
  CentralizeText,
  ItemsFooter,
  CardsContainerHome,
  CardInfoHome,
  IconInfo,

} from "../components/styleds/Layout.Styled";


import Footer from '../components/FooterComponent'
import { NavBar, OptionsNavbar } from "../components/styleds/Navbar.Styled";
import { Card, CardImage, CardInfo, CardSeparaBot, CardSeparaTop,   CardContainerHome, CardsInfoBot } from "../components/styleds/CardComponents.Styled";
import { ContainerWhats } from "../components/styleds/WhatsApp.Styled";
const Logo =
  "https://static.wixstatic.com/media/f55eb9_75da84b90d074eb492e51266a5110559~mv2.png/v1/fill/w_284,h_87,al_c,q_85,usm_0.66_1.00_0.01/logo_02.webp";

import MenuComponent from "../components/MenuComponent";

import Banner from "../assets/1.png";
//Icons
import { IoMailSharp, IoLocationSharp, IoCall } from "react-icons/io5";

//Whats
import WhatsApp from "../components/WhatsApp";

//APIS
import { CardsHome } from "./api/fakeApi";


//import axios from "axios";

// const url = window.location.pathname;
// const splitURL = url.split("/");

export const getStaticProps = async () => {

  const response = await fetch('https://teste-brazmotors.herokuapp.com/carros/')
  const data = await response.json();
  console.log(data)

  return {
    props: {
      carro: data,
    }
  }
}

export default function Home({carro}) {
  console.log(carro)
  return (
    <>
      <Head>
        <title>HomePage</title>
      </Head>
      <MenuComponent />
      <Container>
        <Header>
          <Image
            src={Banner}
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </Header>

        <WhatsApp />
        <CardsContainerHome>
          <CardInfoHome>
            <IconInfo />
            <h1>Mecanica Automotiva</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>

          </CardInfoHome>

          <CardInfoHome>
            <IconInfo />
          </CardInfoHome>

          <CardInfoHome>
            <IconInfo />
          </CardInfoHome>
        </CardsContainerHome>
        <FirstSection>
          <h1>Nossos carros</h1>
          <hr style={{ width: "100px", marginTop: "5px", border: "2px solid red", color: "red", marginBottom: "20px" }}></hr>
        </FirstSection>
        <SecondSection>
            {carro.map(
              (e): JSX.Element => (
                <Card key={e.id}>
                  <CardInfo>
                    <CardSeparaTop>
                      <h4>{e.nome}</h4>
                      <h5>{e.marca}</h5>
                    </CardSeparaTop>

                    <CardSeparaBot>
                      <h6>{e.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h6>
                    </CardSeparaBot>
                  </CardInfo>
                  <CardImage uri={e.imagem} />
                </Card>
              )
            )}      
        </SecondSection>

          <h1>Compre já!</h1>
          <hr style={{ width: "100px", marginTop: "5px", border: "2px solid red", color: "red", marginBottom: "20px" }}></hr>
          <CardContainerHome>
                
          </CardContainerHome>
                
        <Footer />
      </Container>
      </>
  );
}
