import React, { Component } from 'react'
import request from 'superagent'
import { Link } from 'react-router-dom'

export default class Leaderboard extends Component {

    state = {
        leaderboardData: []
    }

    componentDidMount = async() => {
        const data = await request.get(`https://enigmatic-springs-29291.herokuapp.com/leaderboard`)
        const sortedData = data.body
        .filter (item => !isNaN(item.total_score / item.games_played))
        .sort((a, b) => (b.total_score / b.games_played) - (a.total_score / a.games_played));
        this.setState({ leaderboardData: sortedData })
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
