import {ADD_ITEM, REMOVE_ITEM} from './actions.js';

export function order(state = {cart: []}, action) {
    let cart = state.cart.slice();
    switch (action.type) {
        case ADD_ITEM:
            cart.push(action.item);
            return Object.assign({}, state,
                {
                    cart: cart
                });
        case REMOVE_ITEM:
            const index = cart.indexOf(action.item);
            if (index > -1) {
                cart.splice(index, 1);
            }
            return Object.assign({}, state,
                {
                    cart: cart
                });
        default:
            return state;
    }
}