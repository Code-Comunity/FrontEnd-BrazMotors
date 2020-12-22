import React, { useEffect } from "react"
import Head from "next/head"
import Link from "next/link"
import Image from 'next/image'

import MenuComponent from '../components/MenuComponent'

import {
  Container,
  Header,
  FirstSection,
  SecondSection,
  CentralizeText,
  ItemsFooter,
} from "../components/styleds/Layout.Styled";

import {
  FilterPart,
  CarsComponents,
  CarModels
} from "../components/styleds/ModelsCar.Styled"

import { Card,CardImage,CardInfo } from '../components/styleds/CardComponents.Styled'
import { CardsHome } from "./api/fakeApi"
import { InputFilter } from "../components/styleds/Inputs.Styled"
import FilterInputsComponent from "../components/FilterInputsComponent"
import { IoCall, IoLocationSharp, IoMailSharp } from "react-icons/io5"

export default function Modelos() {
  return (
    <>
      <Head>
        <title>Modelos</title>
      </Head>
      <MenuComponent />
      <Container>
        <FirstSection>
          <h2>Veiculos feitos para você, em preço acessivel</h2>
        </FirstSection>
        <CarModels>
          <FilterPart>
            <h2>Filtra</h2>

            <FilterInputsComponent />
          </FilterPart>
          <CarsComponents>
          {CardsHome.map(
            (e): JSX.Element => (
              <Link href={`${e.id}`}>
              <Card key={e.id}>
                <CardImage uri={e.img} />
                <CardInfo>
                  <h4>{e.titulo}</h4>
                  <h5>{e.preço.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h5>
                </CardInfo>
              </Card>
              </Link>
            )
          )}
          </CarsComponents>
        </CarModels>

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
