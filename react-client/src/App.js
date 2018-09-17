import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';


import HomePage from './Home';
// import Dog from './Dog';
// import Issuer from './Issuer';
// import Verifier from './Verifier';

import './App.css';

const App = () => (
    <Router>
        <div>
            <Route exact path="/" component={HomePage}/>
            {/* <Route path="/dog" component={Dog}/>
            <Route path="/issuer" component={Issuer}/>
            <Route path="/verifier" component={Verifier}/> */}

        </div>
    </Router>
);

export default App;