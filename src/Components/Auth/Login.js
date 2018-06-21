import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import NavBar from '../Nav/NavBar';

export default class Login extends Component {

    constructor(){
        super()
        this.state = {
            email: "",
            password: ""
        }
        // this.handleFieldChange = this.handleFieldChange.bind(this);
    }
    handleFieldChange = function (evt) {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }.bind(this)

    // Handle for login submit
    handleLogin = function (e) {
        // e.preventDefault()

        // Determine if a user already exists in API
        fetch(`http://localhost:8088/teachers?email=${this.state.email}`)
            .then(r => r.json())
            .then(user => {
                debugger
                // User exists. Set local storage, and show home view
                if (user.length) {
                    if(this.state.password === user.password){
                        localStorage.setItem("teacher", user.id)
                        console.log("Logged in")
                    }

                // User doesn't exist
                }

            })
    }.bind(this)


  render() {
    return (
      <section className="hero is-success is-fullheight">
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
                        id="email"
                        value={this.state.email}
                        onChange={this.handleFieldChange}
                        className="input is-large"
                        type="email"
                        placeholder="Your Email"
                        autoFocus=""
                      />
                    </div>
                  </div>

                  <div className="field">
                    <div className="control">
                      <input
                        id="password"
                        value={this.state.password}
                        onChange={this.handleFieldChange}
                        className="input is-large"
                        type="password"
                        placeholder="Your Password"
                      />
                    </div>
                    <input onClick={this.handleLogin} id="loginq" type="button" className="button is-block is-info is-large is-fullwidth" value="Log In"/>
                  </div>
                  <div className="field">
                    <label className="checkbox">
                      <input type="checkbox" />
                      Remember me
                    </label>
                  </div>
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
    );
  }
}
