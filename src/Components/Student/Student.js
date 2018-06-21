import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import PostNote from './PostNote'

export default class Student extends Component {
  constructor() {
    super();
    this.state = {
      studentList: [],
      notesList: []

    };
  }

  componentDidMount() {
    this.loadStudents();
  }

  loadStudents = () => {
    fetch('http://localhost:8088/students?_embed=notes')
      .then(r => r.json())
      .then(student => {
        this.setState({
          studentList: student,
          notesList: student.notes

        });
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
                    <article className="tile is-child notification has-text-centered is-primary">
                      <p className="title">{s.firstName}</p>
                    </article>
                    <article className="tile is-child notification has-text-centered is-danger">
                      <p className="title">{s.lastName}</p>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child notification is-info">
                      <p className="title">Smile!!</p>
                      <p className="subtitle">Mrs. Riggs Kindergarten Class</p>
                      <figure className="image is-4by3">
                        <img alt="" src={s.image} />
                      </figure>
                    </article>
                  </div>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child notification is-danger">
                    <p className="title">Things to Note!</p>
                    <p className="subtitle"></p>
                    <div className="content" />
                  </article>
                </div>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child notification is-primary">
                  <div className="content">
                    <p className="title">{s.firstName} {s.lastName} Notes</p>
                    <p className="subtitle">Parent/Teacher</p>
                    <div className="content"></div>
                    <div className="control box">
                      <textarea
                        className="textarea is-focused"
                        type="text"
                        placeholder="Teacher Notes"
                      />
                    <PostNote state={this.state} post={this.postNotes}/>
                    </div>
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
