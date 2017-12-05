import React, { Component } from 'react';
import { Form, FormGroup, Col, FormControl, ControlLabel, Checkbox, Button } from 'react-bootstrap';

import graphql from 'react-apollo/graphql';
import gql from 'graphql-tag'

/* class LogIn extends Component {
  constructor(props) {
    super()

    this.state = {
      email: '',
      password: ''
    }
  }

  _loginUser = async (event) => {
    event.prevent.Default()
    const { email, password } = this.state

    try {
      const response = await this.props.authenticateUserMutation({ variables: {email, password } })
      localStorage.setItem('graphcoolToken', response.data.authenticateUser.token)
      console.log(response.data)
    } catch (e) {
      console.log('An error occured: ', e)
    }
  }

    render() {
        return (
          <Col componentClass={ControlLabel} sm={5} smOffset={3}>
            <Form horizontal onSubmit={this.loginUser}>
            <FormGroup controlId="formHorizontalEmail">
                <FormControl type="email" 
                placeholder="Email" 
                onChange={(e) => this.setState({ email: e.target.value })}
                />
            </FormGroup>
        
            <FormGroup controlId="formHorizontalPassword">
              <FormControl type="password" 
              placeholder="Password" 
              onChange={(e) => this.setState({ email: e.target.value })}
              />
            </FormGroup>
        
            <FormGroup>
                <Button type="submit">
                  Sign in
                </Button>
            </FormGroup>
          </Form>
        </Col>
        );
    }
}

const AUTHENTICATE_EMAIL_USER = gql`
mutation AuthenticateUser($email: String!, password: String!) {
  authenticateUser(email: $email, password: $password ) {
    token
  }
}
`

export default graphql(AUTHENTICATE_EMAIL_USER, { name: 'authenticateUserMutation' }) (LogIn); */