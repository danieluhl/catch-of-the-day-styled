import React, { Component } from 'react'
import PropTypes from 'prop-types'
import firebase from 'firebase'

import AddFishForm from './AddFishForm'
import EditFishForm from './EditFishForm'
import Login from './Login'
import base, { firebaseApp } from '../base'

export default class Inventory extends Component {
  static propTypes = {
    addFish: PropTypes.func.isRequired,
    updateFish: PropTypes.func.isRequired,
    deleteFish: PropTypes.func.isRequired,
    loadSampleFishes: PropTypes.func.isRequired,
    fishes: PropTypes.object.isRequired,
    storeId: PropTypes.string.isRequired,
  }

  static state = {
    uid: null,
    owner: null,
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authHandler({ user })
      }
    })
  }

  authHandler = async authData => {
    // 1. Look up the current store in the firebase database
    const store = await base.fetch(this.props.storeId, { context: this })
    // 2. Claim it if there is no owner
    if (!store.owner) {
      // save it as our own
      await base.post(`${this.props.storeId}/owner`, {
        data: authData.user.uid,
      })
    }
    // 3. Set the state of the inventory component to reflect the current user
    this.setState({
      uid: authData.user.uid,
      owner: store.owner || authData.user.uid,
    })
  }

  authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]()
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler)
  }

  logUserOut = async () => {
    await firebaseApp.auth().signOut()
    this.setState({ uid: null })
  }

  render() {
    const {
      fishes,
      addFish,
      updateFish,
      deleteFish,
      loadSampleFishes,
    } = this.props
    const logout = <button onClick={this.logUserOut}>Log Out!</button>

    // 1. Check if they are logged in
    if (!this.state || !this.state.uid) {
      return <Login authenticate={this.authenticate} />
    }
    // 2. Check of they are not the owner of the store
    if (this.state.uid !== this.state.owner) {
      return (
        <div>
          <p>Sorry, you are not the owner</p>
          {logout}
        </div>
      )
    }
    // 3. They must be the owner; just render the inventory
    return (
      <div>
        <h2>Inventory</h2>
        {logout}
        {Object.keys(fishes).map(key => (
          <EditFishForm
            key={key}
            index={key}
            fish={fishes[key]}
            updateFish={updateFish}
            deleteFish={deleteFish}
          />
        ))}
        <AddFishForm addFish={addFish} />

        <button onClick={loadSampleFishes}>Load Sample fishes</button>
      </div>
    )
  }
}
