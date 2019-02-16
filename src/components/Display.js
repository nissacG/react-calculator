import React, { Component } from 'react'

class Display extends Component {
  render() {
    return (
      <div className='display'>
        {this.props.display}
      </div>
    )
  }
}

export default Display
