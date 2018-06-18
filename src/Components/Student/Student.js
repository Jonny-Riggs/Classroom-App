import React, { Component } from 'react';
import 'bulma/css/bulma.css'

export default class Student extends Component {

  constructor (props) {
    super(props)
    this.uniqueKey = 1
}

  state = {
    firstName: "",
    lastName: "",
    image: ""
  }

  loadStudent = () => {
    fetch("http://localhost:8088/students/1")
    .then(r => r.json())
    .then(student => {
      this.setState(student)
    })
  }


  componentDidMount() {
    this.loadStudent()
  }

    render() {
        return (
            <div className="tile box is-ancestor">
  <div className="tile is-vertical is-6">
    <div className="tile">
      <div className="tile is-parent is-vertical">
        <article className="tile is-child notification is-primary">
          <p className="title">{this.state.firstName}</p>
          <p className="title">{this.state.lastName}</p>
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
            <img src={this.state.image} />
          </figure>
        </article>
      </div>
    </div>
    <div className="tile is-parent">
      <article className="tile is-child notification is-danger">
        <p className="title">Wide tile</p>
        <p className="subtitle">Aligned with the right tile</p>
        <div className="content">
        </div>
      </article>
    </div>
  </div>
  <div className="tile is-parent">
    <article className="tile is-child notification is-success">
      <div className="content">
        <p className="title">Tall tile</p>
        <p className="subtitle">With even more content</p>
        <div className="content">
        </div>
      </div>
    </article>
  </div>
</div>
        )
    }
}