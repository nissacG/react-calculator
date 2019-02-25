import React from 'react'
import PropTypes from 'prop-types'

const Display = ({ display }) => (
  <div className="display">
    {display}
  </div>
)

Display.propTypes = {
  display: PropTypes.string.isRequired,
}

export default Display
