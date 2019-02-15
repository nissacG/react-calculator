import React, { Component } from 'react'
import Display from './Display'
// import Inputs from './Inputs'
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
      {gridArea: 'ac', label: 'AC', math: true},
      {gridArea: 'plusMinus', label: '+/-', math: true},
      {gridArea: 'nine', label: '9'},
      {gridArea: 'percent', label: '%', math: true},
      {gridArea: 'divide', label: '÷', math: true},
      {gridArea: 'multiply', label: '×', math: true},
      {gridArea: 'minus', label: '-', math: true},
      {gridArea: 'plus', label: '+', math: true},
      {gridArea: 'equal', label: '=', math: true},
      {gridArea: 'decimal', label: '.', math: true},
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
    let mathBtns = buttonArr.filter(button => button.math).map(button => <Button key={button.gridArea} gridArea={button.gridArea} label={button.label} math />)
    let numBtns = buttonArr.filter(button => !button.math).map(button => <Button key={button.gridArea} gridArea={button.gridArea} label={button.label} />)
    return (
      <div className='container'>
        < Display className='display'/>
        {/* Display value={this.state.displayFigure} */}
        {/* Inputs */}
              {/* Buttons - prop with value, prop if number or math*/}
        {/* <div className='display'>01234567890</div> */}
        {/* <div className='btn ac'>AC</div> */}
        {/* <Inputs /> */}
        {mathBtns}
        {numBtns}
      </div>
    )
  }
}

export default Calculator
