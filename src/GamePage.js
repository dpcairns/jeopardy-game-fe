import React, { Component } from 'react'
import request from 'superagent'

export default class GamePage extends Component {
   state= {
       data: [],
       currentQuestion: '',
   }
   
   componentDidMount = async() => {
       const data = await request.get(`http://jservice.io/api/random?count=1`
       )
       console.log(data.body[0].category.title)
       this.setState({ currentQuestion: data.body[0] })
   }

    render() {
       const { currentQuestion } = this.state
        return (
            <div>
                {/* <p>{currentQuestion['category']['title']}</p> */}
                <p>{currentQuestion.question}</p>
            </div>
        )
    }
}
