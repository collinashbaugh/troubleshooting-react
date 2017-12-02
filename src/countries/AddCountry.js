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

    render() {
        return (
            <Form horizontal>
            <FormGroup controlId="formHorizontalName">
              <Col componentClass={ControlLabel} sm={2}>
                Name
              </Col>
              <Col sm={10}>
                <FormControl type="text" placeholder="Name" />
              </Col>
            </FormGroup>
        
            <FormGroup controlId="formHorizontalRegion">
              <Col componentClass={ControlLabel} sm={2}>
                Region
              </Col>
              <Col sm={10}>
                <FormControl type="text" placeholder="Region" />
              </Col>
            </FormGroup>
            


            <FormGroup>
              <Col smOffset={2} sm={10}>
              </Col>
            </FormGroup>
        
            <FormGroup>
              <Col smOffset={2} sm={10}>
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