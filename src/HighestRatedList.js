import React, { Component } from 'react'
import { Grid, Row, Thumbnail, Button, Col } from 'react-bootstrap'
import RatingSystem from './Rating/RatingSystem'


class HighestRatedList extends Component {
    constructor () {
        super()
        this.state = {
            regions: [
                {
                    name: 'Europe',
                    description: 'This is Europe',
                    id: '4'
                },
                {
                    name: 'North America',
                    description: 'Land of the free but not Canada',
                    id: '1'
                }
            ]
        }
    }

    render() {
        return (
            this.state.regions.map((region) => {
             return <Col xs={6} md={4}>
                  <Thumbnail img width={242} height={200} alt="242x200">
                  <RatingSystem/>
                    <h3>{region.name}</h3>
                    <p>{region.description}</p>
                    <p>
                      <Button bsStyle="primary">Visit</Button>&nbsp;
                    </p>
                  </Thumbnail>
                </Col>
            })
        )
    }
}
export default HighestRatedList;