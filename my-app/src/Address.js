import React, { Component } from 'react';

class Address extends Component {
    render() {
        return (
            <div>
                <p>{this.props.address.street}</p>
                <p>{this.props.address.city}</p>
                <p>{this.props.address.state}</p>
            </div>
        )
    }
}

export default Address;