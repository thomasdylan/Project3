import React from "react";
import ReactDOM from 'react-dom';
import NavBar from "./components/NavBar";
import {useAuth0} from "./react-auth0-spa";
import {Router, Route, Switch} from "react-router-dom";
import Home from "./views/Home";
import Profile from "./views/Profile";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";

function App() {
    const {loading} = useAuth0();

    if (loading) {
        return (
            <div className="container m-auto" style={{ "textAlign": "center", "verticalAlign": "center" }}>
            <div className="spinner-border text-primary" style={{ "width": "10rem", "height": "10rem" }} role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
    }
    return (
        <div className="App">
            <Router history={history}>
                <header>
                    <NavBar/>
                </header>
                <Switch>
                    <Route path="/" exact/>
                    <PrivateRoute path="/profile" component={Profile}/>
                    <PrivateRoute path="/home" component={Home}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;