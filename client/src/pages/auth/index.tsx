import { useState, SyntheticEvent } from "react"
import axios from "axios";
import {useCookies} from "react-cookie"
import "./style.css"
import { UserErrors } from "../../models/errors";
import { useNavigate } from "react-router-dom";

export const Auth = () => {
    return (
        <div className="auth-container">
            <Register/>
            <Login/>
        </div>
    )
}

const Register = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSubmit = async(event : SyntheticEvent) => {
        event.preventDefault();

        try {
            await axios.post("http://localhost:3001/user/register", {
              username,
              password,
            });
            alert("Registration Completed! Now login.");
          } catch (err) {
            if (err?.response?.data?.type === UserErrors.USERNAME_ALREADY_EXISTS) {
              alert("ERROR: Username already in use");
            } else {
              alert("ERROR: Something went wrong");
            }
          }
    }

    return (
        <div className="auth-card">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="register-username">Username:</label>
                    <input type="text" id="register-username" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    
                    <label htmlFor="register-password">Password:</label>
                    <input type="password" id="register-password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    
                    <button type="submit">Register</button>
                </form>
            </div>
    )
}

const Login = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [, setCookies] = useCookies(["access_token"]);
    const navigate = useNavigate();

    const handleSubmit = async(event : SyntheticEvent) => {
        event.preventDefault();

        try {
            const result = await axios.post("http://localhost:3001/user/login", {
              username,
              password,
            });
            setCookies("access_token", result.data.token);
            localStorage.setItem("userID", result.data.userID);
            navigate("/");
          } catch (err) {
            let errorMessage: string = "";
            switch (err?.response?.data?.type) {
                case UserErrors.NO_USER_FOUND:
                errorMessage = "User doesnt exists";
                break;
                case UserErrors.WRONG_CREDENTIALS: 
                errorMessage = "Wrong username/password combination";
                break;
                default:
                errorMessage = "Something went wrong";
            }

            alert("ERROR: " + errorMessage);
          }
    }

    return (
        <div className="auth-card">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="login-username">Username:</label>
                    <input type="text" id="login-username" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    
                    <label htmlFor="login-password">Password:</label>
                    <input type="password" id="login-password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    
                    <button type="submit">Login</button>
                </form>
            </div>
    )
}