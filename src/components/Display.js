import React from 'react'
import PropTypes from 'prop-types'

const Display = ({ operationalDisplay, totalDisplay }) => (
  <div className='display'>
    <span className='opDisplay' >{operationalDisplay}</span>
    <span className='totalDisplay' >{totalDisplay}</span>
  </div>
)

Display.propTypes = {
  opDisplay: PropTypes.string,
  totalDisplay: PropTypes.string
}

export default Display
