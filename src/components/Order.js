import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TransitionGroup } from 'react-transition-group'

import { formatPrice } from '../helpers'
import OrderItem from '../css/OrderItem'
import OrderItemCount from '../css/OrderItemCount'
import StyledTotal from '../css/StyledTotal'
import Price from '../css/Price'
import StyledPrice from '../css/StyledPrice'

export default class Order extends Component {
  static propTypes = {
    order: PropTypes.object.isRequired, // members are dynamic
    fishes: PropTypes.object.isRequired,
    removeFromOrder: PropTypes.func.isRequired,
  }

  renderOrderItem = key => {
    const fish = this.props.fishes[key]
    const count = this.props.order[key]
    const isAvailable = fish && fish.status === 'available'
    if (!fish) return null
    const price = count * fish.price
    if (!isAvailable) {
      return (
        <OrderItem key={key}>
          Sorry {fish ? fish.name : 'fish'} is no longer available
        </OrderItem>
      )
    }
    return (
      <OrderItem key={key}>
        <span id="item-span">
          <TransitionGroup component="span">
            <OrderItemCount key={count}>{count}</OrderItemCount>
          </TransitionGroup>{' '}
          lbs {fish.name}
        </span>
        <StyledPrice>
          <TransitionGroup component="span">
            <Price key={fish.name + price}>{formatPrice(price)}</Price>
          </TransitionGroup>
        </StyledPrice>
        <button onClick={() => this.props.removeFromOrder(key)}>&times;</button>
      </OrderItem>
    )
  }

  render() {
    const orderIds = Object.keys(this.props.order)
    const total = orderIds.reduce((sum, key) => {
      const fish = this.props.fishes[key]
      const count = this.props.order[key]
      const isAvailable = fish && fish.status === 'available'
      return sum + (isAvailable ? count * fish.price : 0)
    }, 0)

    return (
      <div>
        <h2>Order</h2>
        <TransitionGroup component="ul">
          {orderIds.map(this.renderOrderItem)}
        </TransitionGroup>
        <StyledTotal>
          <TransitionGroup component="span">
            <Price key={'total' + total}>{formatPrice(total)}</Price>
          </TransitionGroup>
        </StyledTotal>
      </div>
    )
  }
}
