import React from 'react'

const CourseListComponent = ({courses}) =>
    <div>
        <h2>Course List {courses.length}</h2>
        <div className="list-group">
            {
                courses.map(course =>
                    <a href={`/courses/${course.id}/modules/1/lessons/1/topics/1`} key={course.id} className="list-group-item">
                        {course.title}
                    </a>
                )
            }
        </div>
    </div>

export default CourseListComponent