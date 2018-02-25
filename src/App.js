import React, { Component } from 'react';
import Profile from './Containers/Profile'
import Search from './Containers/Search'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/" component={Search} />
                    <Route path="/users/:user(/)" component={Profile} />
                </div>
            </Router>
        )
    }
}

export default App
