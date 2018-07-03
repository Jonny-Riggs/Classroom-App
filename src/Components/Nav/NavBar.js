import React, { Component } from 'react';
import { Link } from "react-router-dom";
import 'bulma/css/bulma.css'
import Login from '../Auth/Login'

export default class NavBar extends Component {
  render() {
    return(
      <div>
            <section className="hero is-info">
  <div className="hero-body">
    <div className="container">
      <h1 className="title">
        Dan Mills Elementary
      </h1>
      <h2 className="subtitle">
        Mrs. Riggs Classroom
      </h2>
    </div>
  </div>
  <div className="tabs is-left">
  <ul>
    {/* <li className="is-active">Login</li> */}
  </ul>
  </div>
  <div className="tabs is-right">
  <ul>
    <li className="is-active"><Link to="/Home">Home</Link></li>
    <li><Link to="/Student">Students</Link></li>
    <li><Link to="/Calendar">Calendar</Link></li>
    <li><Link to="/Assignment">Assignments</Link></li>
    <li><Link to="/">Logout</Link></li>
  </ul>
</div>
</section>
</div>
        )
    }
}