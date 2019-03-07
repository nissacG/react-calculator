import React, { Component } from 'react'
import styled from 'styled-components'
import Display from './Display'
import Button from './Button'

const initialState = {
  operationalSummary: '',
  runningNumSummary: '',
  operationalDisplay: '',
  totalDisplay: '',
  result: null,
  equalTriggered: false,
  operatorTriggered: false,
  invertTriggered: false
}

class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = initialState
  }

  onNumClick = (e) => {
    const { runningNumSummary, operationalDisplay, operationalSummary, equalTriggered, invertTriggered } = this.state
    const currentDisplay = operationalDisplay
    const currentSummary = operationalSummary
    const newFigure = e.target.innerHTML

    this.setState({ equalTriggered: false })

    if (!equalTriggered) {
      this.setState({
        runningNumSummary: runningNumSummary + newFigure,
        operationalDisplay: currentDisplay + newFigure,
        operationalSummary: currentSummary + newFigure,
        operatorTriggered: false,
        totalDisplay: ''
      }, () => console.log(this.state))
    } else if (invertTriggered) {
      this.setState({
        runningNumSummary: newFigure,
        operationalDisplay: runningNumSummary,
        totalDisplay: '',
        operatorTriggered: false
      }, () => console.log(this.state))
    } else {
      this.setState({
        runningNumSummary: newFigure,
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
        operationalSummary: result,
        runningNumSummary: result,
        equalTriggered: true
      }, () => console.log(this.state))
    } else {
      this.setState({
        operationalSummary: currentSummary + replaceOperator,
        operationalDisplay: currentDisplay + operator,
        runningNumSummary: '',
        totalDisplay: '',
        equalTriggered: false,
        operatorTriggered: true
      }, () => console.log(this.state))
    }
  }

  InvertClick = () => {
    const { runningNumSummary } = this.state
    console.log((Math.sign(runningNumSummary) === 1), runningNumSummary)
    if (Math.sign(runningNumSummary) === 1) {
      const newRunningNumSummary = runningNumSummary * -1
      this.setState({
        runningNumSummary: newRunningNumSummary,
        operationalSummary: newRunningNumSummary,
        operationalDisplay: newRunningNumSummary,
        invertTriggered: true
      })
      console.log(newRunningNumSummary)
    } else {
      const newRunningNumSummary = Math.abs(runningNumSummary)
      this.setState({
        runningNumSummary: newRunningNumSummary,
        operationalSummary: newRunningNumSummary,
        operationalDisplay: newRunningNumSummary,
        invertTriggered: true
      })
      console.log(Math.abs(newRunningNumSummary))
    }
  }

  PercentClick = () => {

  }

  clearClick = () => {
    this.setState(initialState)
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
        // remove the % case below once new func made
        // eslint-disable-next-line
        case '%':
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
        case 'invert':
          return buttons.push(
            <Button
              key={button.gridArea}
              gridArea={button.gridArea}
              label={button.label}
              onClick={this.InvertClick}
              math
            />
          )
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
      <StyledCalculator className='container'>
        <Display totalDisplay={totalDisplay || ''} operationalDisplay={operationalDisplay || ''} />
        {/* <Display clsName='opDisplay' display={operationalDisplay || ''} /> */}
        {buttons}
      </StyledCalculator>
    )
  }
}

const StyledCalculator = styled.div`
  height: 400px;
  width: 260px;
  background-color: darkgray;
  padding: 20px;
  border-radius: 5px;
  margin-top: 20px;
  -webkit-box-shadow: 3px 3px 7px 0px rgba(78, 60, 60, 0.5);
  -moz-box-shadow: 3px 3px 7px 0px rgba(0,0,0,0.5);
  box-shadow: 3px 3px 7px 0px rgba(0,0,0,0.5);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas: 
    'display display display display'
    'ac plusMinus percent divide'
    'seven eight nine multiply'
    'four five six minus'
    'one two three plus'
    'zero zero decimal equal'
`

export default Calculator
