import React, { useEffect } from 'react'
import { useRouter } from 'next/router' 
import Head from 'next/head'
import Link from 'next/link'
//import Axios from './api/api'

import Axios from 'axios'

import MenuComponent from "../../components/MenuComponent";

import { Container, Content, UpSide, DownSide, Left, Right, LeftDown } from '../../components/styleds/Car.Styled'

import { InputsBox, Input, SmallInput, InputHour, TextArea } from "../../components/styleds/Inputs.Styled";
import SimpleSlider from "../../components/Slide";
import { ButtonBlack } from '../../components/styleds/Buttons.Styled';
import Footer from '../../components/FooterComponent';
import { IoCall, IoLocationSharp, IoMailSharp } from 'react-icons/io5';

//Whats
import WhatsApp from "../../components/WhatsApp";
import { useState } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'

import SimpleSlider1 from "../../components/slide/[id]"



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

export default function Car({ carro }) {

  const [ Nome, setNome ] = useState()
  const [ Email, setEmail ] = useState()
  const [ Tel, setTel ] = useState()
  const [ Cel, setCel ] = useState()
  const [ Hora, setHora ] = useState()
  const [ Mensagem, setMensagem ] = useState()

  async function EnviarMensagem() {

    const requestData = {
      nome: Nome,
      email: Email,
      telefone: Tel,
      celular: Cel,
      mensagem: Mensagem,
      id: carro[0]._id
    }

    await fetch('https://teste-brazmotors.herokuapp.com/mensagem/Veiculo', {
      method: 'POST',
      body: JSON.stringify(requestData),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      })
    })
    .then( (resp)=>{
        alert("Mensagem registrada! Em breve entraremos em contato. ")
      })
      .catch((error)=>{
        alert(error)
      })
  }
    
   const { isFallback } = useRouter()

  if (isFallback) { return <h1>carregando...</h1> }

  return (
    <>
      <Head>
        <title>{carro[0].nome}</title>
        <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Head>
      <MenuComponent />
      <Container>
      <WhatsApp />
        <Content>
          <UpSide>
            <Left>
              {/* <SimpleSlider /> */}
              <img src={carro[0].imagem} />
              <LeftDown>
              <h1 style={{color:"#FF5555", fontSize: "1.6rem"}}>{carro[0].nome}</h1>
              <h1>Descrição:</h1>
              <p>{carro[0].descricao}</p>
            </LeftDown>
            </Left>
            <Right>
              <h1 style={{ 
                color: "#FF5555"
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
                {/* <InputHour onChange={(e:any)=>setHora(e.target.value)}>
                  <option value="0">Selecione o melhor horario pra contato</option>
                  <option value="1">Manhã</option>
                  <option value="2">Tarde</option>
                  <option value="3">Noite</option>
                </InputHour> */}
                <TextArea placeholder="Digite sua mensagem" onChange={(e:any)=>setMensagem(e.target.value)}>

                </TextArea>
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
                <span>Ano:{carro[0].ano}</span>
                <span>Marca: {carro[0].marca}</span>
                <span>Modelo: {carro[0].modelo}</span>
                <span>Valor: {carro[0].preco}</span>
              </div>


            </Right>
          </UpSide>

          <DownSide>
            
          </DownSide>
        </Content>

        <Footer/>
        </Container>
    </>
  )
}
