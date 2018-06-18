import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './Components/Nav/NavBar'
import registerServiceWorker from './registerServiceWorker';
import Student from './Components/Student/Student';
import Calendar from './Components/Calendar/Calendar';
import Home from './Components/Home/Home'
import Assignments from './Components/Assignment/Assignments'

ReactDOM.render((
    <Router>
        <div>
            <NavBar/>
            <Route exact path="/Home" component={Home} />
            <Route exact path="/Student" component={Student} />
            <Route exact path="/Calendar" component={Calendar} />
            <Route exact path="/Assignment" component={Assignments} />
        </div>
    </Router>
), document.querySelector("#root"))