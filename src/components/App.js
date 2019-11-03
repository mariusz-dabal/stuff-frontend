import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Login from './Login';
import Register from './Register';
import Logout from './Logout';
import Sites from './Sites';
import Home from './Home';
import { ProtectedRoute } from './ProtectedRoute';

const App = () => {
    
    return (
        <Router>
            <React.Fragment>
                <Navbar />
                <div className="container mt-5">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/register" component={Register}/>
                        <Route exact path="/logout" component={Logout}/>
                        <ProtectedRoute exact path="/sites" component={Sites}/>
                        <Route path="*" component={() => '404 not found'} />
                    </Switch>
                </div>
            </React.Fragment>
        </Router>
    );
}

export default App;