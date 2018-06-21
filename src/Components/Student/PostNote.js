import React, { Component } from 'react';
import 'bulma/css/bulma.css';

export default class PostNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
          noteList: []
        };
      }

      loadNotes = () => {
          fetch("http://localhost:8088/notes")
          .then(r => r.json())
          .then(note => {
            this.setState({
                noteList: note
            })
          })
      }

      postNotes = function(response) {
        let newPost = this.state.notes;
        newPost = response;
        this.setState({ notes: newPost });
      }.bind(this);



    render() {
      return (
          <div>
        <input className="button is-info" type="submit" value="Submit" onClick={this.postNote}/>
        </div>
      );
    }
  }