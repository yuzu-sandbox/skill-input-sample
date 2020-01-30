import React, { useState, useCallback } from "react"
import { programLanguage, frameworks } from "../../hooks/langhooks"
import Container from "../Container"
import styled from "styled-components"

type LangCheckProps = {
  lang: string
  checked: boolean
  changeHandle: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const LabelContainer = styled.label`
  @media (max-width: 560px) {
    width: 50%;
  }
  @media (min-width: 560px) {
    width: ${100 / 6}%;
  }
  margin-bottom: 1rem;
`

const LangCheck: React.FC<LangCheckProps> = React.memo(({ lang, checked, changeHandle }) => {
  return (
    <LabelContainer>
      <input type="checkbox" name={lang} id={lang} onChange={changeHandle} checked={checked} />
      {lang}
    </LabelContainer>
  )
})

const ChackBoxSample: React.FC = () => {
  const [state, setState] = useState<{ [key: string]: boolean }>({})
  const changeHandle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    console.log(name, checked, state)
    setState(state => ({ ...state, [name]: checked }))
  }, [])

  const programBoxs = programLanguage.map(pl => (
    <LangCheck
      key={pl}
      lang={pl}
      checked={Object.prototype.hasOwnProperty.call(state, pl) && state[pl]}
      changeHandle={changeHandle}
    />
  ))

  const frameworkBoxs = frameworks.map(f => (
    <LangCheck
      key={f}
      lang={f}
      checked={Object.prototype.hasOwnProperty.call(state, f) && state[f]}
      changeHandle={changeHandle}
    />
  ))

  return (
    <Container>
      <h1>Pattern 1(checkbox only)</h1>
      <h2>Program Language</h2>
      <Arrange>{programBoxs}</Arrange>
      <h2>Framework</h2>
      <Arrange>{frameworkBoxs}</Arrange>
    </Container>
  )
}

export default ChackBoxSample

const Arrange = styled.div`
  display: flex;
  flex-wrap: wrap;
`
