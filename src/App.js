import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { HashRouter as Router, Route } from "react-router-dom";
import './App.css';

import {
    Home,
    Pgsql
} from "./View";

class App extends Component {
	render() {
		return (
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/pgsql" component={Pgsql} />
                </div>
            </Router>
		);
	}
}

export default App;
