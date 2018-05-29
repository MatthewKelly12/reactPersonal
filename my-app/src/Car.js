import React, { Component } from 'react';

class Car extends Component {
    render() {
        return (
            <div>
                <h3>My Favorite Car</h3>
                <p>{this.props.car.year}</p>
                <p>{this.props.car.make}</p>
                <p>{this.props.car.model}</p>
            </div>
        )
    }
}

export default Car;
