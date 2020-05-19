import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {

        

        return (
            <div>
                    <p><Link to={'./signup'} > Sign Up</Link></p>
                    <p><Link to={'./'} > Login </Link></p>
                    <p><Link to={'./leaderboard'} > LeaderBoard </Link></p>
                    <p><button onClick={() => 
                    this.props.handleTokenChange('')}>Logout</button></p>

            </div>
        )
    }
}
