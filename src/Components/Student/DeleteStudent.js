import React, { Component } from 'react';
import 'bulma/css/bulma.css';

export default class DeleteStudent extends Component {
  DeleteStudent = event => {
    const id = event.target.id.split('__')[1];
    fetch(`http://localhost:8088/students/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(r => r.json());
    this.props.deleteStudent(id);
  };
  render() {
    return (
      <button
        id={'delete__' + this.props.id}
        className="delete is-large"
        aria-label="delete"
        onClick={this.DeleteStudent}
      />
    );
  }
}
