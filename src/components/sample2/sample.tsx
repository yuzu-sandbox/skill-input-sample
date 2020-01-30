import React, { useState, useCallback } from "react"
import Container from "../Container"
import Input from "./Input"
import TagComponent from "./Tag"
import styled from "styled-components"

type Tag = {
  name: string
}

const TextAndTag: React.FC = () => {
  const [state, setState] = useState<Tag[]>([{ name: "Scala" }, { name: "JavaScript" }])
  
  const handle = useCallback((lang: string) => {
    if (!state.find(l => l.name === lang)) {
      setState(state => [...state, { name: lang }])
    }
  }, [])

  const deleteHandle = (lang: string) => {
    setState(state.filter(l => l.name !== lang))
  }

  return (
    <Container>
      <h1>Patter2(text and tag)</h1>
      <Input handler={handle} />
      <TagArea>
        {state.map(tag => (
          <TagComponent key={tag.name} deleteHandler={deleteHandle} value={tag.name} />
        ))}
      </TagArea>
    </Container>
  )
}

export default TextAndTag

const TagArea = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
`
