import WidgetListComponent from "../components/WidgetListComponent";
import {connect} from 'react-redux'
import WidgetService from '../services/WidgetService'

const service = WidgetService.getInstance();

const stateToPropMapper = state => ({
    widgets: state.widgets
})

const propsToDispatcher = dispatch => ({
    loadWidgets: () => {
        service
            .findAllWidgets()
            .then(widgets => dispatch({
                type: "FIND_ALL_WIDGETS",
                widgets: widgets
            }))
    },
    updateWidget: widget => {
        dispatch({type: 'UPDATE_WIDGET', widget: widget})
    },
    deleteWidget: (wid) => {
        service
            .deleteWidget(wid)
            .then(widgets => dispatch({
                type: 'DELETE_WIDGET',
                widgets: widgets
            }))
    },
    createWidget: () => {
        dispatch({
            type: 'CREATE_WIDGET'
        })
    }
})

const WidgetListContainer = connect(
    stateToPropMapper, propsToDispatcher
)
(WidgetListComponent)

export default WidgetListContainer