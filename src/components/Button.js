import React from 'react'
import PropTypes from 'prop-types'

const Button = ({
  gridArea, onClick, label, math,
}) => {
  const grid = gridArea || ''
  const mathColor = math ? 'math' : ''
  return (
    <div className={`btn ${grid} ${mathColor}`} onClick={onClick} role='link'>
      {label}
    </div>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  gridArea: PropTypes.string.isRequired,
  math: PropTypes.bool,
  label: PropTypes.string.isRequired,
}

export default Button
