import { useState } from "react";
import { withRouter, Redirect } from "react-router-dom";
import Modal from "../components/Modal";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { USER_ENDPOINT } from "../utils/apiUrl";
import { authenticateUser } from "../utils/authUtils";
import axios from "axios";
import "./AdminLogin.css";


const UserLogin = ({ history }) => {
    const [values, setValues] = useState({
        username: "",
        password: "",
    })

    const { username, password } = values;
    const [showModal, setShowModal] = useState(false);

    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.post(`${USER_ENDPOINT}/signUp`, values, {
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then(response => {
                if (response.status === 201) {
                    authenticateUser(response.data.token, () => {
                        setShowModal(true);
                    })

                } else {
                    alert("Something Went Wrong!")
                }
            })
            .catch(error => {
                let errMsg = "Something went wrong!";
                alert(errMsg);
            })
    }

    return (
        <div>
            {showModal ? (<Modal setShowModal={() => { history.push("/cart") }}><CheckCircleIcon fontSize="large"></CheckCircleIcon>
                <br />Your Signed Up
                <br /> Successfully
            </Modal>
            ) : ""}
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Number</label>
                <input name="username" value={username} required onChange={handleChange} />
                <label htmlFor="password">Password</label>
                <input name="password" value={password} required onChange={handleChange} />
                <button type="submit">Sign up</button>
            </form>
        </div>
    )
}
export default withRouter(UserLogin);