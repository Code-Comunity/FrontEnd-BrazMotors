import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import MenuComponent from "../components/MenuComponent"
import { Conteudo } from '../components/styleds/Empresa.Styled'

export default function Index() {
  return (
    <div>
      <Head>
        <title>HomePage</title>
      </Head>
      <MenuComponent />

      <Conteudo>
          <h1>Sobre nós</h1>
          <h3>Conheça um pouco mais a nossa história</h3>
      </Conteudo>
    </div>
  )
}
