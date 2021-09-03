import { useState } from "react";
import Layout from "./Layout"
import Modal from "../components/Modal";
import "./AddProduct.css";
import axios from "axios";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
const API = process.env.REACT_APP_API_URL

const AddProduct = () => {
    const [values, setValues] = useState({
        name: "",
        price: "",
        discount: "",
        shipping: "",
        color: "",
        size: "",
        formData: new FormData()
    })
    const [image, setImage] = useState({ preview: "", raw: "" });
    const [showModal, setShowModal] = useState(false);

    const { name, price, discount, shipping, color, size, formData } = values

    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
        formData.set(e.target.name, e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        const token = null
        axios.post(`http://localhost:3001/api/v1/product`, formData, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
            .then(response => {
                setValues({
                    name: "",
                    price: "",
                    discount: "",
                    shipping: "",
                    color: "",
                    size: "",
                    formData: new FormData()
                })
                setImage({ preview: "", raw: "" });
                setShowModal(true);
            })
            .catch(error => {
                let errMsg = "Something went wrong!";
                if (error.response) errMsg = error.response.data;
                alert(errMsg);
            })
    }

    const handleImageChange = e => {
        if (e.target.files.length) {
            setImage({
                preview: URL.createObjectURL(e.target.files[0]),
                raw: e.target.files[0]
            });
            formData.set(e.target.name, e.target.files[0]);
        }
    }

    return (
        <Layout>
            {showModal ? (<Modal setShowModal={() => { setShowModal(false) }}><CheckCircleIcon fontSize="large"></CheckCircleIcon>
                <br />Your Product Added
                <br /> Successfully </Modal>) : ""}
            <div className="row">
                <div className="form offset-sm-3 col-sm-3 ">
                    <form onSubmit={handleSubmit}>
                        <input type="file" id="file" name="image" accept="image/*" onChange={handleImageChange} required />
                        <label htmlFor="file" className="upload-btn">
                            {image.preview ? (<img src={image.preview} alt="Uploaded" className="upload-img" />) : (<center>
                                <br /><br /><br />
                                <span className="upload-btn-txt">
                                    <b>Upload
                                        <br /> Product Image
                                        <br />
                                    </b>
                                    Image Size Must Be
                                    <br />
                                    500x500
                                </span>
                            </center>)}

                        </label>
                        <br />
                        {console.log(image)}
                        <label htmlFor="name">Product Name</label>
                        <input className="form-control" name="name" value={name} required onChange={handleChange} />
                        <label htmlFor="pricec">Product Price (Before Discount)</label>
                        <input className="form-control" name="price" value={price} type="number" required onChange={handleChange} />
                        <label htmlFor="discount">Discount Rate</label>
                        <input className="form-control" name="discount" value={discount} type="number" required onChange={handleChange} />
                        <label htmlFor="shipping">Shipping Charge</label>
                        <input className="form-control" name="shipping" type="number" value={shipping} required onChange={handleChange} />
                        <label htmlFor="color">Color</label>
                        <input className="form-control" name="color" value={color} required onChange={handleChange} />
                        <label htmlFor="size">Size</label>
                        <input className="form-control" name="size" value={size} required onChange={handleChange} />
                        <center>
                            <button type="submit" className="submit-btn">Add Product</button>
                        </center>
                    </form>
                </div>
            </div>
        </Layout >
    )
}
export default AddProduct;