import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import NavBar from '../Nav/NavBar';
import Auth from './Auth0'


export default class Login extends Component {


render() {
  const { isAuthenticated } = this.props.auth;
  return(
    <div>WOOOOO</div>
  )
  }
}