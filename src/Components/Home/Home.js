import React, { Component } from 'react';
import 'bulma/css/bulma.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="tile is-ancestor box">
          <div className="tile is-4 is-vertical is-parent">
            <article className="tile is-child box is-info">
              <p className="title">Hi! My Name Is Mrs. Riggs</p>
              <p>
                At Dan Mills, we are focusing on developing strong literacy and
                numeracy skills; providing an affirming, safe environment for
                children; using data to inform instruction; and implementing
                engaging and challenging enrichment opportunities for all
                students. Our theme is MAKING EACH DAY COUNT. The theme was
                created to hold all stakeholders accountable for the academic
                and social growth we expect daily at our school. Every second of
                every day is focused on promoting success.
              </p>
            </article>
            <div className="tile is-child box">
              <p className="title">Education</p>
              <p>
                Encourage children to talk about reading and writing experiences.
                Provide many opportunities for children to explore and identify
                sound-symbol relationships in meaningful contexts. Help children
                to segment spoken words into individual sounds and blend the
                sounds into whole words (for example, by slowly writing a word
                and saying its sound). Frequently read interesting and
                conceptually rich stories to children. Provide daily
                opportunities for children to write. Help children build a sight
                vocabulary. Create a literacy-rich environment for children to
                engage independently in reading and writing.
              </p>
            </div>
          </div>
          <div className="tile is-child">
            <figure className="image is-1by1">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRljZ4yhHZ0d6KKx6rhNfKRbbAr22603xhN3WvTrpQTQU2WHQMzhA" />
            </figure>
          </div>
          <div className="tile is-parent">
            <div className="tile is-child box">
              <p className="title">What to Expect!</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                semper diam at erat pulvinar, at pulvinar felis blandit.
                Vestibulum volutpat tellus diam, consequat gravida libero
                rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc
                dui porta orci, quis semper odio felis ut quam.
              </p>
              <p>
                Suspendisse varius ligula in molestie lacinia. Maecenas varius
                eget ligula a sagittis. Pellentesque interdum, nisl nec interdum
                maximus, augue diam porttitor lorem, et sollicitudin felis neque
                sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus
                felis hendrerit sit amet. Aenean vitae gravida diam, finibus
                dignissim turpis. Sed eget varius ligula, at volutpat tortor.
              </p>
              <p>
                Integer sollicitudin, tortor a mattis commodo, velit urna
                rhoncus erat, vitae congue lectus dolor consequat libero. Donec
                leo ligula, maximus et pellentesque sed, gravida a metus. Cras
                ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis
                faucibus libero. Quisque non semper leo.
              </p>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="container">
            <div className="content has-text-centered">
              <p>
                <strong>Mrs. Riggs Classroom</strong> by{' '}
                <a href="https://github.com/Jonny-Riggs/Classroom-App">
                  Jonathan Riggs
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
