import React, { Component } from 'react'

class Button extends Component {
  render() {
    let gridArea = this.props.gridArea ? this.props.gridArea : ''
    let mathColor = this.props.math ? 'math' : ''
    return (
      <div className={`btn ${gridArea} ${mathColor}`} onClick={this.props.onClick}>
        {this.props.label}
      </div>
    )
  }
}

export default Button
