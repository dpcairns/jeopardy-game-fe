import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    state = {
        width: 0
    }
    
    openNav = () => {
        this.setState({
            width: 200
        })
    }
    closeNav = () => {
        this.setState({
            width: 0
        })
    }
    
    render() {
        return (
            <div>
                <span className='open-button' onClick={this.openNav}>&#9776;</span>
                <div className='header' style={{ width: this.state.width }}>
                <button className="close-button" onClick={this.closeNav}>&times;</button>
                    <p><Link to={'/signup'} > Sign Up</Link></p>
                    <p><Link to={'/'} > Login </Link></p>
                    <p><Link to={'/leaderboard'} > LeaderBoard </Link></p>
                    <p><Link to={'/gamepage'} > Play Game </Link></p>
                    <p><button onClick={() => 
                    this.props.handleTokenChange('')}>Logout</button></p>
                </div>
            </div>
        )
    }
}
