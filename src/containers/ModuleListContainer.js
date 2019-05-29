import React from 'react'
import ModuleListComponent from '../components/ModuleListComponent'

export default class ModuleListContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            course: this.props.course,
            modules : this.props.modules
        }
    }
    deleteModule = moduleId =>
        this.setState({
            modules: this.state.modules.filter(module => module.id !== moduleId)
        })

    render() {
        return(
            <ModuleListComponent
                deleteModule={this.deleteModule}
                params={this.props.params}
                course={this.state.course}
                modules={this.state.modules}/>
        )
    }
}