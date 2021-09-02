const getBtnColor = (name) => {
    switch (name) {
        case "Cancelled":
            return ["#FF004E", "white"];
        case "Confirmed":
            return ["#FFF700", "black"];
        default:
            return ["white", "black"];
    }
}

export default getBtnColor;