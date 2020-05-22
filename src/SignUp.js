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

        await request.post(`https://enigmatic-springs-29291.herokuapp.com/api/results`)
        .set(`Authorization`, tokenData.body.token)

        this.props.history.push('./gamepage')
    }
    
    render() {
        return (
            <div>
                <form className='sign-up-form' onSubmit={this.handleSubmit} >
                    <label>
                        Email:
                        <input onChange={ (e)=> this.setState({email: e.target.value}) } ></input>
                    </label>
                    <label>
                        Password:
                        <input type='password' onChange={ (e)=> this.setState({password: e.target.value}) } ></input>
                    </label>
                    <label>
                        Username:
                        <input onChange={ (e)=> this.setState({display_name: e.target.value}) } ></input>
                    </label>
                    <button className='sign-up-button'>Sign Up</button>
                </form>
            </div>
        )
    }
}
