import React from "react"

import GlobalStyle from './components/shared/GlobalStyle'
import CheckBoxSample from "./components/sample1/SampleCheckbox"
import Sample2 from "./components/sample2/sample"
import Sample3 from './components/sample3/index'

const App: React.FC = () => {
  return (
    <>
    <GlobalStyle/>
      <CheckBoxSample />
      <Sample2 />
      <Sample3 />
    </>
  )
}

export default App
