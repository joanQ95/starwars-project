import {GET_PEOPLE} from '../actions/index'

const initialState = {
    people: [],
}

export default function reducer( state = initialState, action) {
    switch(action.type){
        case GET_PEOPLE:
            return{
                ...state,
                people: action.payload
            }
        default:
			return state;
    }
}