import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './Components/Nav/NavBar';
import Student from './Components/Student/Student';
import Calendar from './Components/Calendar/Calendar';
import Home from './Components/Home/Home';
import Assignments from './Components/Assignment/Assignments';
import Login from './Components/Auth/Login';

ReactDOM.render(
  <Router>
    <div>
      {/* <NavBar /> */}
      <Login />
      <Route path="/Home" component={Home} />
      <Route path="/Student" component={Student} />
      <Route path="/Calendar" component={Calendar} />
      <Route path="/Assignment" component={Assignments} />
    </div>
  </Router>,
  document.querySelector('#root')
);
