import Layout from "./Layout";
import Modal from "../components/Modal";
import { useState } from "react";
import "./AddProduct.css";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const AddPromo = () => {
    const [values, setValues] = useState({
        name: "",
        start: "",
        end: "",
        discount: "",
        useTime: "",
        active: false,
    })
    const [showModal, setShowModal] = useState(false);

    const { name, start, end, discount, useTime, active } = values

    const handleChange = e => {
        const value = e.target.name === "active" ? !active : e.target.value;
        setValues({
            ...values,
            [e.target.name]: value,
        })
    }

    return (
        <Layout>
            {showModal ? (<Modal setShowModal={() => { setShowModal(false) }}><CheckCircleIcon fontSize="large"></CheckCircleIcon>
                <br />Your Promo Added
                <br /> Successfully </Modal>) : ""}
            <div className="row">
                <div className="form offset-sm-3 col-sm-3">
                    <label htmlFor="name">Promo Code</label>
                    <input name="name" value={name} className="form-control" onChange={handleChange} />
                    <label htmlFor="start">Start Date</label>
                    <input name="start" value={start} className="form-control" type="date" onChange={handleChange} />
                    <label htmlFor="end">End Date</label>
                    <input name="end" value={end} className="form-control" type="date" onChange={handleChange} />
                    <label htmlFor="discount">Discount Rate</label>
                    <input name="discount" value={discount} className="form-control" onChange={handleChange} type="number" />
                    <label htmlFor="useTime">Use Time</label>
                    <input name="useTime" value={useTime} className="form-control" onChange={handleChange} type="number" />
                    <br />
                    Active
                    <span className="onoff" style={{ float: "right" }}>
                        <input type="checkbox" name="active" checked={active} id="active" onChange={handleChange} /><label htmlFor="active"></label>
                    </span>
                    <br />
                    <center>
                        <button type="submit" className="submit-btn">Add</button>
                    </center>
                </div>
            </div>
        </Layout>
    )
}

export default AddPromo;