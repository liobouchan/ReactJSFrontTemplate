import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './HomePage';
import NavBar from './HeaderComponent/NavBar';
import Footer from './Footer';

class App extends Component {
    render() {
        return (
        <Router>
            <div>
            <NavBar />
            <Route name="home" exact path="/" component={HomePage} />
            </div>
            <Footer/>
        </Router>
        )
    }
}
export default App;