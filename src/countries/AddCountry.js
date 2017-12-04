import React, { Component } from 'react'
import { Button, Form, FormGroup, Col, FormControl, ControlLabel } from 'react-bootstrap'
import { graphql } from 'react-apollo'

import CountriesService from './service'

class AddCountry extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            region: '',
            rating: ''
        }
    }

    handleSubmit = (evt) => {
      evt.preventDefault()
      this.props.mutate({ 
        variables: {
          name: this.state.name,
          region: this.state.region,
          rating: this.state.rating
        }
       }).then(() => {
         alert("You Added a Country")
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
        
            <FormGroup controlId="formHorizontalRegion">
              <Col componentClass={ControlLabel} sm={3}>
                Region
              </Col>
              <Col sm={5}>
                <FormControl type="text" 
                placeholder="Region" 
                onChange={(e) => this.setState({ region: e.target.value })}
                />
              </Col>
            </FormGroup>
            
            <FormGroup controlId="formHorizontalRating">
              <Col componentClass={ControlLabel} sm={3}>
                Region
              </Col>
              <Col sm={5}>
                <FormControl type="text" 
                placeholder="Rating" 
                onChange={(e) => this.setState({ rating: parseInt(e.target.value) })}
                />
              </Col>
            </FormGroup>
        
            <FormGroup>
              <Col smOffset={3} sm={5}>
                <Button type="submit">
                  Sign in
                </Button>
              </Col>
            </FormGroup>
          </Form>
        );
    }
}

const withCreateCountryQuery = graphql(
    CountriesService.createCountry,
    {options: 
        {fetchPolicy: 'network-only'}
    })(AddCountry)

export default withCreateCountryQuery