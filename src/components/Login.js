import React from 'react'
import PropTypes from 'prop-types'

import {
  GithubButton,
  TwitterButton,
  FacebookButton,
} from '../css/SigninButtons'

const Login = props => (
  <nav className="login">
    <h2>Inventory Login</h2>
    <p>Sign in to manage your store&apos;s inventory.</p>
    <GithubButton onClick={() => props.authenticate('Github')}>
      Login with Github
    </GithubButton>
    <TwitterButton onClick={() => props.authenticate('Twitter')}>
      Login with Twitter
    </TwitterButton>
    <FacebookButton onClick={() => props.authenticate('Facebook')}>
      Login with Facebook
    </FacebookButton>
  </nav>
)

Login.propTypes = {
  authenticate: PropTypes.func.isRequired,
}

export default Login
