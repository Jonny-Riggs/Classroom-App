import React, { Component } from 'react';
import 'bulma/css/bulma.css';

export default class Student extends Component {
  constructor() {
    super();
    this.state = {
      studentList: [],
    };
  }

  componentDidMount() {
    this.loadStudents();
  }

  loadStudents = () => {
    fetch('http://localhost:8088/students')
      .then(r => r.json())
      .then(student => {
        this.setState({ studentList: student });
      });
  };

  render() {
    return (
      <div>
        {this.state.studentList.map(s => {
          return (
            <div className="tile box is-ancestor" key={s.id}>
              <div className="tile is-vertical is-6">
                <div className="tile">
                  <div className="tile is-parent is-vertical">
                    <article className="tile is-child notification is-primary">
                      <p className="title">{s.firstName}</p>
                      <p className="title">{s.lastName}</p>
                    </article>
                    <article className="tile is-child notification is-warning">
                      <p className="title">...tiles</p>
                      <p className="subtitle">Bottom tile</p>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child notification is-info">
                      <p className="title">Middle tile</p>
                      <p className="subtitle">With an image</p>
                      <figure className="image is-4by3">
                        <img alt="" src={s.image} />
                      </figure>
                    </article>
                  </div>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child notification is-danger">
                    <p className="title">Wide tile</p>
                    <p className="subtitle">Aligned with the right tile</p>
                    <div className="content" />
                  </article>
                </div>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child notification is-success">
                  <div className="content">
                    <p className="title">Tall tile</p>
                    <p className="subtitle">With even more content</p>
                    <div className="content" />
                  </div>
                </article>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
