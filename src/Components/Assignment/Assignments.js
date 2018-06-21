import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import PostAssign from './PostAssign';
import Delete from './Delete';

export default class Assignments extends Component {
  constructor() {
    super();
    this.state = {
      assignmentList: [],
      title: '',
      desc: '',
      dueDate: '',
    };
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  deleteAssignment = function(id) {
    const array = this.state.assignmentList;
    const index = array.findIndex(item => item.id === id);
    array.splice(index, 1);
    this.setState({ assignmentList: array });
  }.bind(this);

  postAssignment = function(response) {
    const newArray = this.state.assignmentList;
    newArray.push(response);
    this.setState({
    assignmentList: newArray,
    title: "",
    desc: "",
    dueDate: ""
  });
  }.bind(this);

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

    handleFieldChange = function(evt) {
      evt.preventDefault()
      const stateToChange = {};
      stateToChange[evt.target.id] = evt.target.value;
      this.setState(stateToChange);
    }.bind(this)

  render() {
    return (
      <div>
        {this.state.assignmentList.map(a => {
          return (
            <article className="message" key={a.id}>
              <div className="message-header">
                <p>{a.title}</p>
                <Delete
                  state={this.state}
                  id={a.id}
                  deleteAssignment={this.deleteAssignment}
                />
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
              <PostAssign state={this.state} post={this.postAssignment} />
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
