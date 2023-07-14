import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import "./SignupForm.css";

const SignupForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [zipcode, setZipcode] = useState("");
    const { updateUser } = useContext(UserContext);

    const navigate = useNavigate();

    const isValidZip = (zip) => {
        return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zip);
    };

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            if (!isValidZip(zipcode)) {
                alert("Invalid ZIP code");
                return;
            }

            const response = await fetch('http://localhost:3001/users', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password, zipcode }),
                credentials: "include"
            });

            if (response.ok) {
                const data = await response.json();
                const loggedInUser = data.user

                setUsername("");
                setPassword("");
                setZipcode("");

                updateUser(loggedInUser);

                navigate("/");
            }
            else {
                alert('Signup failed');
            }
        }
        catch(error) {
            alert('Signup failed: ' + error);
        }
    };

    return (
        <div className="signup-form-container">
            <form className="signup-form" onSubmit={handleSignup}>
                <h2>Sign Up</h2>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input 
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="zipcode">Zip Code:</label>
                    <input 
                        type="number" 
                        id="zipcode"
                        value={zipcode}
                        onChange={(e) => setZipcode(e.target.value)}
                        required 
                    />
                </div>
                <button type="submit">Sign Up</button>
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </form>
        </div>
    );
};

export default SignupForm;