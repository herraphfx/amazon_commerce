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

export const getBasketTotal = (basket) => 
basket?.reduce((amount, item) => item.price + amount, 0);

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

            //we clone the basket
            let newBasket = [...state.basket];

            //we check to see if product exist
            const index = state.basket.findIndex((basketItem) => basketItem.id = action.id);
                

            if(index >= 0){
                    // item exists in basket
                    newBasket.splice(index, 1);
            }else{
                console.warn(
                    `Cant remove product (id: ${action.id})`
                )
            }

            return { ...state, basket: newBasket }
            break;
        default:
            return state;
    }
}

export default reducer;