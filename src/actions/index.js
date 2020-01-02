import {ADD_ITEMS,INPUT_ITEMS,DELETE_ITEMS,COMPLETE_ITEMS,EDIT_ITEMS,FILTER_ITEMS, FILTER_TITLE} from '../actionstype'
export const additems = (payload) => {
    return {
        type:ADD_ITEMS, payload
    }
}
export const inputitems = (payload) => {
    return {
        type:INPUT_ITEMS, payload
    } 
}
export const deleteitems = (payload) => {
    return {
        type:DELETE_ITEMS, payload
    }
}
export const completeitems = (x) => {
    return {
        type:COMPLETE_ITEMS, x
    }
}
export const edititems = (payload) => {
    return {
        type:EDIT_ITEMS, payload
    }
}
export const filteritems = (payload) => {
    return {
        type:FILTER_ITEMS, payload
    }
}
export const filtertitle = (payload) => {
    return {
        type:FILTER_TITLE, payload
    }
}