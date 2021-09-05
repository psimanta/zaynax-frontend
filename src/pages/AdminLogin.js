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
        <div style={{ paddingTop: "130px", }} className="row">
            <div className="col-sm-4 offset-sm-4">
                <center><h4>Admin Panel</h4></center>
                <form onSubmit={handleSubmit} className="form">
                    <label htmlFor="username">User ID</label>
                    <input name="username" value={username} required onChange={handleChange} className="form-control" />
                    <label htmlFor="password">Password</label>
                    <input name="password" value={password} required onChange={handleChange} className="form-control" />
                    <center><button type="submit" className="submit-btn">Sign in</button>
                    </center>
                </form>
                <div style={{ borderRadius: "8px", border: "solid 1px black", padding: "5px", marginTop: "10px" }}>
                    <h6>Use following credentials:</h6>
                    <h6>User ID</h6>
                    <p>TEST2021</p>
                    <h6>Password</h6>
                    <p>EASY1234</p>
                </div>
            </div>

        </div>
    )
}
export default withRouter(AdminLogin);