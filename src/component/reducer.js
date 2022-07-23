export const initialState = {
    basket: [],
    user: null
};

function reducer(state, action) {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET':
            //logic for adding to basket
            return { ...state }
            break;
        case 'REMOVE_FROM_BASKET':
            //Logic for removing
            return { state }
            break;
        default:
            return state;
    }
}

export default reducer;