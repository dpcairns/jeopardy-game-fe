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

    handleLogout = () => {
        this.closeNav();
        this.props.handleTokenChange('')
    }
    
    render() {
        return (
            <div>
                <span className='open-button' onClick={this.openNav}>&#9776;</span>
                <div className='title-container'>
                    <p className='title'>JEOPARDY!</p>
                    <p className='title'>LITE</p>
                </div>
                <div className='header' style={{ width: this.state.width }}>
                    <a href='javascript:void(0)' className="close-button" onClick={this.closeNav}>&times;</a>
                    <p><Link to={'/signup'} onClick={this.closeNav}> Sign Up</Link></p>
                    <p><Link to={'/'} onClick={this.closeNav}> Login </Link></p>
                    <p><Link to={'/leaderboard'} onClick={this.closeNav}> LeaderBoard </Link></p>
                    <p><Link to={'/gamepage'} onClick={this.closeNav}> Play Game </Link></p>
                    <p><Link to={'/'} onClick={this.handleLogout}>Logout</Link></p>
                </div>
            </div>
        )
    }
}
