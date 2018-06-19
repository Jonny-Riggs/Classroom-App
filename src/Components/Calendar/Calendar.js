import React, { Component } from 'react';
import 'bulma/css/bulma.css';

export default class Calendar extends Component {
  constructor () {
    super()
    this.state = {
      calendarList: []
    }
}
componentDidMount(){
  this.fetchData()
}

fetchData(){
  fetch("http://localhost:8088/events")
  .then(r => r.json())
  .then(event => {
    this.setState({calendarList: event})
  })
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
                  className="input"
                  type="date"
                  placeholder="Rounded input"
                />
                <input
                  className="input"
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
                {this.state.calendarList.map(e => {
                  return <ul key={e.id}>
                    <li>{e.event}</li>
                    <li>{e.location}</li>
                    <li>{e.date}</li>
                  </ul>
                })}
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }
}
