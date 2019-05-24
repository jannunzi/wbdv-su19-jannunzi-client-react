import React from 'react'
import CourseListContainer from '../containers/CourseListContainer'
// import CourseEditorComponent from '../'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import CourseEditorContainer from '../containers/CourseEditorContainer'

class WhiteBoard extends React.Component {
    render() {
        return(
            <Router>
                <div>
                    <h1>WhiteBoard</h1>
                    <a href="/courses">Courses</a>
                    <Route exact={true} path="/courses" component={CourseListContainer}/>
                    <Route path="/courses/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId" component={CourseEditorContainer}/>
                </div>
            </Router>
        )
    }
}

export default WhiteBoard;