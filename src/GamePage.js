import React, { Component } from 'react'
import request from 'superagent'

export default class GamePage extends Component {
   state= {
       data: [],
       currentQuestion: '',
       title: '',
       answerInput: '',
       questionsAsked: 0,
       score: 0,
       answeredRight: false,
       answeredWrong: false,
       inputForm: true
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
        console.log(this.state.data.category.title)
   }

   handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.answerInput === this.state.data.answer) {
            this.setState({
                answeredRight: true,
                answeredWrong: false,
                score: this.state.score + 1,
            })
        } else {
            this.setState({
                answeredRight: false,
                answeredWrong: true,
            })    
        }
        this.setState({
                inputForm: false,
                questionsAsked: this.state.questionsAsked + 1
            })
        // put route goes here
        console.log(this.state);
   }
   handleClick = async() => {
    const data = await request.get(`http://jservice.io/api/random?count=1`)
    console.log(data.body[0])
    this.setState({ 
        currentQuestion: data.body[0].question,
        title: data.body[0].category.title,
        data: data.body[0],
        inputForm: true,
        answeredRight: false,
        answeredWrong: false
     })
   } 

    render() {
       const { currentQuestion, title } = this.state
        return (
            <div>
                <p>Username: {this.props.displayName}</p>
                <p>Question Number: {this.state.questionsAsked}</p>
                <p>Score: {this.state.score}</p>
                {this.state.answeredRight && <p>You got it right!</p>}
                {this.state.answeredWrong && <p>Tough break, you got it wrong!
                    The answer was {this.state.data.answer}</p>}
                
                {(this.state.inputForm) ? 
                <form onSubmit={this.handleSubmit}>
                    <p>Category: {title}</p>
                    <p>Question: {currentQuestion}</p>
                    <label>
                        <input name='answer' onChange={(e) => this.setState({answerInput: e.target.value})}></input>
                    </label>
                    <button>Submit Answer</button>
                    </form>
                :
                <button onClick={this.handleClick}>Next Question</button>}
            </div>
        )
    }
}
