import React from 'react'
import ModuleListItemContainer from '../containers/ModuleListItemContainer'
const ModuleListComponent = ({course, modules, params, deleteModule}) =>
<div>
    <ul className="list-group">
        {
            modules.map(module =>
                <ModuleListItemContainer
                    deleteModule={deleteModule}
                    key={module.id}
                    module={module}
                    params={params}/>
            )
        }
    </ul>
</div>

export default ModuleListComponent