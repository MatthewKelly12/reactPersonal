import React, { Component } from 'react';
import Address from './Address';
import Pet from './Pet';
import Car from './Car';

class Matthew extends Component {
    state = {
        firstName: "",
        lastName: "",
        occupation: "",
        address: {},
        pet: {},
        car: {}
    }
    loadMyInfo () {
        fetch("http://localhost:8088/people/1")
        .then(r => r.json())
        .then(matthew => {
            this.setState(matthew)
        })
    }
    componentDidMount() {
        this.loadMyInfo();
    }
    render() {
        return (
        <div>
            <h1>{this.state.firstName} {this.state.lastName}</h1>
            <h2>{this.state.occupation}</h2>
            <h2><Address address={this.state.address}/></h2>
            <h2><Pet pet={this.state.pet}/></h2>
            <h2><Car car={this.state.car}/></h2>
        </div>
        )
    }
}

export default Matthew;