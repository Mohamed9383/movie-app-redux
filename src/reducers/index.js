import {ADD_ITEMS, DELETE_ITEMS, EDIT_ITEMS, FILTER_ITEMS,FILTER_TITLE} from '../actionstype'
import { Film } from "../components/Film"
const initialState = {

    minRate: 0,
    MoviesList: Film,
    rateTitle: "",
}
const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_ITEMS : 
            return {...state,MoviesList:state.MoviesList.concat(action.payload)}
        case DELETE_ITEMS:
            return {...state,MoviesList:state.MoviesList.filter(e=>(e.id!==action.payload))}
        case EDIT_ITEMS:
            return {...state,MoviesList:state.MoviesList.map(e=>(e.id===action.payload.id?{...e, ...action.payload.movie}:e))}
        case FILTER_ITEMS : 
            return {...state,minRate:action.payload}
        case FILTER_TITLE : 
            return {...state,rateTitle:action.payload}
        default:
            return state;
    }


}
export default rootReducer;