import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import Post from './Post';

export default class Calendar extends Component {
  constructor() {
    super();
    this.state = {
      calendarList: [],
      date: '',
      location: '',
      event: '',
    };
  }
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch('http://localhost:8088/events')
      .then(r => r.json())
      .then(event => {
        this.setState({ calendarList: event });
      });
  }

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  render() {
    return (
      <div className="tile box is-ancestor">
        <div className="tile is-parent">
          <article className="tile is-child notification is-danger">
            <div className="content">
              <p className="title">Add Event</p>
              <p className="subtitle">With even more content</p>
              <div className="content">
                <input
                  value={this.state.date}
                  onChange={this.handleFieldChange}
                  id="date"
                  className="input box"
                  type="date"
                  placeholder="Rounded input"
                />
                <input
                  value={this.state.event}
                  onChange={this.handleFieldChange}
                  id="location"
                  className="input box"
                  type="text"
                  placeholder="LOCATION"
                />
                <div className="field">
                  <div className="control">
                    <textarea
                      value={this.state.location}
                      onChange={this.handleFieldChange}
                      id="event"
                      className="textarea is-danger box"
                      type="text"
                      placeholder="EVENT"
                    />
                  </div>
                </div>
                <Post state={this.state} />
              </div>
            </div>
          </article>
          <div>
            {this.state.calendarList.map(e => {
              return (
                <div className="tile is-child box" key={e.id}>
                  <article className="message is-info">
                    <div className="message-header">
                      {e.event} {e.date}
                      <a className="delete is-large" />
                    </div>
                    <div className="message-body">{e.location}</div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

//     {this.state.calendarList.map(e => {
//         return (
// <ul key={e.id}>
//   <li>{e.event}</li>
//   <li>{e.location}</li>
//   <li>{e.date}</li>
// </ul>
