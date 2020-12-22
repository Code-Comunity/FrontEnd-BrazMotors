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
  IconInfo
} from "../components/styleds/Layout.Styled";

import Footer from '../components/FooterComponent'
import { NavBar, OptionsNavbar } from "../components/styleds/Navbar.Styled";
import { Card, CardImage, CardInfo } from "../components/styleds/CardComponents.Styled";
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
            

          </CardInfoHome>

          <CardInfoHome>
            <IconInfo />
          </CardInfoHome>

          <CardInfoHome>
            <IconInfo />
          </CardInfoHome>
        </CardsContainerHome>
        <FirstSection>
          <h1>Escolha o que combina com você</h1>
          <h2 style={{ borderBottom: "solid 3px #ff5555", paddingBottom: 15 }}>
            CARROS INCRÍVEIS COM PREÇOS IMPERDÍVEIS
          </h2>
        </FirstSection>
        <SecondSection>
          {carro.map(
            (e): JSX.Element => (
              <Card key={e.id}>
                <CardImage uri={e.imagem} />
                <CardInfo>
                  <h4>{e.nome}</h4>
                  <h5>{e.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h5>
                </CardInfo>
              </Card>
            )
          )}
        </SecondSection>
        <CentralizeText>
          <h1 style={{ borderBottom: "solid 3px #ff5555", paddingBottom: 15 }}>
            Por quê nós?
          </h1>

          <p style={{ width: "70%", textAlign: "center" }}>
            Por que nós? São mais de 10 anos de uma história de sucesso e
            dedicação aos nossos clientes. ​ Nós, da Brazmotors, trabalhamos com
            consignados, ajudando a promover a venda do seu carro com agilidade
            e segurança, onde o mesmo não perde o seu valor de mercado e,
            atingir um objetivo melhor na venda de seu veículo. Através do
            contrato de vendas, assumimos a responsabilidade de cuidar das
            campanhas de vendas, promovendo anúncios para o seu carro em
            diversas plataformas, como: WebMotors, Olx, Instagram, Facebook e
            outros. Zelamos pela transparência, informando aos nossos clientes
            todo o processo e etapas de venda do seu veículo. Nossas modalidades
            são: venda, troca e financiamentos. A partir da modalidade escolhida
            pelo cliente, assumimos a responsabilidade, junto ao Detran,
            protegendo sua carteira de multas e danos futuros e, além disso, o
            valor contratado é liberado de forma imediata e integral. Nossos
            especialistas estarão disponíveis para que a venda do seu veículo
            aconteça de forma rápida e segura... Contate-nos e nós iremos te
            ajudar!
          </p>
        </CentralizeText>
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
      </Container>
      </>
  );
}
