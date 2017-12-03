import React, { Component } from 'react'
import { Form, FormGroup, Col, FormControl, Button, ControlLabel } from 'react-bootstrap'

import graphql from 'react-apollo/graphql';
import gql from 'graphql-tag'

class SignUp extends Component {

    constructor(props) {
        super()

        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    _signUpUser = async (event) => {
        event.preventDefault()
        const { email, password } = this.state
        console.log(this.state)
        try {
            const response = await this.props.signupUserMutation({ variables: { email, password } })
            localStorage.setItem('graphcoolToken', response.data.signupUser.token)
            console.log(response.data)
            document.querySelector("form").reset()

        } catch (e) {
            console.error('An error occured: ', e)
        }
    }

    render() {
        return (
            <form onSubmit={this._signUpUser}>
                <Col componentClass={ControlLabel} sm={5} smOffset={3}>
                    <FormGroup>
                    <FormControl type="text" 
                    placeholder="Name" 
                    value={this.state.name}
                    onChange={(e) => this.setState({ name: e.target.value })}
                    />
                    </FormGroup>

                    <FormGroup controlId="formHorizontalEmail">
                    <FormControl type="email" 
                    placeholder="Email"
                    value={this.state.email}
                    onchange={(e) => this.setState({ email: e.target.value })}
                    />
                    </FormGroup>

                    <FormGroup>
                    <FormControl type="password" 
                    placeholder="Password"
                    value={this.state.password}
                    onchange={(e) => this.setState({ password: e.target.value })} 
                    />
                    </FormGroup>
                    
                    <Button type="submit">
                        Sign up
                    </Button>
                </Col>
            </form>
        );
    }
}

const SIGNUP_EMAIL_USER = gql`
    mutation SignupUser($email: String!, $password: String!) {
        signupUser(email: $email, password: $password) {
            id
            token
        }
    }
`

export default graphql(SIGNUP_EMAIL_USER, { name: 'signUserMutation'})(SignUp)