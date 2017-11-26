import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import brazil from './PicsOfLocations/Brazil.jpg'
import cairo from './PicsOfLocations/Cairo.jpg'
import sydney from './PicsOfLocations/Sydney.jpg'

class Slider extends Component {
    render() {
        return (
            <Carousel>
            <Carousel.Item>
              <img width={1920} height={1080} alt="900x500" src={brazil} />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={1920} height={1080} alt="900x500" src={cairo} />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={1920} height={1080} alt="900x500" src={sydney} />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        );        
    }
}

export default Slider;