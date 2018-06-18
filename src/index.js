import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './Components/Nav/NavBar'
import registerServiceWorker from './registerServiceWorker';
import Student from './Components/Student/Student';
import Calendar from './Components/Calendar/Calendar';
import Home from './Components/Home/Home'

ReactDOM.render((
    <Router>
        <div>
            <NavBar/>
            <Route exact path="/Home" component={Home} />
            <Route exact path="/Student" component={Student} />
            <Route exact path="/Calendar" component={Calendar} />
        </div>
    </Router>
), document.querySelector("#root"))