import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';


import Home from './Home';
import Register from './Register';
import Login from './Login';
import Dashboard from './Dashboard';
// import Issuer from './Issuer';
// import Verifier from './Verifier';

import './App.css';

const App = () => (
    <Router>
        <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/dashboard" component={Dashboard}/>

            {/* <Route path="/dog" component={Dog}/>
            <Route path="/issuer" component={Issuer}/>
            <Route path="/verifier" component={Verifier}/> */}

        </div>
    </Router>
);

export default App;