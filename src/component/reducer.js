export const initialState = {
    basket: [],
};

function reducer(state, action) {
    switch(action.type) {
        case 'ADD_TO_BASKET':
            //logic for adding to basket
            break;
        case 'REMOVE_FROM_BASKET':
            //Logic for removing
            break;
        default:
            return state;
    }
}

export default reducer;