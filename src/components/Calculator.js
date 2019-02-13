import React, { Component } from 'react'

class Calculator extends Component {
  constructor (props) {
    super(props)

    this.state = {
      displayFigure: 0
    }
  }
  render() {
    return (
      <div className='container'>
        {/* Display value={this.state.displayFigure} */}
        {/* Inputs */}
              {/* Buttons - prop with value, prop if number or math*/}
        <div className='display'>01234567890</div>
        <div className='btn ac'>AC</div>
      </div>
    )
  }
}

export default Calculator
