import React, { Component } from 'react'
import request from 'superagent'

export default class ResultsPage extends Component {

    state = {
        score: Number(localStorage.getItem('SCORE_KEY')),
        allTimeScore: 0,
        gamesPlayed: 0
    }


    componentDidMount = async() => {
        const data = await request.get(`https://enigmatic-springs-29291.herokuapp.com/api/results/`)
                                  .set('Authorization', localStorage.getItem('TOKEN_KEY'))
                console.log(data)
        this.setState({ allTimeScore: data.body[0].total_score,
                        gamesPlayed: data.body[0].games_played
        })                          
    }

    render() {
        return (
            <div className='results-box'>
                <p> Score: { this.state.score }/10</p>
                <p> All-Time Score: { this.state.allTimeScore }</p>
                <p> Games Played: { this.state.gamesPlayed }</p>
                <button className='play-again-button' onClick={() => this.props.history.push('./gamepage')}>Again?</button>
            </div>
        )
    }
}
