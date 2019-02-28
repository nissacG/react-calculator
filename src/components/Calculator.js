/* eslint-disable no-console */
/* eslint-disable comma-dangle */
import React, { Component } from 'react'
import Display from './Display'
import Button from './Button'

class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      operationalDisplay: '',
      totalDisplay: '',
      result: null,
      equalTriggered: false
    }
  }

  onNumClick = (e) => {
    const { totalDisplay, equalTriggered } = this.state
    const currentDisplay = totalDisplay
    const newFigure = e.target.innerHTML

    this.setState({ equalTriggered: false })

    if (!equalTriggered) {
      this.setState({ totalDisplay: currentDisplay + newFigure }, () => console.log(this.state))
    } else {
      this.setState({ totalDisplay: newFigure }, () => console.log(this.state))
    }
  }

  onMathClick = (e) => {
    const { totalDisplay } = this.state
    const currentDisplay = totalDisplay
    const operator = e.target.innerHTML
    const replace = operator.replace(/×/g, '*').replace(/÷/g, '/');
    if (operator === '=') {
      // eslint-disable-next-line
      let result = JSON.stringify(eval(this.state.totalDisplay))
      this.setState({ totalDisplay: result, equalTriggered: true }, () => console.log(this.state))
    } else {
      this.setState({ totalDisplay: currentDisplay + replace, equalTriggered: false }, () => console.log(this.state))
    }
    console.log(replace)
  }

  render() {
    const { totalDisplay, operationalDisplay } = this.state
    const buttonArr = [
      // fix the first three math functions
      { gridArea: 'ac', label: 'AC', math: true },
      { gridArea: 'plusMinus', label: '+/-', math: true },
      { gridArea: 'percent', label: '%', math: true },
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

    const mathBtns = []
    const numBtns = []
    buttonArr.map((button) => {
      if (button.math) {
        return mathBtns.push(
          <Button
            key={button.gridArea}
            gridArea={button.gridArea}
            label={button.label}
            onClick={this.onMathClick}
            data-value={button.math}
            math
          />
        )
      }
      return numBtns.push(
        <Button
          key={button.gridArea}
          gridArea={button.gridArea}
          label={button.label}
          onClick={this.onNumClick}
        />
      )
    })

    return (
      <div className='container'>
        <Display clsName='totalDisplay' display={totalDisplay || ''} />
        <Display clsName='opDisplay' display={operationalDisplay || ''} />
        {mathBtns}
        {numBtns}
      </div>
    )
  }
}

export default Calculator
