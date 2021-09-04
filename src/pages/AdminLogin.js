import { useState } from "react";
import { withRouter } from "react-router-dom";
import { USER_ENDPOINT } from "../utils/apiUrl";
import { authenticate } from "../utils/authUtils";
import axios from "axios";
import "./AdminLogin.css";


const AdminLogin = ({ history }) => {
    const [values, setValues] = useState({
        username: "",
        password: "",
    })

    const { username, password } = values;

    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.post(`${USER_ENDPOINT}/admin/login`, values, {
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then(response => {
                if (response.status === 200) {
                    authenticate(response.data.token, () => {
                        history.push("/orders")
                    })
                } else {
                    alert("Something Went Wrong!")
                }
            })
            .catch(error => {
                let errMsg = "Something went wrong!";
                if (error.response) errMsg = error.response.data;
                alert(errMsg);
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">User ID</label>
                <input name="username" value={username} required onChange={handleChange} />
                <label htmlFor="password">Password</label>
                <input name="password" value={password} required onChange={handleChange} />
                <button type="submit">Sign in</button>
            </form>
        </div>
    )
}
export default withRouter(AdminLogin);