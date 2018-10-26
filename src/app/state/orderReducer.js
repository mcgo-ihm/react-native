import {ADD_ITEM, REMOVE_ITEM} from './actions.js';

export function order(state = [], action) {
    switch (action.type) {
        case ADD_ITEM:
            state.push(action.item);
            return state;
        case REMOVE_ITEM:
            state.remove(action.item);
            return state;
        default:
            return state;
    }
}