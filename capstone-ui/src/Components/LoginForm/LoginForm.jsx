import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import "./LoginForm.css";

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { updateUser } = useContext(UserContext);

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/users/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
                credentials: "include"
            });

            if (response.ok) {
                const data = await response.json();
                const loggedInUser = data.user;

                updateUser(loggedInUser);

                navigate("/");
            }
            else {
                const data = await response.json();
                const error = data.error;
                alert("Login Failed: " + error);
            }
        }
        catch (error) {
            alert("Login Failed: " + error);
        }
    };
    

    return (
        <div className="login-form-container">
            <form className="login-form" onSubmit={handleLogin}>
                <h2>Login</h2>
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
                <button type="submit">Login</button>
                <p>New to the Website? <Link to="/signup">Sign Up</Link></p>
            </form>
        </div>
    );
};

export default LoginForm;