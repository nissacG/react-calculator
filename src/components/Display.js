import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Display = ({ operationalDisplay, totalDisplay }) => (
  <StyledDisplay className='display'>
    <span className='opDisplay' >{operationalDisplay}</span>
    <span className='totalDisplay' >{totalDisplay}</span>
  </StyledDisplay>
)

Display.propTypes = {
  opDisplay: PropTypes.string,
  totalDisplay: PropTypes.string
}

const StyledDisplay = styled.div`
  grid-area: display;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 1.4rem;
  background-color: #009432;
  color: #f5f5f5;
  padding: 2px;
  border-radius: 5px;
  margin-bottom: 5px;
  -webkit-box-shadow: 1px 1px 5px 0px rgba(78, 60, 60, 0.5);
  -moz-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.5);
  box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.5);

  &.opDisplay {
    width: 100%;
    overflow: hidden;
    text-align-last: end;
    white-space: nowrap;
  }

  &.totalDisplay {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align-last: end;
  }
`

export default Display
