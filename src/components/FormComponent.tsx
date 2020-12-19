import React, { useEffect, useState, useContext } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import MenuComponent from './MenuComponent';
import WhatsApp from './WhatsApp';
import { Form, InputForm, TextAreaForm, BoxesForm } from './styleds/FormComponents';

import { ButtonBlack } from './styleds/Buttons.Styled'

export function FormComponent() {
  return (
      <Form>
        <BoxesForm>
        <span>Nome</span>
        <InputForm id="nome" type="text" />
        </BoxesForm>

        <BoxesForm>
        <span>E-mail</span>
        <InputForm id="tel" type="text" />
        </BoxesForm>

        <BoxesForm>
        <span>Telefone</span>
        <InputForm id="tel" type="tel" />
        </BoxesForm>

        <BoxesForm>
        <span>Mensagem</span>
        <TextAreaForm >
        </TextAreaForm>
        </BoxesForm>

        <ButtonBlack>
          Enviar
        </ButtonBlack>
      </Form>
  )
}
