import React, { Component } from 'react';
import 'bulma/css/bulma.css';

export default class PostAssign extends Component {
  postAssign = text =>
    fetch('http://localhost:8088/assignments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: this.props.state.title,
        desc: this.props.state.desc,
        dueDate: this.props.state.dueDate,
      }),
    })
      .then(r => r.json())
      .then(response => this.props.post(response));
  render() {
    return (
      <a className="button is-info" onClick={this.postAssign}>
        Submit
      </a>
    );
  }
}
