import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image';

import MenuComponent from "../components/MenuComponent";
import { CardsContainer, Container, Card, CardTop, ContainerForms, CardHover } from '../components/styleds/Preventiva.Styled';
import { InputsBox, Input } from '../components/styleds/Inputs.Styled';
import { ButtonBlackBorder } from '../components/styleds/Buttons.Styled';

import Teste from '../assets/testePreven.png';



//Whats
import WhatsApp from "../components/WhatsApp";

import Modal from '../components/Modal.Component';
import Footer from '../components/FooterComponent'



export const getStaticProps = async () => {
    const response = await fetch('http://teste-brazmotors.herokuapp.com/marcas')
    const data = await response.json();
  
    return {
      props: {
        marca: data,
      }
    }
    
  }


export default function Index() {

  return (
    <>
        <Head>
            <title>HomePage</title>
        </Head>
        <MenuComponent />
       
        <Container>
        <WhatsApp />
            <h2>Mecanica preventiva:</h2>
            <hr style={{width:"100px", marginTop:"5px", border:"2px solid red", color:"red", marginBottom:"20px"}}></hr>
           <CardsContainer>
                <Card>
                    <CardHover id="cardHover">
                        <h3>Revisão preventiva</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining ess</p>
                                
                    </CardHover>
                    <CardTop>
                      
                        <Image
                            src={Teste}
                            alt="Picture of the author"
                            width={480}
                            height={315}
                        />
                    </CardTop>

                    <h1>Revisão Preventiva</h1>
                </Card>
              
                
           </CardsContainer>
           <ContainerForms>
               <h1>Entre em contato:</h1>
               <InputsBox>
                    <Input type="text" placeholder="Nome" />
                    <Input type="text" placeholder="Telefone" />
                    <Input type="text" placeholder="Email" />
                    <ButtonBlackBorder width="50%">Enviar</ButtonBlackBorder>
               </InputsBox>
           </ContainerForms>
           <Footer />
        </Container>
        
    </>
  )
}
