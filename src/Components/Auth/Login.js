import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import NavBar from '../Nav/NavBar';

export default class Login extends Component {
  constructor(){
    super()
    this.state = {
      email: '',
      password: '',
      activeUser: ''
    }
  }

View = () => {
  if (sessionStorage.getItem("teacherId")) {
      return <NavBar />
  } else{
    return <section className="hero is-success is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title has-text-grey">Login</h3>
              <p className="subtitle has-text-grey">Please login to proceed.</p>
              <div className="box">
                <form>
                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-large"
                        type="email"
                        placeholder="Your Email"
                        value={this.state.email}
                        onChange={event => this.setState({email: event.target.value})}
                      />
                    </div>
                  </div>

                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-large"
                        type="password"
                        placeholder="Your Password"
                        value={this.state.password}
                        onChange={event => this.setState({password: event.target.value})}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="checkbox">
                      <input type="checkbox" />
                      Remember me
                    </label>
                  </div>
                  <a className="button is-block is-info is-large is-fullwidth" onClick={this.login}>
                    Login
                  </a>
                </form>
              </div>
              <p className="has-text-grey">
                <a href="../">Sign Up</a> &nbsp;·&nbsp;
                <a href="../">Forgot Password</a> &nbsp;·&nbsp;
                <a href="../">Need Help?</a>
              </p>
            </div>
          </div>
        </div>
      </section>
  }
}

  setActiveUser = (val) => {
    if (val) {
        sessionStorage.setItem("teacherId", val)
    } else {
        sessionStorage.removeItem("teacherId")
    }
    this.setState({
        activeUser: val
    })
}

  login = () => {
    fetch('http://localhost:8088/teachers')
    .then(r => r.json())
    .then(user => {
      if(user.length) {
        this.setActiveUser(user[0].id)
      }
    })
  }
  render() {
    return (
      <div>
        {this.View()}
      </div>
    );
  }
}
