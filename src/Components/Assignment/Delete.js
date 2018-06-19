import React, { Component } from 'react';
import 'bulma/css/bulma.css';

export default class Delete extends Component {
  delete = event => {
    const id = event.target.id.split('__')[1];
    fetch(`http://localhost:8088/assignments/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(r => r.json());
    this.props.deleteAssignment(id);
  };
  render() {
    return (
      <button
        id={'delete__' + this.props.id}
        className="delete"
        aria-label="delete"
        onClick={this.delete}
      />
    );
  }
}
