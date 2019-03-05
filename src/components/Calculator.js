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
      })
    } else {
      this.setState({
        operationalDisplay: newFigure,
        operationalSummary: newFigure,
        totalDisplay: '',
        operatorTriggered: false
      })
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
    else if (operator === '=') {
      // eslint-disable-next-line
      let result = JSON.stringify(eval(operationalSummary))
      this.setState({ 
        totalDisplay: result,
        operationalSummary: result,
        equalTriggered: true
      })
    } else {
      this.setState({
        operationalSummary: currentSummary + replaceOperator,
        operationalDisplay: currentDisplay + operator,
        equalTriggered: false,
        operatorTriggered: true
      })
    }
  }

  clearClick = () => {
    this.setState( initialState )
  }

  render() {
    const { totalDisplay, operationalDisplay } = this.state
    const buttonArr = [
      // @@ TOOD - fix the first three math functions below
      // using the refactoring mentioned below, create a clear last 'new' number and then also clear whole state - update button content too depending on which stage at (either C or AC)
      { gridArea: 'ac', label: 'AC', math: 'AC' },
      // refactor to make 'new' set of consecutive numbers and a 'running total', then apply the minus/inverse buttong to the 'new' number(s)
      { gridArea: 'plusMinus', label: '+/-', math: 'invert' },
      // similar to above, use the refactored 'new and 'running total' to then apply the percentage to the 'new' number(s) which then gets actioned to the 'running total'
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
    buttonArr.map(button => {
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
        // remove the 2 cases below once new funcs made
        // eslint-disable-next-line
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
        // case '%':
        //   return buttons.push(
        //     <Button
        //       key={button.gridArea}
        //       gridArea={button.gridArea}
        //       label={button.label}
        //       onClick={this.PercentClick}
        //       math
        //     />
        //   )
        // case 'invert':
        //   return buttons.push(
        //     <Button
        //       key={button.gridArea}
        //       gridArea={button.gridArea}
        //       label={button.label}
        //       onClick={this.InvertClick}
        //       math
        //     />
        //   )
        default: 
          return buttons.push(
            <Button
              key={button.gridArea}
              gridArea={button.gridArea}
              label={button.label}
              onClick={this.onNumClick}
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
