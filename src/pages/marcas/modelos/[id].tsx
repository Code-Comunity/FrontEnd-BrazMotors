import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Container, CardCarro, TodosOsCarros, CardCarroHover } from '../../../components/styleds/Modelos.Styled'
import MenuComponent from "../../../components/MenuComponent";

export default function Carros({ carros }) {
  console.log(carros)

  const { isFallback } = useRouter()

  if (isFallback) { return <h1>carregando...</h1> }

  return (
    <>
      <MenuComponent />
    <Container>
         <div>
          <h1 style={{marginTop:"150px", fontSize: '1.9rem', color: '#FF5555'}} >Carros</h1>
          <hr style={{ width: "100px", marginTop: "5px", border: "2px solid #FF5555", color: '#FF5555', marginBottom: "20px" }}></hr>
        </div> 

      <TodosOsCarros>

        {carros.map((e: any) => {
          return (
            <>
              <Link href="/car/[id]" as={`/car/${e.id}`}>
                <CardCarro key={e.id} style={{ backgroundImage: `url(${e.imagem})` }}>
                  {/* <img src={e.imagem} alt="carro"/> */}

                  <CardCarroHover>
                    <h1>{e.nome}</h1>
                    <h2>{e.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h2>
                  </CardCarroHover>
                </CardCarro>
              </Link>
            </>
          )
        })}
      </TodosOsCarros>
    </Container>
    </>
  )

}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`https://teste-brazmotors.herokuapp.com/carros`)
  const data = await response.json()

  const paths = data.map((post: { _id: any }) => ({ params: { id: post._id }, }))

  return { paths, fallback: true }
}



export const getStaticProps: GetStaticProps = async (context) => {

  const id: any = context.params.id

  const response = await fetch(`https://teste-brazmotors.herokuapp.com/marcas/modelos/${id}`)
  const data = await response.json();

  return { props: { carros: data }, revalidate: 10 }
}