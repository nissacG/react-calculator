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
    let buttonArr = [
      {gridArea: 'ac', label: 'AC'},
      {gridArea: 'plusMinus', label: '+/-'},
      {gridArea: 'nine', label: '9'},
      {gridArea: 'percent', label: '%'},
      {gridArea: 'divide', label: '÷'},
      {gridArea: 'multiply', label: '×'},
      {gridArea: 'minus', label: '-'},
      {gridArea: 'plus', label: '+'},
      {gridArea: 'equal', label: '='},
      {gridArea: 'decimal', label: '.'},
      {gridArea: 'zero', label: '0'},
      {gridArea: 'one', label: '1'},
      {gridArea: 'two', label: '2'},
      {gridArea: 'three', label: '3'},
      {gridArea: 'four', label: '4'},
      {gridArea: 'five', label: '5'},
      {gridArea: 'six', label: '6'},
      {gridArea: 'seven', label: '7'},
      {gridArea: 'eight', label: '8'},
    ]
    let newBtns = buttonArr.map(button => <Button key={button.gridArea} gridArea={button.gridArea} label={button.label}/>)
    return (
      <div className='container'>
        < Display className='display'/>
        {/* Display value={this.state.displayFigure} */}
        {/* Inputs */}
              {/* Buttons - prop with value, prop if number or math*/}
        {/* <div className='display'>01234567890</div> */}
        {/* <div className='btn ac'>AC</div> */}
        {/* <Inputs /> */}
        {newBtns}
      </div>
    )
  }
}

export default Calculator
