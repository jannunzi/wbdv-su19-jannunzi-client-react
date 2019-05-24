import React from 'react'

export default class LessonTabsContainer
    extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lessons: props.lessons
        }
    }
    componentDidUpdate(newProps, oldProps) {
        console.log(newProps, oldProps)
    }
    render() {
        return(
            <div>
                <h1>Lesson Tab</h1>
                <div className="list-group">

                </div>
            </div>
        )
    }
}