import React, { Component } from 'react';
import 'bulma/css/bulma.css';

export default class DeleteEvent extends Component {
  DeleteEvent = event => {
    const id = event.target.id.split('__')[1];
    fetch(`http://localhost:8088/events/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(r => r.json());
    this.props.deleteEvent(id);
  };
  render() {
    return (
      <button
        id={'delete__' + this.props.id}
        className="delete"
        aria-label="delete"
        onClick={this.DeleteEvent}
      />
    );
  }
}
