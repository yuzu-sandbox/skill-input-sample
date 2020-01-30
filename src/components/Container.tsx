import React from "react"
import styled from "styled-components"

const Container: React.FC = ({ children }) => <ContainerBox>{children}</ContainerBox>

const ContainerBox = styled.div`
  height: 85vh;
  width: 100%;
`
export default Container

