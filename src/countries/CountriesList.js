import React, { Component } from 'react'
import { Thumbnail, Button, Col } from 'react-bootstrap'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import RatingSystem from '../Rating/RatingSystem'
import CountriesService from './service'
import { withRouter } from 'react-router-dom'

class CountriesList extends Component {
  render() {
  
    let locations = this.props.allLocationsQuery  

    if (locations && locations.loading) {
      return <h1>Loading Locations...</h1>
    }

    if (locations && locations.error) {
      return <div>Error fetching locations</div>
    }
    
    console.log(locations.allLocations)  

    return (
      <div>
        {locations.allLocations.map(location => {
          return (
            <Col xs={6} md={4}>
              <Thumbnail img width={242} height={200} alt="242x200">
                      <RatingSystem rating={location.rating}/>
                <h3>{location.name}</h3>
                <p>{location.region}</p>
                <p>
                  <Button bsStyle="primary">Visit</Button>&nbsp;
                </p>
              </Thumbnail>
            </Col>
          )
        })}
      </div>
    )
  }
}

/* const withAllCountriesQuery = graphql(
    CountriesService.allCountries,
    {options: 
        {fetchPolicy: 'network-only'}
    })(CountriesList) */

const QUERY = gql`
  query {
    allLocations 
    (filter: 
      {name_in: 
        ["Chile", "Costa Rica"]
      }) {
      name
      region
      id
      rating
    }
  }
`

export default graphql(QUERY, { name: 'allLocationsQuery' })(CountriesList)
