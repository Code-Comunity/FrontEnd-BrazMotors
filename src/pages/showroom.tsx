import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

//imports de components
import MenuComponent from "../components/MenuComponent";
import { Container, CardsContainer, Card } from "../components/styleds/Showroom.Styled";

//Imagens
const Logo =
  "https://static.wixstatic.com/media/f55eb9_75da84b90d074eb492e51266a5110559~mv2.png/v1/fill/w_284,h_87,al_c,q_85,usm_0.66_1.00_0.01/logo_02.webp";

import LogoMarca from "../assets/logoMarca.png";

//API
import { CardsHome } from "./api/fakeApi";
import Footer from '../components/FooterComponent'
import { IoCall, IoLocationSharp, IoMailSharp } from 'react-icons/io5';



//Whats
import WhatsApp from "../components/WhatsApp";
import FooterComponent from '../components/FooterComponent';
import { CardImage } from '../components/styleds/CardComponents.Styled';

export const getStaticProps = async () => {
  const response = await fetch('http://teste-brazmotors.herokuapp.com/marcas')
  const data = await response.json();

  return {
    props: {
      marca: data,
    }
  }
  
}




export default function Showroom({marca}): JSX.Element {

  console.log(marca)

  marca.map(e=>{
    return console.log(e)
  })  

  return (
    <div>
        <Head>
            <title>Showroom</title>
        </Head>
        <MenuComponent />

        <Container>
          <WhatsApp />

          <h1 style={{fontSize: '1.9rem', color: "#FF5555",marginTop: "60px"}} >Marcas</h1>
          <hr style={{ width: "100px", marginTop: "5px", border: "2px solid #FF5555", color: "#FF5555", marginBottom: "20px" }}></hr>
          
            <CardsContainer>

            {marca.map((e) => (
                    <Link href="./marcas/modelos/[id]" as={`./marcas/modelos/${e.id}`}>
                        <CardImage uri={e.img} >
                            
                        </CardImage>
                </Link>
            ))}
            </CardsContainer>
        </Container>

       <FooterComponent />
    </div>
  )
}
