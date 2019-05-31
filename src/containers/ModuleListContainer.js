import React from 'react'
import ModuleListComponent from '../components/ModuleListComponent'
import ModuleService from '../services/ModuleService'

export default class ModuleListContainer extends React.Component {
    constructor(props) {
        super(props)
        this.moduleService = ModuleService.getInstance()
        this.state = {
            course: this.props.course,
            modules : this.props.modules
        }
    }
    deleteModule = moduleId =>
        this.setState({
            modules: this.moduleService.deleteModule(moduleId) //this.state.modules.filter(module => module.id !== moduleId)
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