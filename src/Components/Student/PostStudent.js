import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import Student from './Student'

export default class PostStudent extends Component {
  PostStudent = text =>
    fetch('http://localhost:8088/students', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: this.props.state.firstName,
        lastName: this.props.state.lastName,
        image: this.props.state.image,
        notes: this.props.state.notes
      }),
    })
      .then(r => r.json())
      .then(response => this.props.postStudent(response));
  render() {
    return (

        <a className="button is-info" onClick={this.PostStudent}>
          Submit
        </a>
    );
  }
}
