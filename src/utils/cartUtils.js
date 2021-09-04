export const addToCart = (cartItem, cb) => {
    const item = { ...cartItem, quantity: 1 }
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

export const increase = (item, cb) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    const itemIndex = cart.findIndex((product => product._id === item._id));
    cart[itemIndex].quantity++;
    localStorage.setItem("cart", JSON.stringify(cart));
    cb(cart)
}

export const decrease = (item, cb) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    const itemIndex = cart.findIndex((product => product._id === item._id));
    if (cart[itemIndex].quantity === 1) return
    cart[itemIndex].quantity--;
    localStorage.setItem("cart", JSON.stringify(cart));
    cb(cart)
}