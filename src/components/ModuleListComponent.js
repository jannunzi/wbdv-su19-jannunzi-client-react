import React from 'react'

const ModuleListComponent = ({course, modules}) =>
<div>
    <div className="list-group">
        {
            modules.map(module =>
                <a key={module.id} href={`/courses/${course.id}/modules/${module.id}/lessons/1/topics/1`} className="list-group-item">
                    {module.title}
                </a>
            )
        }
    </div>
</div>

export default ModuleListComponent