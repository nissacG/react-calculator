import React from 'react'
import PropTypes from 'prop-types'

const Display = ({ operationalDisplay, totalDisplay, clsName }) => (
  <div className={clsName}>
    <span className='opDisplay' >{operationalDisplay}</span>
    <span className='totDisplay' >{totalDisplay}</span>
  </div>
)

Display.propTypes = {
  opDisplay: PropTypes.string,
  totalDisplay: PropTypes.string
}

export default Display
