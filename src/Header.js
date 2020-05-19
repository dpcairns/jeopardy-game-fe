import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {

        

        return (
            <div>

                    <Link to={'./signup'} > Sign Up</Link>
                    <Link to={'./'} > Login </Link>
                    <Link to={'./leaderboard'} > LeaderBoard </Link>

            </div>
        )
    }
}
