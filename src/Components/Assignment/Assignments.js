import React, { Component } from 'react';
import 'bulma/css/bulma.css';

export default class Assignments extends Component {

    state = {
        title: "",
        desc: "",
        dueDate: "",
        studentId: 0
    }

    loadAssignment = () => {
        fetch("http://localhost:8088/assignments/1")
        .then(r => r.json())
        .then(assign => {
           this.setState(assign)
        })
    }

    componentDidMount() {
        this.loadAssignment()
    }



  render() {
    return (
      <article className="message">
        <div className="message-header">
          <p>{this.state.title}</p>
          <button className="delete" aria-label="delete" />
        </div>
        <div className="message-body">
          <strong>{this.state.desc}</strong><br/>
          <strong>{this.state.dueDate}</strong>
        </div>
      </article>
    );
  }
}
