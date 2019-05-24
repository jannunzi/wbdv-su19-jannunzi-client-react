import React from 'react'
import ModuleListContainer from '../containers/ModuleListContainer'
import LessonTabsContainer from '../containers/LessonTabsContainer'

const CourseEditorComponent = ({course, modules, lessons}) =>
<div>
    <h1>{course.title}</h1>
    <div className="row">
        <div className="col-4">
            <ModuleListContainer
                course={course}
                modules={modules}/>
        </div>
        <div className="col-8">
            <LessonTabsContainer
                course={course}
                lessons={lessons}/>
        </div>
    </div>
</div>

export default CourseEditorComponent;