import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import DeleteStudent from './DeleteStudent';
import PostStudent from './PostStudent';

export default class Student extends Component {
  constructor() {
    super();
    this.state = {
      studentList: [],
      firstName: '',
      lastName: '',
      image: '',
      notes: '',
    };
  }

  componentDidMount() {
    this.loadStudents();
  }

  loadStudents = () => {
    fetch('http://localhost:8088/students')
      .then(r => r.json())
      .then(student => {
        this.setState({
          studentList: student,
        });
      });
  };

  deleteStudent = function(id) {
    const array = this.state.studentList;
    const index = array.findIndex(item => item.id === parseInt(id, 10));
    array.splice(index, 1);
    this.setState({ studentList: array });
  }.bind(this);

  postStudent = function(response) {
    const newArray = this.state.studentList;
    newArray.push(response);
    this.setState({
      studentList: newArray,
      firstName: '',
      lastName: '',
      image: '',
      notes: '',
    });
  }.bind(this);

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  render() {
    return (
      <div>
        <div className="tile is-parent is-vertical">
          <article className="tile is-child notification has-text-centered is-danger">
            <p className="title">ADD STUDENT</p>
            <div className="field">
              <div className="control">
                <input
                  value={this.state.firstName}
                  onChange={this.handleFieldChange}
                  id="firstName"
                  className="input is-info"
                  type="text"
                  placeholder="First Name"
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input
                  value={this.state.lastName}
                  onChange={this.handleFieldChange}
                  id="lastName"
                  className="input is-info"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input
                  value={this.state.image}
                  onChange={this.handleFieldChange}
                  id="image"
                  className="input is-info"
                  type="text"
                  placeholder="Image URL"
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <textarea
                  value={this.state.notes}
                  onChange={this.handleFieldChange}
                  id="notes"
                  className="textarea is-focused"
                  type="text"
                  placeholder="Teacher Notes"
                />
              </div>
            </div>
            <PostStudent state={this.state} postStudent={this.postStudent} />
          </article>
        </div>
        <div>
          {this.state.studentList.map((s, index) => {
            return (
              <div className="tile box is-ancestor" key={index}>
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
                      <article className="tile is-child notification has-text-centered is-info">
                        <p className="title">Smile!!</p>
                        <p className="subtitle">
                          Mrs. Riggs Kindergarten Class
                        </p>
                        <figure className="image is-4by3">
                          <img alt="" src={s.image} />
                        </figure>
                      </article>
                    </div>
                  </div>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child has-text-centered notification is-primary">
                    <div className="content">
                      <p className="title">
                        {s.firstName} {s.lastName} Notes
                      </p>
                      <p className="subtitle">Parent/Teacher</p>
                      <div className="content" />
                      {s.notes}
                    </div>
                  </article>
                  <DeleteStudent
                    state={this.state}
                    id={s.id}
                    deleteStudent={this.deleteStudent}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
