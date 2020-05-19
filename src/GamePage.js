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
       console.log(data.body[0])
       this.setState({ 
           currentQuestion: data.body[0].question,
           title: data.body[0].category.title,
           data: data.body[0]

        })
   }

    render() {
       const { data, currentQuestion, title } = this.state
        return (
            <div>
                <p>{title}</p>
                <p>{currentQuestion}</p>
                <p>{data.answer}</p>
            </div>
        )
    }
}
