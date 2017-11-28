import React, { Component } from 'react'
import { Grid, Row, Thumbnail, Button, Col } from 'react-bootstrap'
import RatingSystem from './Rating/RatingSystem'

import rome from './PicsOfLocations/ThumbnailPics/Rome.jpg'
import sydney from './PicsOfLocations/ThumbnailPics/Sydney.jpg'
import porto from './PicsOfLocations/ThumbnailPics/Porto.jpg'
import london from './PicsOfLocations/ThumbnailPics/London.jpg'
import paris from './PicsOfLocations/ThumbnailPics/Paris.jpg'
import newyorkcity from './PicsOfLocations/ThumbnailPics/New-York-City.jpg'
import florence from './PicsOfLocations/ThumbnailPics/Florence.jpg'
import prague from './PicsOfLocations/ThumbnailPics/Prague.jpg'
import barcelona from './PicsOfLocations/ThumbnailPics/Barcelona.jpg'
import dubai from './PicsOfLocations/ThumbnailPics/Dubai.jpg'
import amalficoast from './PicsOfLocations/ThumbnailPics/Amalfi-Coast.jpg'
import santorini from './PicsOfLocations/ThumbnailPics/Santorini.jpg'
import honolulu from './PicsOfLocations/ThumbnailPics/Honolulu.jpg'
import grandcanyon from './PicsOfLocations/ThumbnailPics/Grand-Canyon.jpg'
import bali from './PicsOfLocations/ThumbnailPics/Bali.jpg'
import vancouver from './PicsOfLocations/ThumbnailPics/Vancouver.jpg'
import Breckenridge from './PicsOfLocations/ThumbnailPics/Breckenridge.jpg'
import phucket from './PicsOfLocations/ThumbnailPics/Phucket.jpg'
import sansebastian from './PicsOfLocations/ThumbnailPics/San-Sebastian.jpg'
import tahiti from './PicsOfLocations/ThumbnailPics/Tahiti.jpg'
import yosemite from './PicsOfLocations/ThumbnailPics/Yosemite.jpg'
import costarica from './PicsOfLocations/ThumbnailPics/Costa-Rica.jpg'
import britishvirginislands from './PicsOfLocations/ThumbnailPics/British-Virgin-Islands.jpg'
import parkcity from './PicsOfLocations/ThumbnailPics/Park-City.jpg'
import machupicchu from './PicsOfLocations/ThumbnailPics/Machu-Picchu.jpg'

class HighestRated extends Component {
    render() {
      return (
            <Grid>
              <Row>
                <Col xs={6} md={4}>
                  <Thumbnail img width={242} height={200} src={rome} alt="242x200">
                  <RatingSystem/>
                    <h3>Rome, Italy</h3>
                    <p>Description</p>
                    <p>
                      <Button bsStyle="primary">Visit</Button>&nbsp;
                    </p>
                  </Thumbnail>
                </Col>
                <Col xs={6} md={4}>
                  <Thumbnail src={sydney} alt="242x200">
                  <RatingSystem/>
                    <h3>Sydney, Australia</h3>
                    <p>Description</p>
                    <p>
                      <Button bsStyle="primary">Visit</Button>&nbsp;
                    </p>
                  </Thumbnail>
                </Col>
                <Col xs={6} md={4}>
                  <Thumbnail width={242} height={200} src={porto} alt="242x200">
                  <RatingSystem/>
                    <h3>Thumbnail label</h3>
                    <p>Description</p>
                    <p>
                      <Button bsStyle="primary">Visit</Button>&nbsp;
                    </p>
                  </Thumbnail>
                </Col>
                <Col xs={6} md={4}>
                  <Thumbnail src={london} alt="242x200">
                  <RatingSystem/>
                    <h3>Thumbnail label</h3>
                    <p>Description</p>
                    <p>
                      <Button bsStyle="primary">Visit</Button>&nbsp;
                    </p>
                  </Thumbnail>
                </Col>
                <Col xs={6} md={4}>
                  <Thumbnail src={paris} alt="242x200">
                  <RatingSystem/>
                    <h3>Thumbnail label</h3>
                    <p>Description</p>
                    <p>
                      <Button bsStyle="primary">Visit</Button>&nbsp;
                    </p>
                  </Thumbnail>
                </Col>
                <Col xs={6} md={4}>
                  <Thumbnail src={newyorkcity} alt="242x200">
                  <RatingSystem/>
                    <h3>Thumbnail label</h3>
                    <p>Description</p>
                    <p>
                      <Button bsStyle="primary">Visit</Button>&nbsp;
                    </p>
                  </Thumbnail>
                </Col>
                <Col xs={6} md={4}>
                  <Thumbnail src={florence} alt="242x200">
                  <RatingSystem/>
                    <h3>Thumbnail label</h3>
                    <p>Description</p>
                    <p>
                      <Button bsStyle="primary">Visit</Button>&nbsp;
                    </p>
                  </Thumbnail>
                </Col>
                <Col xs={6} md={4}>
                  <Thumbnail src={prague} alt="242x200">
                  <RatingSystem/>
                    <h3>Thumbnail label</h3>
                    <p>Description</p>
                    <p>
                      <Button bsStyle="primary">Visit</Button>&nbsp;
                    </p>
                  </Thumbnail>
                </Col>
                <Col xs={6} md={4}>
                  <Thumbnail src={barcelona} alt="242x200">
                  <RatingSystem/>
                    <h3>Thumbnail label</h3>
                    <p>Description</p>
                    <p>
                      <Button bsStyle="primary">Visit</Button>&nbsp;
                    </p>
                  </Thumbnail>
                </Col>
                <Col xs={6} md={4}>
                  <Thumbnail src={dubai} alt="242x200">
                  <RatingSystem/>
                    <h3>Thumbnail label</h3>
                    <p>Description</p>
                    <p>
                      <Button bsStyle="primary">Visit</Button>&nbsp;
                    </p>
                  </Thumbnail>
                </Col>
                <Col xs={6} md={4}>
                  <Thumbnail src={amalficoast} alt="242x200">
                  <RatingSystem/>
                    <h3>Thumbnail label</h3>
                    <p>Description</p>
                    <p>
                      <Button bsStyle="primary">Visit</Button>&nbsp;
                    </p>
                  </Thumbnail>
                </Col>
                <Col xs={6} md={4}>
                  <Thumbnail src={santorini} alt="242x200">
                  <RatingSystem/>
                    <h3>Thumbnail label</h3>
                    <p>Description</p>
                    <p>
                      <Button bsStyle="primary">Visit</Button>&nbsp;
                    </p>
                  </Thumbnail>
                </Col>
                <Col xs={6} md={4}>
                  <Thumbnail src={honolulu} alt="242x200">
                  <RatingSystem/>
                    <h3>Thumbnail label</h3>
                    <p>Description</p>
                    <p>
                      <Button bsStyle="primary">Visit</Button>&nbsp;
                    </p>
                  </Thumbnail>
                </Col>
                <Col xs={6} md={4}>
                  <Thumbnail src={grandcanyon} alt="242x200">
                  <RatingSystem/>
                    <h3>Thumbnail label</h3>
                    <p>Description</p>
                    <p>
                      <Button bsStyle="primary">Visit</Button>&nbsp;
                    </p>
                  </Thumbnail>
                </Col>
                <Col xs={6} md={4}>
                  <Thumbnail src={bali} alt="242x200">
                  <RatingSystem/>
                    <h3>Thumbnail label</h3>
                    <p>Description</p>
                    <p>
                      <Button bsStyle="primary">Visit</Button>&nbsp;
                    </p>
                  </Thumbnail>
                </Col>
                <Col xs={6} md={4}>
                  <Thumbnail src={vancouver} alt="242x200">
                  <RatingSystem/>
                    <h3>Thumbnail label</h3>
                    <p>Description</p>
                    <p>
                      <Button bsStyle="primary">Visit</Button>&nbsp;
                    </p>
                  </Thumbnail>
                </Col>
                <Col xs={6} md={4}>
                  <Thumbnail src={Breckenridge} alt="242x200">
                  <RatingSystem/>
                    <h3>Thumbnail label</h3>
                    <p>Description</p>
                    <p>
                      <Button bsStyle="primary">Visit</Button>&nbsp;
                    </p>
                  </Thumbnail>
                </Col>
                <Col xs={6} md={4}>
                  <Thumbnail src={phucket} alt="242x200">
                  <RatingSystem/>
                    <h3>Thumbnail label</h3>
                    <p>Description</p>
                    <p>
                      <Button bsStyle="primary">Visit</Button>&nbsp;
                    </p>
                  </Thumbnail>
                </Col>
                <Col xs={6} md={4}>
                  <Thumbnail src={sansebastian} alt="242x200">
                  <RatingSystem/>
                    <h3>Thumbnail label</h3>
                    <p>Description</p>
                    <p>
                      <Button bsStyle="primary">Visit</Button>&nbsp;
                    </p>
                  </Thumbnail>
                </Col>
                <Col xs={6} md={4}>
                  <Thumbnail src={tahiti} alt="242x200">
                  <RatingSystem/>
                    <h3>Thumbnail label</h3>
                    <p>Description</p>
                    <p>
                      <Button bsStyle="primary">Visit</Button>&nbsp;
                    </p>
                  </Thumbnail>
                </Col>
                <Col xs={6} md={4}>
                  <Thumbnail src={yosemite} alt="242x200">
                  <RatingSystem/>
                    <h3>Thumbnail label</h3>
                    <p>Description</p>
                    <p>
                      <Button bsStyle="primary">Visit</Button>&nbsp;
                    </p>
                  </Thumbnail>
                </Col>
                <Col xs={6} md={4}>
                  <Thumbnail src={costarica} alt="242x200">
                  <RatingSystem/>
                    <h3>Thumbnail label</h3>
                    <p>Description</p>
                    <p>
                      <Button bsStyle="primary">Visit</Button>&nbsp;
                    </p>
                  </Thumbnail>
                </Col>
                <Col xs={6} md={4}>
                  <Thumbnail src={britishvirginislands} alt="242x200">
                  <RatingSystem/>
                    <h3>Thumbnail label</h3>
                    <p>Description</p>
                    <p>
                      <Button bsStyle="primary">Visit</Button>&nbsp;
                    </p>
                  </Thumbnail>
                </Col>
                <Col xs={6} md={4}>
                  <Thumbnail src={parkcity} alt="242x200">
                  <RatingSystem/>
                    <h3>Thumbnail label</h3>
                    <p>Description</p>
                    <p>
                      <Button bsStyle="primary">Visit</Button>&nbsp;
                    </p>
                  </Thumbnail>
                </Col>
                <Col xs={6} md={4}>
                  <Thumbnail src={machupicchu} alt="242x200">
                  <RatingSystem/>
                    <h3>Thumbnail label</h3>
                    <p>Description</p>
                    <p>
                      <Button bsStyle="primary">Visit</Button>&nbsp;
                    </p>
                  </Thumbnail>
                </Col>
              </Row>
            </Grid>
          );
      }
    }
    
    
    export default HighestRated;