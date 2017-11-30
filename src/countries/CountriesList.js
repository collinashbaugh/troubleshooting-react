import React, { Component } from 'react'
import { Grid, Row, Thumbnail, Button, Col } from 'react-bootstrap'
import { graphql } from 'react-apollo'

import RatingSystem from '../Rating/RatingSystem'
import CountriesService from './service' 


class CountriesList extends Component {
    render() {
        let countries = null

        if(this.props.data.loading){
            return <h1>Loading Locations...</h1>
        }

        if (this.props.data.allLocations){
            countries = this.props.data.allLocations
        }

        return (
            <div>
                {countries.map((location) => {
                return <Col xs={6} md={4}>
                    <Thumbnail img width={242} height={200} alt="242x200">
                    <RatingSystem/>
                        <h3>{location.name}</h3>
                        <p>{location.description}</p>
                        <p>
                        <Button bsStyle="primary">Visit</Button>&nbsp;
                        </p>
                    </Thumbnail>
                    </Col>
                })}
            </div>
        )
    }
}

const withAllCountriesQuery = graphql(
    CountriesService.allCountries,
    {options: 
        {fetchPolicy: 'network-only'}
    })(CountriesList)

export default withAllCountriesQuery;