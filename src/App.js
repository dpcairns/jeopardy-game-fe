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

export default class App extends Component {

    state = {
      token: localStorage.getItem('TOKEN_KEY')
    }

    handleTokenChange = (myToken) => {
      this.setState({token: myToken})
      localStorage.setItem('TOKEN_KEY', myToken)
    }

     componentDidMount = () => {
     } 

    render() {
      console.log('yoooo' + this.state.token)

        return (
            <div>
                <Router>

                  <Header/>
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
                        <PrivateRoute
                            path="/gamepage"
                            token={this.state.token}                            
                            render={(routerProps) => <GamePage {...routerProps} />}

                        />

                    </Switch>
                </Router>
            </div>
        )
    }
}
