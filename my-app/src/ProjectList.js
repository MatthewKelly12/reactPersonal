import React, { Component } from 'react'
import Project from './Project'

class ProjectList extends Component {
    constructor(props) {
    super(props)
    this.uniqueKey = 1
    }

    state =  {
        projectlist: []
    }

    componentDidMount() {
        fetch("http://localhost:8088/projectList")
        .then(r => r.json())
        .then(projects => {
            this.setState({
                projectList: projects
            })
        })
    }
    render () {
        return (
            <div className="projectList">
            {this.state.projectList.map(project => (
                <Project name={project.name}
                         description={project.description}
                         key={this.uniqueKey++} />
            ))}
        </div>

        )
    }
}

export default ProjectList
