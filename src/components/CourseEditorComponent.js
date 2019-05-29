import React from 'react'
import ModuleListContainer from '../containers/ModuleListContainer'
import LessonTabsContainer from '../containers/LessonTabsContainer'

const CourseEditorComponent = ({course, modules, lessons, params}) =>
<div>
    <h1>{course.title}</h1>
    <div className="row">
        <div className="col-4">
            <ModuleListContainer
                params={params}
                course={course}
                modules={modules}/>
        </div>
        <div className="col-8">
            <LessonTabsContainer
                params={params}
                course={course}
                lessons={lessons}/>

            {/*<TopicPillsContainer*/}
                {/*params={params}*/}
                {/*topics={topics}/>*/}
        </div>
    </div>
</div>

export default CourseEditorComponent;