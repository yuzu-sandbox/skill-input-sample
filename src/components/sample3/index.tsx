import React, { useState, useCallback, useRef } from "react"
import Container from "../Container"
import styled from "styled-components"
import { programLanguage, frameworks } from "../../hooks/langhooks"

const chiceList = [...programLanguage, ...frameworks]

const Sample3: React.FC = () => {
  const [tags, addTag, deleteTag] = useTag()
  const [text, setText] = useState("")
  const changeHandle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }, [])
  const onKeyDownHandle = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.keyCode === 13) {
        addTag(text)
        setText("")
      }
    },
    [text]
  )

  const ref = useRef<HTMLInputElement>(null)
  const activeHandle = () => {
    ref.current?.focus()
  }

  return (
    <Container>
      <h1>sample3(embed input)</h1>
      <TextBox onClick={activeHandle}>
        {tags.map(t => (
          <Tag>
            {t}
            <CloseButton
              onClick={() => {
                deleteTag(t)
              }}
            >
              ☓
            </CloseButton>
          </Tag>
        ))}
        <Input
          type="text"
          value={text}
          onChange={changeHandle}
          onKeyDown={onKeyDownHandle}
          ref={ref}
          autoFocus={false}
          list="sample3list"
        />
        <datalist id="sample3list">
          {chiceList.map(v => (
            <option key={v}>{v}</option>
          ))}
        </datalist>
      </TextBox>
    </Container>
  )
}

export default Sample3

const TextBox = styled.div`
  border: 1px solid #333;
  cursor: text;
`
const Tag = styled.span`
  background-color: #0000c5;
  color: white;
  margin-right: 0.5rem;
`
const CloseButton = styled.span`
  margin-left: 0.5rem;
  cursor: pointer;
`
const Input = styled.input`
  border: none;
  box-shadow: none;
  outline: 0;
  /* width: 100%; */
  padding: 0.5rem;
`

function useTag(): [string[], (val: string) => void, (val: string) => void] {
  const [state, setState] = useState<string[]>([])

  const addTag = useCallback(
    (val: string) => {
      if (!state.some(tag => tag === val)) {
        setState([...state, val])
      }
    },
    [state]
  )

  const deleteTag = useCallback((val: string) => {
    setState(state => state.filter(tag => tag !== val))
  }, [])

  return [state, addTag, deleteTag]
}
