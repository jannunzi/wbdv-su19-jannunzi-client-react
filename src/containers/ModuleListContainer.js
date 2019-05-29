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
    render() {
        return(
            <ModuleListComponent
                params={this.props.params}
                course={this.state.course}
                modules={this.state.modules}/>
        )
    }
}