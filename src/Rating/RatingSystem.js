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
                numberStars={10}
                lockRating={true}
                initialValue={this.props.rating}
                containerStyle={{ maxWidth: '300px', }}
            />
        );
    }
}

 