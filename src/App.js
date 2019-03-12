import React from 'react'
import './styles/App.css'
import styled from 'styled-components'
import Calculator from './components/Calculator'

const App = () => (
  <StyledApp className='App'>
    <Calculator />
  </StyledApp>
)

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default App
