import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Input = styled.input`
  display: none;
:checked + label {
  background: #fff;
  color: #000;
`
const Label = styled.label`
  position: absolute;
  top: 1rem;
  left: 1rem;
  text-transform: uppercase;
  font-size: 1.3rem;
  background: #fff;
  color: #800;
  border: 2px solid #000;
  cursor: pointer;
  padding: 0.5rem 1rem;
`

export default class FoldButton extends Component {
  static propTypes = {
    handleClick: PropTypes.func.isRequired,
  }

  render() {
    return (
      <Fragment>
        <Input
          type="checkbox"
          id="fold"
          onClick={e => this.props.handleClick(e)}
        />
        <Label htmlFor="fold">Fold</Label>
      </Fragment>
    )
  }
}
