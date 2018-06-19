import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import PostAssign from './PostAssign';

export default class Assignments extends Component {
  constructor() {
    super();
    this.state = {
      assignmentList: [],
      title: '',
      desc: '',
      dueDate: '',
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

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

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
        <footer className="footer">
          <div className="container">
            <div className="content has-text-centered control">
              <input
                value={this.state.title}
                onChange={this.handleFieldChange}
                className="input is-info box"
                type="text"
                placeholder="Title"
                id="title"
              />
              <input
                value={this.state.desc}
                onChange={this.handleFieldChange}
                className="input is-info box"
                type="text"
                placeholder="Description"
                id="desc"
              />
              <input
                value={this.state.dueDate}
                onChange={this.handleFieldChange}
                className="input is-info box"
                type="date"
                placeholder="Due Date"
                id="dueDate"
              />
              <PostAssign state={this.state} />
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
