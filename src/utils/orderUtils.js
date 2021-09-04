import { ORDER_ENDPOINT } from "./apiUrl";
import axios from "axios";
import { userInfo } from "./authUtils";

export const getOrders = (cb) => {
    const token = userInfo().token;
    axios.get(ORDER_ENDPOINT, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
        .then(response => cb(response.data));
}