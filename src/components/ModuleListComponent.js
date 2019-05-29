import React from 'react'
import ModuleListItemContainer from '../containers/ModuleListItemContainer'
const ModuleListComponent = ({course, modules, params}) =>
<div>
    <ul className="list-group">
        {
            modules.map(module =>
                <ModuleListItemContainer
                    key={module.id}
                    module={module}
                    params={params}/>
            )
        }
    </ul>
</div>

export default ModuleListComponent