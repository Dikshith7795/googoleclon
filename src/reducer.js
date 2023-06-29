export const initialState = {
    term:null
}

export const actionTypes = {
    SET_SEARCH_TERM: "set_search_term"
}

const reducer = ( state, action)=> {
    switch(action.type) {
        case "set_search_term":
            return{
                ...state,
                term:action.term
            };
            default :
            return state

    }
}

export default reducer;