import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import MenuComponent from "../components/MenuComponent"
import WhatsApp from "../components/WhatsApp"

export default function Index() {
  return (
    <div>
      <Head>
        <title>HomePage</title>
      </Head>
      <MenuComponent />  
      <WhatsApp />
      
      
    </div>
  )
}
