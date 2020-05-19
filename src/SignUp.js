import React, { Component } from 'react'
import request from 'superagent';

export default class SignUp extends Component {
    state = {
        email: '',
        password: '',
        display_name: ''
    }
    
    handleSubmit = async(e) => {
        e.preventDefault();

        let tokenData = await request.post(`https://enigmatic-springs-29291.herokuapp.com/auth/signup`, this.state)
        this.props.handleTokenChange(tokenData.body.token, tokenData.body.display_name)
        this.props.history.push('./gamepage')
    }
    

    render() {
        console.log(this.state)
        return (
            <div>
                
                <form onSubmit={this.handleSubmit} >
                    <label>
                        Email:
                        <input onChange={ (e)=> this.setState({email: e.target.value}) } ></input>
                    </label>
                    <label>
                        Password:
                        <input onChange={ (e)=> this.setState({password: e.target.value}) } ></input>
                    </label>
                    <label>
                        Username:
                        <input onChange={ (e)=> this.setState({display_name: e.target.value}) } ></input>
                    </label>

                    <button>Sign Up</button>
                   
                </form>

            </div>
        )
    }
}
