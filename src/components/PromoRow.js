import "./PromoRow.css";
const getDate = (date) => {
    let format = new Date(date);
    return `${format.getDate()}/${format.getMonth()}/${format.getFullYear()}`
}
const PromoRow = ({ item, sl }) => {
    let createDate = getDate(item.createdAt);
    let startDate = getDate(item.start);
    let endDate = getDate(item.end)
    return (<div className="col-sm-12 promo-row">
        <div className="">
            <span style={{ marginBottom: "20px" }}>
                <span style={{ marginRight: "20px" }}>{sl}</span> {item.name}
                <span style={{ float: "right" }}>
                    {item.active ? <button className="active-btn">Active</button> : <button className="deactive-btn">Deactive</button>}
                </span>
            </span>
            <hr />
            <div className="row">
                <div className="col-sm-3">Created At: {createDate}</div>
                <div className="col-sm-2">Usages: {item.useTime}</div>
                <div className="col-sm-3">Discount: {item.discount}%</div>
                <div className="col-sm-2">Start Date: {startDate}</div>
                <div className="col-sm-2">End Date: {endDate}</div>
            </div>
        </div>
    </div>)
}

export default PromoRow;