import React, { Component }from 'react'
import ReactDOM from 'react-dom';
import Rating from 'react-rating-system';
 
class YourClass extends React.Component {
    render() {
        return (
            <Rating>
                <img src={require('./star.png')}/>
            </Rating>
        );
    }
}
 
ReactDOM.render(
    <YourClass />, 
    document.getElementById('app')
);
 