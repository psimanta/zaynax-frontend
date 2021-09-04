export const addToCart = (item, cb) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
        cart = []
    }
    const exists = cart.filter(product => product._id === item._id)[0];
    if (exists) return
    else {
        cart.push(item);
        localStorage.setItem("cart", JSON.stringify(cart));
        cb(cart.length)
    }
}

export const removeFromCart = (item, cb1, cb2) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
        cart = []
    }
    const newCart = cart.filter(product => product._id !== item._id);
    localStorage.setItem("cart", JSON.stringify(newCart));
    cb1(newCart);
    cb2(newCart.length)
}