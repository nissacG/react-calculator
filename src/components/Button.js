import React, { Component } from 'react'

class Button extends Component {
  render() {
    let gridArea = this.props.gridArea ? this.props.gridArea : ''
    return (
      <div className={`btn ${gridArea}`}>
        {this.props.label}
      </div>
    )
  }
}

export default Button
