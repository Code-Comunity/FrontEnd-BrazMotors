import React from 'react'
import { InputFilter } from './styleds/Inputs.Styled'

export default function FilterInputsComponent({ }) {
  return (
    <>
      <InputFilter>
        <option value="0">Selecione a Marca</option>
        <option value="1">Volkswagen</option>
      </InputFilter>

      <InputFilter>
        <option value="0">Selecione a Ano</option>
        <option value="1">Volkswagen</option>
      </InputFilter>

      <InputFilter>
      <option value="0">Selecione a Cambios</option>
      <option value="1">Volkswagen</option>
    </InputFilter>

    <InputFilter>
      <option value="0">Selecione a Portas</option>
      <option value="1">Volkswagen</option>
    </InputFilter>

    <InputFilter>
      <option value="0">Selecione a Cores</option>
      <option value="1">Volkswagen</option>
    </InputFilter>
    </>
  )
}
