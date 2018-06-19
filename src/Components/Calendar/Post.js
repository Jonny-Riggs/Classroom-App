import React, { Component } from 'react';
import 'bulma/css/bulma.css';

export default class Post extends Component {
  postEvent = text =>
    fetch('http://localhost:8088/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event: this.props.state.event,
        date: this.props.state.location,
        location: this.props.state.date,
      }),
    }).then(r => r.json());
  render() {
    return (
      <a className="button is-success" onClick={this.postEvent}>
        Submit
      </a>
    );
  }
}
