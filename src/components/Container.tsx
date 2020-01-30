import React from "react"
import styled from "styled-components"

const Container: React.FC = ({ children }) => <ContainerBox>{children}</ContainerBox>

const ContainerBox = styled.div`
  width: 100%;
  margin-bottom: 8rem;
`
export default Container

