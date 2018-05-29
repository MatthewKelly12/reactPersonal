import React, { Component } from 'react';

class Matthew extends Component {
    state = {
        firstName: "",
        lastName: "",
        address: "",
    }
    loadMyInfo () {
        fetch("http://localhost:8080/people/1")
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
            <h2>{this.state.address}</h2>
        </div>
        )
    }
}

export default Matthew;