import React, { useEffect } from 'react'
import { useRouter } from 'next/router' 
import Head from 'next/head'
import Link from 'next/link'
//import Axios from './api/api'

import Axios from 'axios'

import MenuComponent from "../../components/MenuComponent";

import { Container, Content, UpSide, DownSide, Left, Right, LeftDown } from '../../components/styleds/Car.Styled'

import { InputsBox, Input, SmallInput, InputHour } from "../../components/styleds/Inputs.Styled";
import SimpleSlider from "../../components/Slide";
import { ButtonBlack } from '../../components/styleds/Buttons.Styled';
import { Footer, ItemsFooter } from '../../components/styleds/Layout.Styled';
import { IoCall, IoLocationSharp, IoMailSharp } from 'react-icons/io5';

//Whats
import WhatsApp from "../../components/WhatsApp";
import { useState } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'



export const getStaticPaths: GetStaticPaths  = async () => {
    const response = await fetch(`https://teste-brazmotors.herokuapp.com/carros`)
    const data = await response.json()

    const paths = data.map((post: { _id: any }) => ({ params: { id: post._id }, }))

    return { paths, fallback: true }
}

 export const getStaticProps: GetStaticProps = async (context) => {

 const id:any = context.params.id

   const response = await fetch(`https://teste-brazmotors.herokuapp.com/carros/${id}`)
   const data = await response.json();
   console.log(response)
   return {
     props: {
       carro: data,
     }
   }
 }

export default function Index({ carro }) {

  const [ Nome, setNome ] = useState()
  const [ Email, setEmail ] = useState()
  const [ Tel, setTel ] = useState()
  const [ Cel, setCel ] = useState()
  const [ Hora, setHora ] = useState()

  console.log(carro)

  // carro.map(e=>{
  //   return console.log(e)
  // })

  async function EnviarMensagem() {

    const requestData = {
      nome: Nome,
      email: Email,
      telefone: Tel,
      celular: Cel,
      mensagem: 'teste'
    }

    await fetch('https://teste-brazmotors.herokuapp.com/mensagem/Veiculo', {
      method: 'POST',
      body: JSON.stringify(requestData),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }),

    })
  }

  return (
    <>
      <Head>
        <title>HomePage</title>
        <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Head>
      <MenuComponent />
      <Container>
      <WhatsApp />
        <Content>
          <UpSide>
            <Left>
              <SimpleSlider />
            </Left>
            <Right>
              <h1 style={{ 
                color: 'black'
              }} >
                Demonstre interesse 
              </h1>
              <InputsBox>
                <Input type="text" placeholder="Nome" onChange={(e:any)=>setNome(e.target.value)} />
                <Input type="text" placeholder="Email" onChange={(e:any)=>setEmail(e.target.value)} />
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '100%'
                }}>
                  <SmallInput type="text" placeholder="Telefone" onChange={(e:any)=>setTel(e.target.value)} />
                  <SmallInput type="text" placeholder="Celular" onChange={(e:any)=>setCel(e.target.value)} />
                </div>
                <InputHour onChange={(e:any)=>setHora(e.target.value)}>
                  <option value="0">Selecione o melhor horario pra contato</option>
                  <option value="1">Manhã</option>
                  <option value="2">Tarde</option>
                  <option value="3">Noite</option>
                </InputHour>
                <ButtonBlack width="100%" onClick={()=>EnviarMensagem()}>Enviar</ButtonBlack>
              </InputsBox>
              <div style={{
                textAlign: 'left',
                width: "100%",
                marginLeft: 25,
                color: "black",
                display: 'flex',
                flexDirection: 'column'
              }}>
                <h3>Dados do veículo:</h3>
                <span>Ano:</span>
                <span>Marca: {carro[0].marca}</span>
                <span>Modelo: {carro[0].modelo}</span>
                <span>Valor: {carro[0].preco}</span>
              </div>


            </Right>
          </UpSide>

          <DownSide>
            <LeftDown>
              <h1>Descrição:</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining.</p>
            </LeftDown>
          </DownSide>
        </Content>

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
        </Container>
    </>
  )
}