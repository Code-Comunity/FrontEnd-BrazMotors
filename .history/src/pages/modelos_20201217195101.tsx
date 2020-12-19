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

import Footer from 

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

        <Footer />
    </>
  )
}
