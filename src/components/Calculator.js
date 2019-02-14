import React, { Component } from 'react'
import Display from './Display'
import Inputs from './Inputs'
import Button from './Button'

class Calculator extends Component {
  constructor (props) {
    super(props)

    this.state = {
      displayFigure: 0
    }
  }
  render() {
    let buttonArr = [{gridArea: 'ac', label: 'AC'}, {gridArea: 'plusMinus', label: '+/-'}]
    let newBtns = buttonArr.map(button => <Button gridArea={button.gridArea} label={button.label}/>)
    return (
      <div className='container'>
        < Display className='display'/>
        {/* Display value={this.state.displayFigure} */}
        {/* Inputs */}
              {/* Buttons - prop with value, prop if number or math*/}
        {/* <div className='display'>01234567890</div> */}
        <div className='btn ac'>AC</div>
        {/* <Inputs /> */}
        {newBtns}
      </div>
    )
  }
}

export default Calculator
