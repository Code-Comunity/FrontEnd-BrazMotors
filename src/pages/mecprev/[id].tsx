import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import MenuComponent from "../../components/MenuComponent";
import { Container, Content, UpSide, DownSide, Left, Right, LeftDown } from '../../components/styleds/ServicosAcessorios.Styled'
import { InputsBox, Input, SmallInput, InputHour, TextArea } from "../../components/styleds/Inputs.Styled";
import { ButtonBlack } from '../../components/styleds/Buttons.Styled';
import Footer from '../../components/FooterComponent';


//Whats
import WhatsApp from "../../components/WhatsApp";
import { useState } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'



export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`https://teste-brazmotors.herokuapp.com/mecanica-preventiva`)
  const data = await response.json()

  const paths = data.map((post: { _id: any }) => ({ params: { id: post._id }, }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async (context) => {

  const id: any = context.params.id

  const response = await fetch(`https://teste-brazmotors.herokuapp.com/mecanica-preventiva/${id}`)
  const data = await response.json();
  console.log(response)
  return {
    props: {
      preventiva: data,
    }
  }
}

export default function Preventiva({ preventiva }) {
  console.log(preventiva)
  const [Nome, setNome] = useState()
  const [Email, setEmail] = useState()
  const [Tel, setTel] = useState()
  const [Cel, setCel] = useState()
  const [Hora, setHora] = useState()
  const [Mensagem, setMensagem] = useState()

  async function EnviarMensagem() {

    const requestData = {
      nome: Nome,
      email: Email,
      telefone: Tel,
      celular: Cel,
      mensagem: Mensagem,
      id: preventiva[0]._id
    }

    await fetch('https://teste-brazmotors.herokuapp.com/mensagem/MecanicaPreventiva', {
      method: 'POST',
      body: JSON.stringify(requestData),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      })
    })
      .then(() => {
        alert("Mensagem registrada! Em breve entraremos em contato. ")
      })
      .catch((error) => {
        alert(error.response)
      })
  }
  const { isFallback } = useRouter()

  if (isFallback) { return <h1>carregando...</h1> }
  
  return (
    <>
      <Head>
        <title>{preventiva[0].titulo}</title>
        <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Head>
      <MenuComponent />
      <Container>
        <WhatsApp />
        <Content>
          <UpSide>
            <Left>
              <img src={preventiva[0].imagem} />
              <LeftDown>
              <h1 style={{ color: "#FF5555", fontSize: "1.6rem" }}>{preventiva[0].titulo}</h1>
              <p>{preventiva[0].descricao}</p>
            </LeftDown>
            </Left>
            <Right>
              <h1 style={{
                color: "#FF5555"
              }} >
                Demonstre interesse
              </h1>
              <InputsBox>
                <Input type="text" placeholder="Nome" onChange={(e: any) => setNome(e.target.value)} />
                <Input type="text" placeholder="Email" onChange={(e: any) => setEmail(e.target.value)} />
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '100%'
                }}>
                  <SmallInput type="text" placeholder="Telefone" onChange={(e: any) => setTel(e.target.value)} />
                  <SmallInput type="text" placeholder="Celular" onChange={(e: any) => setCel(e.target.value)} />
                </div>
                <TextArea placeholder="Digite sua mensagem" onChange={(e: any) => setMensagem(e.target.value)}>

                </TextArea>
                <ButtonBlack width="100%" onClick={() => EnviarMensagem()}>Enviar</ButtonBlack>
              </InputsBox>
              <div style={{
                textAlign: 'left',
                width: "100%",
                marginLeft: 25,
                color: "black",
                display: 'flex',
                flexDirection: 'column'
              }}>
                
                <span>Valor: {preventiva[0].preco}</span>
              </div>


            </Right>
          </UpSide>

          <DownSide>
            
          </DownSide>
        </Content>

        <Footer />
      </Container>
    </>
  )
}
