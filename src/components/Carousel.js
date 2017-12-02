import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import brazil from '../PicsOfLocations/Brazil.jpg'
import cairo from '../PicsOfLocations/Cairo.jpg'
import hawaii from '../PicsOfLocations/hawaii.jpg'
import lasvegas from '../PicsOfLocations/Las-Vegas.jpg'
import paris from '../PicsOfLocations/Paris.jpg'
import petra from '../PicsOfLocations/Petra.jpg'
import sydney from '../PicsOfLocations/Sydney.jpg'
import thailand from '../PicsOfLocations/Thailand.jpg'
import tikal from '../PicsOfLocations/Tikal.jpg'

class Slider extends Component {
    render() {
        return (
            <Carousel>
            <Carousel.Item>
              <img width={1920} height={1080} alt="900x500" src={brazil} />
              <Carousel.Caption>
                <h1>South America</h1>
                <h3>Christ the Redeemer, Rio de Janerio, Brazil</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={1920} height={1080} alt="900x500" src={cairo} />
              <Carousel.Caption>
                <h1>Africa</h1>
                <h3>Mosque of Muhammad Ali, Cairo, Egypt</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={1920} height={1080} alt="900x500" src={hawaii} />
              <Carousel.Caption>
                <h1>Islands</h1>
                <h3>Hawaiian Resort, Hawaii</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={1920} height={1080} alt="900x500" src={lasvegas} />
              <Carousel.Caption>
                <h1>North America</h1>
                <h3>The Las Vegas Strip ,Las Vegas, Nevada</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={1920} height={1080} alt="900x500" src={paris} />
              <Carousel.Caption>
                <h1>Europe</h1>
                <h3>Louvre Pyramid, Paris, France</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={1920} height={1080} alt="900x500" src={petra} />
              <Carousel.Caption>
                <h1>Middle East</h1>
                <h3>Al-Khazneh, Petra, Jordan</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={1920} height={1080} alt="900x500" src={sydney} />
              <Carousel.Caption>
                <h1>Australia</h1>
                <h3>Sydney Opera House, Sydney, Australia</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={1920} height={1080} alt="900x500" src={thailand} />
              <Carousel.Caption>
                <h1>Asia</h1>
                <h3>Wat Arun, Bangkok, Thailand</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={1920} height={1080} alt="900x500" src={tikal} />
              <Carousel.Caption>
                <h1>Central America</h1>
                <h3>Mesoamerican Pyramid, Tikal, Guatemala</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        );        
    }
}

export default Slider;