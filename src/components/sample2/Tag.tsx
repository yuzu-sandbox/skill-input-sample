import React, { useCallback } from "react"
import styled from "styled-components"

type Props = {
  value: string
  deleteHandler: (v: string) => void
}

const Tag: React.FC<Props> = ({ value, deleteHandler }) => {
  const onClick = useCallback(() => {
    deleteHandler(value)
  }, [deleteHandler, value])
  return (
    <TagBox>
      {value}
      <TagCloseButton onClick={onClick}>☓</TagCloseButton>
    </TagBox>
  )
}

const TagBox = styled.span`
  background-color: #00c;
  color: white;
  padding: .5rem 1rem;
  margin: 0 .5rem .5rem 0;
`

const TagCloseButton = styled.span`
  margin-left: 1rem;
  cursor: pointer;
`

export default Tag
