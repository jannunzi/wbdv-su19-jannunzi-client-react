import React from 'react'

export default class LessonTabsContainer
    extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            courseId: props.params.courseId,
            moduleId: props.params.moduleId,
            lessonId: props.params.lessonId,
            topicId: props.params.topicId,
            lessons: props.lessons
        }
        console.log(this.state)
    }
    componentDidUpdate(newProps, oldProps) {
        console.log(newProps, oldProps)
    }
    render() {
        return(
            <div>
                <ul className="nav nav-tabs">
                {
                    this.state.lessons.map(lesson =>
                        <li key={lesson.id}
                            className="nav-item">
                            <a href={`/courses/${this.state.courseId}/modules/${this.state.moduleId}/lessons/${lesson.id}/topics/${this.state.topicId}`}
                               className={lesson.id == this.state.lessonId ? 'nav-link active':'nav-link'}>
                                {lesson.title}
                            </a>
                        </li>
                    )
                }
                </ul>
            </div>
        )
    }
}