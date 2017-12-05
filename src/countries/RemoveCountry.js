import React, { Component } from 'react'
import { Button, Form, FormGroup, Col, FormControl, ControlLabel } from 'react-bootstrap'
import { graphql } from 'react-apollo'

import CountriesService from './service'

class DeleteCountry extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            id: ''
        }
    }

    handleSubmit = (evt) => {
      evt.preventDefault()
      this.props.mutate({ 
        variables: {
          name: this.state.name,
          id: this.state.id
        }
       }).then(() => {
         alert("You Deleted a Country")
       }).catch((err) => {
         alert("Error whatever" + err)
       })
    }

    render() {
        return (
            <Form horizontal onSubmit={this.handleSubmit}>
            <FormGroup controlId="formHorizontalName">
              <Col componentClass={ControlLabel} sm={3}>
                Name
              </Col>
              <Col sm={5}>
                <FormControl type="text" 
                placeholder="Name"
                onChange={(e) => this.setState({ name: e.target.value })} 
                />
              </Col>
            </FormGroup>
        
            <FormGroup controlId="formHorizontalID">
              <Col componentClass={ControlLabel} sm={3}>
                ID
              </Col>
              <Col sm={5}>
                <FormControl type="text" 
                placeholder="id" 
                onChange={(e) => this.setState({ id: e.target.value })}
                />
              </Col>
            </FormGroup>
        
            <FormGroup>
              <Col smOffset={3} sm={5}>
                <Button type="submit">
                  Submit
                </Button>
              </Col>
            </FormGroup>
          </Form>
        );
    }
}

// graphql(query or mutation)(component)
// graphql combines the mutation/query with the component

const withDeleteCountryQuery = graphql(
    CountriesService.deleteCountry,
    {options: 
        {fetchPolicy: 'network-only'}
    })(DeleteCountry)

export default withDeleteCountryQuery