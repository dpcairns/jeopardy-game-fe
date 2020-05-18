import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import LoginPage from './LoginPage.js'
import SignUp from './SignUp.js';
import GamePage from './GamePage.js'
import Header from './Header.js'

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>

                  <Header/>
                    <Switch>

                        <Route
                            path="/"
                            exact
                            render={(routerProps) => <LoginPage {...routerProps} />}                       
                        />
                        <Route
                            path="/signup"
                            exact
                            render={(routerProps) => <SignUp {...routerProps} />}

                        />
                        <Route
                            path="/gamepage"
                            exact
                            render={(routerProps) => <GamePage {...routerProps} />}

                        />

                    </Switch>
                </Router>
            </div>
        )
    }
}
