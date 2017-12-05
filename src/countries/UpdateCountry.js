import React, { Component } from 'react'
import { Button, Form, FormGroup, Col, FormControl, ControlLabel } from 'react-bootstrap'
import { graphql } from 'react-apollo'

import CountriesService from './service'

class UpdateCountry extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            region: '',
            rating: '',
            id: ''
        }
    }

    handleSubmit = (evt) => {
      evt.preventDefault()
      this.props.mutate({ 
        variables: {
          name: this.state.name,
          region: this.state.region,
          rating: this.state.rating,
          id: this.state.id//props.data
        }
       }).then(() => {
         alert("You Updated a Country")
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
                Rating
              </Col>
              <Col sm={5}>
                <FormControl type="text" 
                placeholder="Rating" 
                onChange={(e) => this.setState({ rating: parseInt(e.target.value) })}
                />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalRating">
              <Col componentClass={ControlLabel} sm={3}>
                ID
              </Col>
              <Col sm={5}>
                <FormControl type="text" 
                placeholder="ID" 
                onChange={(e) => this.setState({ id: e.target.value })}
                />
              </Col>
            </FormGroup>
        
            <FormGroup>
              <Col smOffset={3} sm={5}>
                <Button type="submit">
                  Update
                </Button>
              </Col>
            </FormGroup>
          </Form>
        );
    }
}

// graphql(query or mutation)(component)
// graphql combines the mutation/query with the component

const withUpdateCountryQuery = graphql(
    CountriesService.updateCountry,
    {options: /* (ownProps) =>
        {
            variables: {
                id: ownProps.match.params.id
            } */
            {fetchPolicy: 'network-only'
        }
    })(UpdateCountry)

export default withUpdateCountryQuery