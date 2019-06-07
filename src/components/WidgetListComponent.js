import React from 'react'
import HeadingWidget from "./widgets/HeadingWidget";
import ParagraphWidget from "./widgets/ParagraphWidget";
import LinkWidget from "./widgets/LinkWidget";
import ListWidget from "./widgets/ListWidget";
import ImageWidget from "./widgets/ImageWidget";

class WidgetListComponent extends React.Component {//({widgets, deleteWidget, createWidget, updateWidget}) =>//extends React.Component{
    constructor(props) {
        super(props)
        this.props.loadWidgets();
    }
    render() {
        return(
    <ul>
        {
            this.props.widgets && this.props.widgets.map(widget =>
                <li key={widget.id}>
                    {widget.name}
                    {widget.type}
                    <select
                        onChange={(event) => this.props.updateWidget({...widget, type: event.target.value})}
                        value={widget.type}>
                        <option value="HEADING">Heading</option>
                        <option value="PARAGRAPH">Paragraph</option>
                        <option value="IMAGE">Image</option>
                        <option value="LIST">List</option>
                        <option value="LINK">Link</option>
                    </select>
                    <button
                        onClick={() => this.props.deleteWidget(widget.id)}>
                        Delete
                    </button>
                    {
                        widget.type === 'HEADING' &&
                        <HeadingWidget widget={widget} updateWidget={this.props.updateWidget}/>
                    }
                    {
                        widget.type === 'PARAGRAPH' &&
                        <ParagraphWidget widget={widget} updateWidget={this.props.updateWidget}/>
                    }
                    {
                        widget.type === 'LINK' &&
                        <LinkWidget widget={widget} updateWidget={this.props.updateWidget}/>
                    }
                    {
                        widget.type === 'LIST' &&
                        <ListWidget widget={widget} updateWidget={this.props.updateWidget}/>
                    }
                    {
                        widget.type === 'IMAGE' &&
                        <ImageWidget widget={widget} updateWidget={this.props.updateWidget}/>
                    }
                </li>
            )
        }
        <li>
            <button onClick={this.props.createWidget}>
                Add
            </button>
        </li>
    </ul>
        )
    }
}

export default WidgetListComponent