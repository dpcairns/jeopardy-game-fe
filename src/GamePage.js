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
   }

   handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.answerInput === this.state.data.answer) {
            this.setState({
                answeredRight: true,
                answeredWrong: false,
                rightAnswer: this.state.score + 1,
                questionsAsked: this.state.questionsAsked + 1

            })
        } else {
            this.setState({
                answeredRight: false,
                answeredWrong: true,
                questionsAsked: this.state.questionsAsked + 1

            })
            this.setState({
                inputForm: false
            })
        }
        // put route goes here
        console.log(this.state);

        
   }

    render() {
       const { currentQuestion, title } = this.state
        return (
            <div>
                {this.state.answeredRight && <p>You got it right!</p>}
                {this.state.answeredWrong && <p>Tough break, you got it wrong!</p>}
                <p>{title}</p>
                <p>{currentQuestion}</p>
                {(this.state.inputForm) ? <form onSubmit={this.handleSubmit}>
                    <label>
                        <input name='answer' onChange={(e) => this.setState({answerInput: e.target.value})}></input>
                    </label>
                    <button>Submit Answer</button>
                    </form>
                :
                <button>Next Question</button>}
            </div>
        )
    }
}

// {(this.state.answered)
//                     ? null
//                     : '/ ' + this.state.pokemon.type_2}</p>