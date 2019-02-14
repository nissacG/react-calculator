import React, { Component } from 'react'
import Button from './Button'

class Inputs extends Component {
  render() {
    let buttonArr = ['ac', 'plusMinus', 'percent', 'divide', 'multiply', 'minus', 'plus', 'equal', 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' ]
    let newBtns = buttonArr.map(button => <Button gridArea={button}/>)
    return (
      <div>
        {newBtns}
{/*         
        <Button gridArea ='plusMinus'/>
        <Button gridArea ='percent'/>
        <Button gridArea ='divide'/>
        <Button gridArea ='seven'/>
        <Button gridArea ='eight'/>
        <Button gridArea ='nine'/>
        <Button gridArea ='multiply'/>
        <Button gridArea ='four'/>
        <Button gridArea ='five'/>
        <Button gridArea ='plusMinus'/> */}

      </div>
    )
  }
}

export default Inputs
