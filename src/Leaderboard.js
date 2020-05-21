import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getLeaderboard } from './Api-Calls'

export default class Leaderboard extends Component {

    state = {
        leaderboardData: []
    }

    componentDidMount = async() => {
        const data = await getLeaderboard(this.state)
        this.setState({ leaderboardData: data })
    }

    render() {
        return (
            <div>

                { this.state.leaderboardData.map(item => {
                          return <div className='leaderboard'>
                              <Link to={`/detailpage/${item.id}`}> <p>{item.name} </p>                   
                                <p> Games Played: {item.games_played} </p>
                                <p> Total Score: {item.total_score} </p> 
                                <p>Average: {(item.total_score / item.games_played).toFixed(2)}</p>
                                 </Link>
                            </div>
                            }) 
                }
                
            </div>
        )
    }
}
