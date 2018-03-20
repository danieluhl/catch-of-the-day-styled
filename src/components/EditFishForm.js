import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { StyledEditFishForm } from '../css/StyledEditFishForm'

export default class EditFishForm extends Component {
  static propTypes = {
    fish: PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      desc: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    }).isRequired,
    updateFish: PropTypes.func.isRequired,
    deleteFish: PropTypes.func.isRequired,
    index: PropTypes.string.isRequired,
  }

  handleChange = e => {
    let { name, value } = e.currentTarget
    if (e.currentTarget.type === 'number') {
      value = parseFloat(value)
    }
    const updatedFish = {
      ...this.props.fish,
      [name]: value,
    }
    this.props.updateFish(this.props.index, updatedFish)
  }

  render() {
    const fish = this.props.fish
    return (
      <StyledEditFishForm>
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={fish.name}
        />
        <input
          type="number"
          name="price"
          onChange={this.handleChange}
          value={fish.price}
        />
        <select name="status" onChange={this.handleChange} value={fish.status}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          name="desc"
          onChange={this.handleChange}
          type="text"
          value={fish.desc}
        />
        <input
          type="text"
          name="image"
          onChange={this.handleChange}
          value={fish.image}
        />
        <button onClick={() => this.props.deleteFish(this.props.index)}>
          Remove from Inventory
        </button>
      </StyledEditFishForm>
    )
  }
}
