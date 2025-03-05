/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { UserErrors } from "../../models/errors";
import { IShopContext, ShopContext } from "../../context/shop-context";

export const AuthPage = () => {
    return (
        <div className="auth-container">
            <Register/>
            <Login/>
        </div>
    )
}

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
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
  };

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
  const [_, setCookies] = useCookies(["access_token"]);
  const { setIsAuthenticated } = useContext<IShopContext>(ShopContext);

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await axios.post("http://localhost:3001/auth/login", {
        username,
        password,
      });

      setCookies("access_token", result.data.token);
      window.localStorage.setItem("userID", result.data.userID);
      setIsAuthenticated(true);
      navigate("/");
    } catch (err) {
      let errorMessage: string = "";
      switch (err.response.data.type) {
        case UserErrors.USERNAME_ALREADY_EXISTS:
          errorMessage = "User already exists";
          break;
        case UserErrors.WRONG_CREDENTIALS:
          errorMessage = "Wrong username/password combination";
          break;
        default:
          errorMessage = "Something went wrong";
      }

      alert("ERROR: " + errorMessage);
    }
  };

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