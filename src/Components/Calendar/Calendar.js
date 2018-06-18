import React, { Component } from 'react';
import 'bulma/css/bulma.css';

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.uniqueKey = 1;
  }

  state = {
    event: '',
    location: '',
    date: '',
  };

  loadEvents = () => {
    let eventList = [];
    fetch('http://localhost:8088/events/1')
      .then(r => r.json())
      .then(events => {
        this.setState(events);
      });
  };
  componentDidMount() {
    this.loadEvents();
  }

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
                  className="input is-rounded"
                  type="date"
                  placeholder="Rounded input"
                />
                <input
                  className="input is-rounded"
                  type="text"
                  placeholder="LOCATION"
                />
                <div className="field">
                  <div className="control">
                    <textarea
                      className="textarea is-danger"
                      type="text"
                      placeholder="EVENT"
                    />
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div className="tile is-child">
          <article className="tile is-child notification is-danger">
            <div className="content">
              <p className="title">Events</p>
              <p className="subtitle" />
              <div className="content">
                <div>
                  <li>{this.state.event}</li>
                  <li>{this.state.location}</li>
                  <li>{this.state.date}</li>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }
}
