import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image';

import MenuComponent from "../components/MenuComponent";
import { CardsContainer, Container, Card, CardTop, ContainerForms, CardHover, PrecoHover } from '../components/styleds/Preventiva.Styled';
import { InputsBox, Input } from '../components/styleds/Inputs.Styled';
import { ButtonBlackBorder } from '../components/styleds/Buttons.Styled';

import Teste from '../assets/testePreven.png';

//Whats
import WhatsApp from "../components/WhatsApp";
import { CardImageService } from '../components/styleds/CardComponents.Styled';


export const getStaticProps = async () => {
    const response = await fetch('https://teste-brazmotors.herokuapp.com/estetica-automotiva')
    const data = await response.json();
  
    return {
      props: {
        servico: data,
      }
    }
    
  }

export default function Estetica({servico}) {
  return (
    <>
        <Head>
            <title>HomePage</title>
        </Head>
        <MenuComponent />
        <WhatsApp />
        <Container>
            <h2>Estética automotiva:</h2>
            <hr style={{width:"100px", marginTop:"5px", border:"2px solid #ff5555", color:"#ff5555", marginBottom:"20px"}}></hr>
            <CardsContainer>
                {servico.map((e) => (
                  <Link href={`estetica/[id]`} as={`estetica/${e._id}`}>
                        <Card key={e._id}>
                            <CardHover id="cardHover">
                                <h3>{e.titulo}</h3>
                                <p>{e.descricao}</p>
                                  <PrecoHover>
                                    <h1>{e.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h1>
                                  </PrecoHover>       
                            </CardHover>
                            <CardTop>
                            <CardImageService uri={e.imagem} />
                            </CardTop>

                            <h1>{e.titulo}</h1>
                        </Card>
                        </Link>
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
