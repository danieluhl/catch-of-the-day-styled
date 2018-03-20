import React from 'react'
import PropTypes from 'prop-types'

import { StyledHeader, OfThe, Of } from '../css/StyledHeader'

const Header = props => (
  <StyledHeader>
    <h1>
      Catch{' '}
      <OfThe>
        <Of>of</Of>
        <span>the</span>
      </OfThe>Day
    </h1>
    <h3 className="tagline">
      <span>{props.tagline}</span>
    </h3>
  </StyledHeader>
)

Header.propTypes = {
  tagline: PropTypes.string.isRequired,
}

export default Header
