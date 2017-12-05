import React, { Component } from 'react'
import { Thumbnail, Button, Col } from 'react-bootstrap'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { NavLink } from 'react-router-dom'

import RatingSystem from '../Rating/RatingSystem'


class CountriesList extends Component {
  render() {
  
    //Thor example

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
              <Thumbnail width={242} height={200} alt="242x200">
              <RatingSystem rating={location.rating}/>
                <h3>{location.name}</h3>
                <p>{location.region}</p>
                <p>
                  <NavLink to={ `/Countries/Update/${location.id}` }><Button bsStyle="primary">Visit</Button></NavLink>
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
    (filter: {rating_in: [,7, 8, 9, 10]}) 
      {
      name
      region
      id
      rating
    }
  }
`

export default graphql(QUERY, { name: 'allLocationsQuery' })(CountriesList)
