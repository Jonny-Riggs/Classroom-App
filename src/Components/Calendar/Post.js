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
        date: this.props.state.date,
        location: this.props.state.location,
      }),
    }).then(r => r.json()).then(response => this.props.post(response));
  render() {
    return (
      <a className="button is-info" onClick={this.postEvent}>
        Submit
      </a>
    );
  }
}
