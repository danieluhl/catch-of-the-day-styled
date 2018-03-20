import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { formatPrice } from '../helpers'
import { MenuFish } from '../css/MenuFish'

export default class Fish extends Component {
  static propTypes = {
    details: PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      desc: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    }).isRequired,
    addToOrder: PropTypes.func.isRequired,
    index: PropTypes.string.isRequired,
  }
  render() {
    const { image, name, price, desc, status } = this.props.details
    const isAvailable = status === 'available'
    return (
      <MenuFish>
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button
          onClick={() => this.props.addToOrder(this.props.index)}
          disabled={!isAvailable}
        >
          {isAvailable ? 'Add to Order' : 'Sold Out!'}
        </button>
      </MenuFish>
    )
  }
}
