import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { graphql } from 'react-apollo'

import CountriesService from './service'

class AddCountry extends Component {
    render() {
        return (
            <div>
                <Button bsStyle="primary">
                    Generate
                </Button>
            </div>
        )
    }
}

const withCreateCountryQuery = graphql(
    CountriesService.createCountry,
    {options: 
        {fetchPolicy: 'network-only'}
    })(AddCountry)

export default withCreateCountryQuery