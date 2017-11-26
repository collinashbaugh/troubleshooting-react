import React, { Component }from 'react'
import ReactDOM from 'react-dom';
import Rating from 'react-rating-system';
import star from './star.png'
 
export default class RatingSystem extends React.Component {
    render() {
        return (
            <Rating image={star} bg="#333333"/>
        );
    }
}

 