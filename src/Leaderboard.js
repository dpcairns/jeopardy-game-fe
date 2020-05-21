import React, { Component } from 'react'
import request from 'superagent'
import { Link } from 'react-router-dom'

export default class Leaderboard extends Component {

    state = {
        leaderboardData: []
    }

    componentDidMount = async() => {

        const data = await request.get(`https://enigmatic-springs-29291.herokuapp.com/leaderboard`)
        console.log(data.body)
        this.setState({ leaderboardData: data.body })
    }


    render() {
        return (
            <div>

                { this.state.leaderboardData.map(item => {
                     return <div className='leaderboard'>
                              <Link to={`/detailpage/${item.id}`}> <p>{item.name} </p>                   
                                <p> Games Played: {item.games_played} </p>
                                <p> Total Score: {item.total_score} </p> 
                                </Link>
                            </div>
                }) 
                }
                
            </div>
        )
    }
}
