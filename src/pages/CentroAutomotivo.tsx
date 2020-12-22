import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'

import MenuComponent from "../components/MenuComponent";
import WhatsApp from "../components/WhatsApp";
import { Container, Cards, Card } from '../components/styleds/CentroAutomotivo.Styled';



function CentroAutomotivo() {
  return (
    <>
      <MenuComponent />
      <Container>
        <Cards>
        <Link href="/Acessorios">
          <Card>
            <div style={{ height: 350, width: '100%', border: 'solid' }}>

            </div>
            <h3>Acessórios Automotivos</h3>
          </Card>
          </Link>

        <Link href="/Especializada">
          <Card>
            <div style={{ height: 350, width: '100%', border: 'solid' }}>

            </div>
            <h3>Mecânica Especializada</h3>
          </Card>
        </Link>

        <Link href="/Preventiva">
          <Card>
            <div style={{ height: 350, width: '100%', border: 'solid' }}>

            </div>
            <h3>Mecânica Preventiva</h3>
          </Card>
        </Link>


        <Link href="/Estetica">
          <Card>
            <div style={{ height: 350, width: '100%', border: 'solid' }}>

            </div>
            <h3>Estética Automotiva</h3>
          </Card>
        </Link>
        </Cards>
      </Container>

    </>
  )
}

export default CentroAutomotivo;