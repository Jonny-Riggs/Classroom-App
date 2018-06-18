import React, { Component } from 'react';
import 'bulma/css/bulma.css'

export default class Calendar extends Component {
    render() {
        return(
    <div className="tile box is-ancestor">
        <div className="tile is-parent">
            <article className="tile is-child notification is-success">
                <div className="content">
                <p className="title">Tall tile</p>
                <p className="subtitle">With even more content</p>
                <div className="content"></div>
                </div>
            </article>
        </div>
        <div className="tile is-child">
        <article className="tile is-child notification is-success">
            <div className="content">
            <p className="title">Tall tile</p>
            <p className="subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <div className="content"></div>
            </div>
        </article>
    </div>
</div>
        )
    }
}