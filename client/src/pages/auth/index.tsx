import { useState, SyntheticEvent } from "react"
import axios from "axios";
import "./style.css"
import { UserErrors } from "../../models/errors";

export const Auth = () => {
    return (
        <div className="">
            <Register/>
            <Login/>
        </div>
    )
}

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async(event : SyntheticEvent) => {
        event.preventDefault();

        try {
            await axios.post("http://localhost:3001/auth/register", {
              username,
              password,
            });
            alert("Registration Completed! Now login.");
          } catch (err) {
            if (err.response.data.type === UserErrors.NO_USER_FOUND) {
              alert("ERROR: No user found");
            } else {
              alert("ERROR: Something went wrong");
            }
          }
    }

    return (
        <div className="">
            <form action="" onSubmit={handleSubmit}>
                <h2>Register</h2>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <label htmlFor="password">Password::</label>
                <input type="password" id="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

const Login = () => {
    return (
        <div className=""></div>
    )
}