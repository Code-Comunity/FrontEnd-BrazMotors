import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import MenuComponent from "../components/MenuComponent"
import Footer from "../components/FooterComponent"
import { Container, Conteudo } from '../components/styleds/Empresa.Styled'

import Frente from "../assets/sobre.webp"

export default function Index() {
  return (
    <div>
      <Head>
        <title>HomePage</title>
      </Head>
      <MenuComponent />
      <Container>
        <Conteudo>
            <h1>Sobre nós</h1>
            <h3>Conheça um pouco mais a nossa história</h3>
            <hr style={{ width: "100px", marginTop: "5px", border: "2px solid red", color: "red", marginBottom: "20px" }}></hr>
            <Image
                src={Frente}
                alt="Picture of the author"
                width={691}
                height={316}
            />
            <p>Mais de 16 anos no mercado a brazmotorsrj,esta no conceito de todos as marcas de veículos novos e semi novos nacionais e importados,na compra,venda,troca,financiamos com as melhores taxas do mercado e também com consignação ajudando o cliente a vender seu veiculo com toda segurança e qualidade de um bom negocio.
Financiamos em ate 60 vezes,e parcelamos sua entrada ate 12 vezes no cartão</p>
        </Conteudo>
      </Container>
      <>
    </div>
  )
}
