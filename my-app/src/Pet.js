import React, { Component } from 'react';

class Pet extends Component {
    render() {
        return(
            <div>
                <h3>My Pet</h3>
                <p>{this.props.pet.name}</p>
                <p>{this.props.pet.breed}</p>
            </div>
        )
    }
}

export default Pet;