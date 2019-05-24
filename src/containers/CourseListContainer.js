import React from 'react'
import CourseListComponent from '../components/CourseListComponent'
import CourseService from '../services/CourseService'

export default class CourseListContainer extends React.Component {
    constructor(props) {
        super(props)
        this.courseService = CourseService.getInstance()
        this.state = {
            courses: this.courseService.findAllCourses()
        }
    }
    render() {
        return (
            <CourseListComponent courses={this.state.courses}/>
        )
    }
}