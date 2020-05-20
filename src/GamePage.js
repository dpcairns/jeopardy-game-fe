import React, { Component } from 'react'
import request from 'superagent'

export default class GamePage extends Component {
   state= {
       data: [],
       currentQuestion: '',
       title: '',
       answerInput: '',
       questionsAsked: 10,
       score: 0,
       answeredRight: false,
       answeredWrong: false,
       inputForm: true,
       username: this.props.displayName
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

   handleSubmit = async(e) => {
        e.preventDefault();
            
        if(this.state.data.answer.toLowerCase() === this.state.answerInput.toLowerCase()) {
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
                questionsAsked: this.state.questionsAsked - 1
            })
        
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

   handleResultsClick = async() => {
       const resultsObject = {
           total_score: this.state.score,           
       }
       await request.put(`https://enigmatic-springs-29291.herokuapp.com/api/results`, resultsObject)
       .set('Authorization', this.props.token)

       this.props.history.push('./results')
   }

    render() {
       const { currentQuestion, title, username } = this.state
        return (
            <div>
                <p>Username: {username}</p>
                <p>Questions Left: {this.state.questionsAsked}</p>
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
                :  this.state.questionsAsked > 0 ? <button onClick={this.handleClick}>Next Question</button> : <button onClick={this.handleResultsClick} >See Results</button>}
            </div>
        )
    }
}
