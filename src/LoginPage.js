import React, { Component } from 'react'
import request from 'superagent';

export default class LoginPage extends Component {

    state = {
        email: '',
        password: ''
    }
    
    handleSubmit = async(e) => {
        e.preventDefault();

        let tokenData = await request.post(`https://enigmatic-springs-29291.herokuapp.com/auth/signin`, this.state)
        
        this.props.handleTokenChange(tokenData.body.token)

        this.props.history.push('./gamepage')
    }
    

    render() {
        // console.log(this.state)
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

                    <button>Login</button>
                   
                </form>

            </div>
        )
    }
}
