import React, { Component } from 'react'
import request from 'superagent'

export default class DetailPage extends Component {

    state = {
        playerData: []
    }

    componentDidMount = async() => {
        const data = await request.get(`https://enigmatic-springs-29291.herokuapp.com/results/${this.props.match.params.id}`)
        this.setState({ playerData: data.body[0] })
    }

    render() {
        let {name, games_played, total_score} = this.state.playerData
        return (
            <div>   
                <div className='user-profile'>
                   <p> {'Name: ' + name } </p>
                   <p>  {'Games Played: ' + games_played } </p>
                   <p> {'Total Score: ' + total_score } </p>
                </div>
            </div>
        )
    }
}
