import * as ACTION_TYPES from "./actionTypes";
const initialState = {
    cartItemNo: 0,
    products: []
}
const rootReducer = (appState = initialState, { type, payload }) => {
    switch (type) {
        case ACTION_TYPES.SET_CART_ITEM_NO:
            return {
                ...appState,
                cartItemNo: payload
            }
        case ACTION_TYPES.SET_PRODUCTS:
            return {
                ...appState,
                products: payload
            }
        default:
            return appState;
    }
}

export default rootReducer;