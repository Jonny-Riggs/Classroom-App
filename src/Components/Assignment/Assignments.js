import React, { Component } from 'react';
import 'bulma/css/bulma.css';

export default class Assignments extends Component {
  constructor() {
    super();
    this.state = {
      assignmentList: [],
    };
  }

  componentDidMount() {
    this.loadAssignments();
  }

  loadAssignments() {
    fetch('http://localhost:8088/assignments')
      .then(r => r.json())
      .then(assign => {
        this.setState({ assignmentList: assign });
      });
  }

  render() {
    return (
      <div>
        {this.state.assignmentList.map(a => {
          return (
            <article className="message" key={a.id}>
              <div className="message-header">
                <p>{a.title}</p>
                <button className="delete" aria-label="delete" />
              </div>
              <div className="message-body">
                <strong>{a.desc}</strong>
                <br />
                <strong>{a.dueDate}</strong>
              </div>
            </article>
          );
        })}
      </div>
    );
  }
}
