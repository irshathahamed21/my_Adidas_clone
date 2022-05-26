import { actionTypes } from "./actionTypes"




const initialState = {
    products:[]
}

export const Productreducer = ( state = initialState, {type,payload}) => {

    switch(type) {
        case actionTypes.SET_PRODCUT:
            return  {
                ...state, 
                products:payload
            }
        default:
            return state     
    }


}

export const selectedProductReducer = (state ={}, {type,payload}) => {

    switch(type) {
        case actionTypes.SELECT_PRODUCT:
            return  {
                ...state, ...payload
            }
        case actionTypes.REMOVE_SELECTED_PRODUCT:
            return {
                
            } 
        default:
            return state

    }
}


