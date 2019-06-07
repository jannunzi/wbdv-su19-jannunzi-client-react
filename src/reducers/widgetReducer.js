import widgets from '../data/widgets'

// reducer => state => store => provider => container => map to props => components

const widgetReducer = (state={widgets: []}, action) => {
    switch (action.type) {
        case 'DELETE_WIDGET':
        case "FIND_ALL_WIDGETS":
            return {
                widgets: action.widgets
            }
            break;
        case 'CREATE_WIDGET':
            return {
                widgets: [
                    ...state.widgets,
                    {
                        id: (new Date()).getTime(),
                        name: 'New Widget',
                        type: 'HEADING'
                    }
                ]
            }
            break;
        case 'UPDATE_WIDGET':
            return {
                widgets: state.widgets.map(widget => widget.id == action.widget.id ? action.widget : widget)
            }
            break;
        default:
            return state;
    }
    return state;
}

export default widgetReducer