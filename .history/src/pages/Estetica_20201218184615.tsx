import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image';

import MenuComponent from "../components/MenuComponent";
import { CardsContainer, Container, Card, CardTop, ContainerForms } from '../components/styleds/Preventiva.Styled';
import { InputsBox, Input } from '../components/styleds/Inputs.Styled';
import { ButtonBlackBorder } from '../components/styleds/Buttons.Styled';

import Teste from '../assets/testePreven.png';

//Whats
import WhatsApp from "../components/WhatsApp";


export const getStaticProps = async () => {
    const response = await fetch('https://teste-brazmotors.herokuapp.com/estetica-automotiva')
    const data = await response.json();
  
    return {
      props: {
        servico: data,
      }
    }
    
  }

export default function Index({servico}) {
  return (
    <>
        <Head>
            <title>HomePage</title>
        </Head>
        <MenuComponent />
        <WhatsApp />
        <Container>
            <h2>Estética automotiva:</h2>
            <hr style={{width:"100px", marginTop:"5px", border:"2px solid red", color:"red", marginBottom:"20px"}}></hr>
           <CardsContainer>
                {servico.map((e) => (
                        <Card key={e.id}>
                            <CardHover id="cardHover">
                                <h3>{e.titulo}</h3>
                                <p>{e.descricao}</p>
                                        
                            </CardHover>
                            <CardTop>
                                <Image
                                    src={Teste}
                                    alt="Picture of the author"
                                    width={480}
                                    height={315}
                                />
                            </CardTop>

                            <h1>{e.titulo}</h1>
                        </Card>
                ))}
           </CardsContainer>
           <ContainerForms>
               <h1>Entre em contato:</h1>
               <InputsBox>
                    <Input type="text" placeholder="Nome" />
                    <Input type="text" placeholder="Telefone" />
                    <Input type="text" placeholder="Email" />
                    <ButtonBlackBorder>Enviar</ButtonBlackBorder>
               </InputsBox>
           </ContainerForms>
        </Container>
    </>
  )
}
