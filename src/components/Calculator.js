/* eslint-disable no-console */
/* eslint-disable comma-dangle */
import React, { Component } from 'react'
import Display from './Display'
import Button from './Button'

const initialState = {
  operationalSummary: '',
  operationalDisplay: '',
  totalDisplay: '',
  result: null,
  equalTriggered: false,
  operatorTriggered: false
}

class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = initialState
  }

  onNumClick = (e) => {
    const { operationalDisplay, operationalSummary, equalTriggered } = this.state
    const currentDisplay = operationalDisplay
    const currentSummary = operationalSummary
    const newFigure = e.target.innerHTML

    this.setState({ equalTriggered: false })

    if (!equalTriggered) {
      this.setState({
        operationalDisplay: currentDisplay + newFigure,
        operationalSummary: currentSummary + newFigure,
        operatorTriggered: false
      }, () => console.log(this.state))
    } else {
      this.setState({
        operationalDisplay: newFigure,
        operationalSummary: newFigure,
        totalDisplay: '',
        operatorTriggered: false
      }, () => console.log(this.state))
    }
  }

  onMathClick = (e) => {
    const { operationalDisplay, operationalSummary, operatorTriggered } = this.state
    const currentDisplay = operationalDisplay
    const currentSummary = operationalSummary
    const operator = e.target.innerHTML
    const replaceOperator = operator.replace(/×/g, '*').replace(/÷/g, '/')
    // prevent multiple operator keys pressed
    if (operatorTriggered) return
    if (operator === '=') {
      // eslint-disable-next-line
      let result = JSON.stringify(eval(operationalSummary))
      this.setState({ 
        totalDisplay: result,
        equalTriggered: true
      }, () => console.log(this.state))
    } else {
      this.setState({
        operationalSummary: currentSummary + replaceOperator,
        operationalDisplay: currentDisplay + operator,
        equalTriggered: false,
        operatorTriggered: true
      }, () => console.log(this.state))
    }
  }

  clearClick = () => {
    this.setState({ initialState })
  }

  render() {
    const { totalDisplay, operationalDisplay } = this.state
    const buttonArr = [
      // @@ TOOD - fix the first three math functions
      { gridArea: 'ac', label: 'AC', math: 'AC' },
      { gridArea: 'plusMinus', label: '+/-', math: 'invert' },
      { gridArea: 'percent', label: '%', math: '%' },
      { gridArea: 'divide', label: '÷', math: '/' },
      { gridArea: 'multiply', label: '×', math: '*' },
      { gridArea: 'minus', label: '-', math: '-' },
      { gridArea: 'plus', label: '+', math: '+' },
      { gridArea: 'equal', label: '=', math: '=' },
      { gridArea: 'decimal', label: '.' },
      { gridArea: 'zero', label: '0' },
      { gridArea: 'one', label: '1' },
      { gridArea: 'two', label: '2' },
      { gridArea: 'three', label: '3' },
      { gridArea: 'four', label: '4' },
      { gridArea: 'five', label: '5' },
      { gridArea: 'six', label: '6' },
      { gridArea: 'seven', label: '7' },
      { gridArea: 'eight', label: '8' },
      { gridArea: 'nine', label: '9' },
    ]

    const buttons = []
    buttonArr.map((button) => {
      switch (button.math) {
        case 'AC':
          return buttons.push(
            <Button
              key={button.gridArea}
              gridArea={button.gridArea}
              label={button.label}
              onClick={this.clearClick}
              math
            />
          )
        case '/':
        case '*':
        case '-':
        case '+':
        case '=':
        case '%':
        case 'invert':
          return buttons.push(
            <Button
              key={button.gridArea}
              gridArea={button.gridArea}
              label={button.label}
              onClick={this.onMathClick}
              math
            />
          )
        default: 
          return buttons.push(
            <Button
              key={button.gridArea}
              gridArea={button.gridArea}
              label={button.label}
              onClick={this.onNumhClick}
            />
          )
      }
    })

    return (
      <div className='container'>
        <Display totalDisplay={totalDisplay || ''} operationalDisplay={operationalDisplay || ''} />
        {/* <Display clsName='opDisplay' display={operationalDisplay || ''} /> */}
        {buttons}
      </div>
    )
  }
}

export default Calculator
