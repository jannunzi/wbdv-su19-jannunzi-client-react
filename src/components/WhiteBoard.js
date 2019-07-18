import React from 'react'
import CourseListContainer from '../containers/CourseListContainer'
// import CourseEditorComponent from '../'

// npm install react-router-dom --save
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import CourseEditorContainer from '../containers/CourseEditorContainer'
import WidgetListAssignment from '../containers/WidgetListAssignment'
import Prototype from "./omdb/Prototype";

class WhiteBoard extends React.Component {
    render() {
        return(
            <Router>
                <div>
                    <h1>WhiteBoard</h1>

                    <a href="/courses">Courses</a> |
                    <a href="/widgets">Widgets</a> |
                    <a href="/prototype">Prototype</a>

                    <Route
                        exact={true}
                        path="/prototype"
                        component={Prototype}/>

                    <Route
                        exact={true}
                        path="/widgets"
                        component={WidgetListAssignment}/>

                    <Route
                        exact={true}
                        path="/courses"
                        component={CourseListContainer}/>

                    <Route
                        path="/courses/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId"
                        component={CourseEditorContainer}/>
                </div>
            </Router>
        )
    }
}

export default WhiteBoard;