const getColor = (name) => {
    switch (name) {
        case "All":
            return ["#FFF700", "black"];
        case "Cancelled":
            return ["#FF004E", "white"];
        case "Confirmed":
            return ["#21AA00", "white"];
        case "Pending":
            return ["#0099FF", "white"];
        default:
            return ["white", "black"];
    }
}

export default getColor;