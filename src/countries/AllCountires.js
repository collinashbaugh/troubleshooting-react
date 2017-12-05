import React, { Component } from 'react'
import { Thumbnail, Button, Col } from 'react-bootstrap'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { NavLink } from 'react-router-dom'

import RatingSystem from '../Rating/RatingSystem'


class AllCountries extends Component {
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


const QUERY = gql`
  query {
    allLocations 
    (orderBy: name_ASC) 
      {
      name
      region
      id
      rating
    }
  }
`

export default graphql(QUERY, { name: 'allLocationsQuery' })(AllCountries)
