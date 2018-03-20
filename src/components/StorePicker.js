import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { getFunName } from '../helpers'

const Form = styled.form`
  background: #fff;
  max-width: 500px;
  margin: 50px auto;
  padding: 2rem;
  border: 2px solid #000;
`

const FormInput = styled.input`
  text-align: center;
  font-size: 3rem;
  width: 100%;
`
const FormButton = styled.button`
  width: 100%;
`

class StorePicker extends React.Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  }
  storeNameInput = React.createRef()

  goToStore = e => {
    e.preventDefault()
    console.log('here')
    this.props.history.push(`/store/${this.storeNameInput.value.value}`)
  }

  render() {
    return (
      <Form onSubmit={this.goToStore}>
        <h2>Please Enter a Store</h2>
        <FormInput
          type="text"
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
          ref={this.storeNameInput}
        />
        <FormButton type="submit">Visit Store ➡</FormButton>
      </Form>
    )
  }
}

export default StorePicker
