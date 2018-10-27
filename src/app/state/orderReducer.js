import {ADD_ITEM, REMOVE_ITEM} from './actions.js';

export function order(state = {cart: []}, action) {
    switch (action.type) {
        case ADD_ITEM:
            state.cart.push(action.item);
            return state;
        case REMOVE_ITEM:
            state.cart.remove(action.item);
            return state;
        default:
            return state;
    }
}