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
import PrivateRoute from './PrivateRoute.js'
import ResultsPage from './ResultsPage.js'
import Leaderboard from './Leaderboard.js'
import DetailPage from './DetailPage'

export default class App extends Component {

    state = {
      token: localStorage.getItem('TOKEN_KEY'),
      displayName: ''
    }

    handleTokenChange = (myToken, displayName) => {
      this.setState({token: myToken,
                    displayName: displayName})
      localStorage.setItem('TOKEN_KEY', myToken)
    }

    render() {
        return (
            <div>
                <Router>

                  <Header displayName = {this.state.displayName} handleTokenChange={this.handleTokenChange}/>
                    <Switch>

                        <Route
                            path="/"
                            exact
                            render={(routerProps) => <LoginPage handleTokenChange={this.handleTokenChange} {...routerProps} />}                       
                        />
                        <Route
                            path="/signup"
                            exact
                            render={(routerProps) => <SignUp handleTokenChange={this.handleTokenChange} {...routerProps} />}

                        />

                        <Route
                            path="/leaderboard"
                            exact
                            render={(routerProps) => <Leaderboard  {...routerProps} />}

                        />

                        <Route
                            path="/detailpage/:id"
                            exact
                            render={(routerProps) => <DetailPage  {...routerProps} />}

                        />
                        
                        <PrivateRoute
                            path="/gamepage"
                            token={this.state.token}
                            displayName={this.state.displayName}                            
                            render={(routerProps) => <GamePage {...routerProps} />}

                        />
                        <PrivateRoute
                            path="/results"
                            token={this.state.token}
                            displayName={this.state.displayName}                            
                            render={(routerProps) => <ResultsPage {...routerProps} />}

                        />

                    </Switch>
                </Router>
            </div>
        )
    }
}
