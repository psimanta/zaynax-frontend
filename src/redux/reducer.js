import * as ACTION_TYPES from "./actionTypes";
const initialState = {
    cartItemNo: 0
}
const rootReducer = (appState = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.SET_CART_ITEM_NO:
            return {
                ...appState,
                cartItemNo: action.payload
            }
        default:
            return appState;
    }
}

export default rootReducer;