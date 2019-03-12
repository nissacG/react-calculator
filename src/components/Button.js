import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Button = ({ gridArea, onClick, label, math }) => {
  const grid = gridArea || ''
  const mathColor = math ? 'math' : ''
  return (
    <StyledButton
      className={`btn ${mathColor} ${grid}`}
      onClick={onClick}
      role='link'
    >
      {label}
    </StyledButton>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  gridArea: PropTypes.string.isRequired,
  math: PropTypes.bool,
  label: PropTypes.string.isRequired
}

const StyledButton = styled.div`
  border-radius: 50%;
  background-color: lightgray;
  margin: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  -webkit-box-shadow: 1px 1px 5px 0px rgba(78, 60, 60, 0.5);
  -moz-box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.5);
  transition: box-shadow 3s ease-in-out;

  &:active {
    -webkit-box-shadow: inset 1px 1px 5px 0px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: inset 1px 1px 5px 0px rgba(0, 0, 0, 0.5);
    box-shadow: inset 1px 1px 5px 0px rgba(0, 0, 0, 0.5);
  }

  &.math {
    background-color: #f79f1f;
  }

  &.zero {
    grid-area: zero;
    border-radius: 10px;
    margin: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
    -webkit-box-shadow: 1px 1px 5px 0px rgba(78, 60, 60, 0.5);
    -moz-box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.5);
    box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.5);
    transition: box-shadow 3s ease-in-out;
  }
`

export default Button
