import React, { Component } from 'react'
import { render } from 'react'
import { Grid, Row, Thumbnail, Button, Col } from 'react-bootstrap'
import Rating from 'react-rating-system'

class HighestRated extends Component {
    render() {
        return (
            <Grid>
              <Row>
                <Col xs={6} md={4}>
                  <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
                    <h3>Thumbnail label</h3>
                    <p>Description</p>
                    <p>
                      <Button bsStyle="primary">Button</Button>&nbsp;
                    </p>
                  </Thumbnail>
                </Col>
                <Col xs={6} md={4}>
                  <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
                    <h3>Thumbnail label</h3>
                    <p>Description</p>
                    <p>
                      <Button bsStyle="primary">Button</Button>&nbsp;
                    </p>
                  </Thumbnail>
                </Col>
                <Col xs={6} md={4}>
                  <Thumbnail src="/PicsOfLocations/Brazil.jpg" alt="242x200">
                  <Rating/>
                    <h3>Thumbnail label</h3>
                    <p>Description</p>
                    <p>
                      <Button bsStyle="primary">Button</Button>&nbsp;
                    </p>
                  </Thumbnail>
                </Col>
              </Row>
            </Grid>
          );
        }
    }
    
    
    export default HighestRated;