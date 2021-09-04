import { ORDER_ENDPOINT } from "./apiUrl";
import axios from "axios";

export const getOrders = (cb) => {
    const token = null;
    axios.get(ORDER_ENDPOINT, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
        .then(response => cb(response.data));
}