import * as ACTION_TYPES from "./actionTypes";
import axios from "axios";
import { ORDER_ENDPOINT, PRODUCT_ENDPOINT } from "../utils/apiUrl";

export const setCartItemNo = itemNo => {
    return {
        type: ACTION_TYPES.SET_CART_ITEM_NO,
        payload: itemNo
    }
}

export const setProductsToStore = products => {
    return {
        type: ACTION_TYPES.SET_PRODUCTS,
        payload: products
    }
}

export const getDbProducts = () => dispatch => {
    axios.get(PRODUCT_ENDPOINT)
        .then(response => {
            dispatch(setProductsToStore(response.data));
        })
}

export const getSearchProducts = (value) => dispatch => {
    axios.get(`${PRODUCT_ENDPOINT}/search?like=${value}`)
        .then(response => dispatch(setProductsToStore(response.data)))
}