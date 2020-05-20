import React, { Component } from 'react'
import request from 'superagent'

export default class DetailPage extends Component {

    state = {
        playerData: []
    }

    
    componentDidMount = async() => {

        const data = await request.get(`https://enigmatic-springs-29291.herokuapp.com/results/${this.props.match.params.id}`)
        console.log('heyyy' + data)
        console.log(this.props.match.params)
        this.setState({ playerData: data.body[0] })
    }


    render() {
        return (
            <div>

                {'Name: ' + this.state.playerData.name }
                {'Name: ' + this.state.playerData.name }
                {'Name: ' + this.state.playerData.name }

                
            </div>
        )
    }
}
