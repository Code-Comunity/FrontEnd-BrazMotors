import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Container, CardCarro, TodosOsCarros } from '../../../components/styleds/Modelos.Styled'


export default function Carros({ carros }){

    const { isFallback } = useRouter()

    if(isFallback){return <h1>carregando...</h1>}

    return(
      <Container>
        <TodosOsCarros>
          {carros.map( (e: any) =>{
            return(
                  <Link href="/car/[id]" as={`/car/${e.id}`}>
                    <CardCarro key={e.id}>
                                <img src={e.imagem} alt="carro"/>
                                <span>{e.nome}</span>
                        </CardCarro>
                  </Link>
                )
              }) }
          </TodosOsCarros>
      </Container>
    )
    
}

export const getStaticPaths: GetStaticPaths  = async () => {
    const response = await fetch(`https://teste-brazmotors.herokuapp.com/carros`)
    const data = await response.json()

    const paths = data.map((post: { _id: any }) => ({ params: { id: post._id }, }))

    return { paths, fallback: true }
}



 export const getStaticProps: GetStaticProps = async (context) => {

    const id:any = context.params.id
    
    const response = await fetch(`https://teste-brazmotors.herokuapp.com/marcas/modelos/${id}`)
    const data = await response.json();

    return { props: { carros: data }, revalidate: 10 }
 }