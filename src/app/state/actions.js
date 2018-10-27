export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const GET_ITEMS = "GET_ITEMS";

export function addItem(item) {
    return {type: ADD_ITEM, item};
}

export function removeItem(item) {
    return {type: REMOVE_ITEM, item};
}

export function getItems() {
    return {type: GET_ITEMS};
}