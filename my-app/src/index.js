import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.css';
import Matthew from './Matthew';
import ProjectList from './ProjectList';
import NavBar from "./nav/NavBar";



ReactDOM.render((
    <Router>
        <div>
            <NavBar/>
            <Route exact path="/" component={ProjectList} />
            <Route exact path="/" component={Matthew}/>
        </div>
    </Router>
), document.querySelector("#root"))


