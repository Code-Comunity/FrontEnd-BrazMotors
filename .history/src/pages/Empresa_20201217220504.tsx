import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import MenuComponent from "../components/MenuComponent"
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
            
        </Conteudo>
      </Container>
    </div>
  )
}
