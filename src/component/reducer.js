export const initialState = {
    basket: [
        {
        id: '1234',
        title: 'Net10 Alcatel TCL A3, 32GB',
        price: '39.40',
        rating: 3,
        image: 'https://m.media-amazon.com/images/I/61-fB+GkifL._AC_SX679_.jpg'
    },
    {
        id: '1234',
        title: 'Net10 Alcatel TCL A3, 32GB',
        price: '39.40',
        rating: 3,
        image: 'https://m.media-amazon.com/images/I/61-fB+GkifL._AC_SX679_.jpg'
    }
],
    user: null
};

function reducer(state, action) {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET':
            //logic for adding to basket
            return { ...state,
            basket: [...state.basket, action.item]}
            break;
        case 'REMOVE_FROM_BASKET':
            //Logic for removing
            return { ...state }
            break;
        default:
            return state;
    }
}

export default reducer;