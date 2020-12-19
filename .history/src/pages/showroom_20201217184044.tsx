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

export const getStaticProps = async () => {
  const response = await fetch('http://teste-brazmotors.herokuapp.com/marcas')
  const data = await response.json();

  return {
    props: {
      marca: data,
    }
  }
  
}




export default function Index({marca}) {

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
            <CardsContainer>
            {marca.map((e) => (
                <Card key={e.id}>
                    {/* <Image
                        src={LogoMarca}
                        alt="Picture of the author"
                        width={500}
                        height={500}
                    /> */}
                    <h1>{e.marca}</h1>
                </Card>
            ))}
            </CardsContainer>
        </Container>

        <Footer>
          <ItemsFooter>
            <IoMailSharp />
            <a href="#">brazmotorsrj@gmail.com</a>
          </ItemsFooter>
          <ItemsFooter>
            <IoLocationSharp />
            <span style={{ width: 200 }}>
              Av. Pref. Dulcídio Cardoso, 2900 - Barra da Tijuca, Rio de Janeiro
              - RJ, 22631-052, Brasil
            </span>
          </ItemsFooter>
          <ItemsFooter>
          <IoCall />
            <ul>
              <li>(21) 96489-6555</li>
              <li>(21) 2439-8048</li>
            </ul>
          </ItemsFooter>
        </Footer>
    </div>
  )
}
