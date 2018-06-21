import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import Post from './Post';
import DeleteEvent from './DeleteEvent'

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
  deleteEvent = function(id) {
    const array = this.state.calendarList;
    const index = array.findIndex(item => item.id === id);
    array.splice(index, 1);
    this.setState({ calendarList: array });
  }.bind(this);

  postEvent = function(response) {
    const newArray = this.state.calendarList;
    newArray.push(response);
    this.setState({
      calendarList: newArray,
      date: "",
      location: "",
      event: ""
    });
  }.bind(this);

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
              <p className="subtitle">Where do you want to go?!?</p>
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
                  value={this.state.location}
                  onChange={this.handleFieldChange}
                  id="location"
                  className="input box"
                  type="text"
                  placeholder="LOCATION"
                  />
                <div className="field">
                  <div className="control">
                    <textarea

                      value={this.state.event}
                      onChange={this.handleFieldChange}
                      id="event"
                      className="textarea is-danger box"
                      type="text"
                      placeholder="EVENT"
                    />
                  </div>
                </div>
                <Post state={this.state} post={this.postEvent}/>
              </div>
            </div>
          </article>
          <div>
            {this.state.calendarList.map(e => {
              return (
                <div className="tile is-child" key={e.id}>
                  <article className="message is-info box">
                    <div className="message-header">
                      {e.location} {e.date}
                      <DeleteEvent
                        state={this.state}
                        id={e.id}
                        deleteEvent={this.deleteEvent}
                      />
                    </div>
                    <div className="message-body">{e.event}</div>
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
