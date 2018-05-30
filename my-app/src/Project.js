import React, { Component } from "react"


class Project extends Component {
    render() {
        return (
            <article>
                <div>{this.props.project.name}</div>
                <div>{this.props.project.description }</div>
            </article>
        )
    }
}

export default Project