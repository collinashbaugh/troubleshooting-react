import React, { Component }from 'react'
import Rating from 'react-rating-system';
import star from './star.png'
 
export default class RatingSystem extends Component {
    render() {
        return (
            <Rating
                image={star}
                bg="#333333"
                fillBG="gold"
                numberStars={this.props.rating}
                lockRating={true}
                containerStyle={{ maxWidth: '300px' }}
            />
        );
    }
}

 