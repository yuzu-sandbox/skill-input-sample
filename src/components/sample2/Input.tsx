import React, { useState } from "react"
import styled from "styled-components"
import { programLanguage, frameworks } from "../../hooks/langhooks"

enum KeyCode {
  Enter = 13,
  Tab = 9
}

const autoCompleteList = [...programLanguage, ...frameworks]

type Props = {
  handler: (selected: string) => void
}
const InputArea: React.FC<Props> = ({ handler }) => {
  const [state, setState] = useState("")
  const changeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value)
  }
  const keydownHandle = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === KeyCode.Enter || e.keyCode === KeyCode.Tab) {
      handler(state)
      setState("")
      return
    }
  }

  return (
    <>
      <Input
        type="text"
        onChange={changeHandle}
        value={state}
        autoComplete="true"
        list="lang"
        onKeyDown={keydownHandle}
      />
      <datalist id="lang">
        {autoCompleteList.map(pl => (
          <option key={pl} value={pl} />
        ))}
      </datalist>
    </>
  )
}

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
`

export default InputArea
