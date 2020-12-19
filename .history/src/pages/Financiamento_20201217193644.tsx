import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import MenuComponent from "../components/MenuComponent";
import { Container } from '../components/styleds/Preventiva.Styled';

import { AiOutlineForm, AiOutlineClockCircle } from 'react-icons/ai'
import { RiMoneyDollarBoxLine } from 'react-icons/ri'
import Simples from '../assets/simples.png';



//Whats
import WhatsApp from "../components/WhatsApp";

//styled
import { Qualidade, QualidadesContainer, BlocoForm, LeftBlocoForm, RightBlocoForm, HeroImageBottomPart } from "../components/styleds/Financiamento.Styled";

import { FormComponent } from '../components/FormComponent';
import { Footer } from '../components/styleds/Layout.Styled';
import Footer from '../components/FooterComponent'

const bg = "https://images.pexels.com/photos/193999/pexels-photo-193999.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"

export default function Index() {
  return (
    <>
      <Head>
        <title>HomePage</title>
      </Head>
      <MenuComponent />

      <Container>
        <WhatsApp />
        <h2>Financiamento</h2>
        <hr style={{ width: "100px", marginTop: "5px", border: "2px solid red", color: "red", marginBottom: "20px" }}></hr>
        <QualidadesContainer>
          <Qualidade>
            <span><AiOutlineForm /></span>
            <h3>Simples</h3>
            <p>Preencha apenas um formulário simples e nós cuidamos do resto</p>
          </Qualidade>
          <Qualidade>
            <span><AiOutlineClockCircle /></span>
            <h3>Rápido</h3>
            <p>Aprovação em alguns minutos</p>
          </Qualidade>
          <Qualidade>
            <span><RiMoneyDollarBoxLine /></span>
            <h3>Melhores taxas</h3>
            <p>Qualifique-se e receba as melhores taxas do mercado.</p>
          </Qualidade>
        </ QualidadesContainer>

          <BlocoForm>
            <LeftBlocoForm>
              <FormComponent />
            </LeftBlocoForm>
            <RightBlocoForm>
              <h2>Solicite Já!</h2>
              <h4>PREENCHA SEUS DADOS E
                  NÓS ENTRAMOS EM CONTATO!</h4>
            </RightBlocoForm>
          </BlocoForm>

          <HeroImageBottomPart style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.9)),url(${bg})` }}>
           
          </HeroImageBottomPart>
        <Footer />
      </Container>
    </>
  )
}
