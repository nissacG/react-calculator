import React from 'react'
import PropTypes from 'prop-types'

const Display = ({ display, clsName }) => (
  <div className={clsName}>
    {display}
  </div>
)

Display.propTypes = {
  display: PropTypes.string.isRequired,
}

export default Display
