import React, { Component } from 'react'
import request from 'superagent'

export default class GamePage extends Component {
   state= {
       data: [],
       currentQuestion: '',
       title: '',
   }
   
   componentDidMount = async() => {
       const data = await request.get(`http://jservice.io/api/random?count=1`
       )
       console.log(data.body[0].category.title)
       this.setState({ 
           currentQuestion: data.body[0],
           title: data.body[0].category.title
        })
   }

    render() {
       const { currentQuestion, title } = this.state
        return (
            <div>
                <p>{title}</p>
                <p>{currentQuestion.question}</p>
            </div>
        )
    }
}
