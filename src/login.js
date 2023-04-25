import React from "react";


const LoginPage = () => {
    return (
        <div>
            <h2>Login</h2>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required />
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required />
            <a href="/start">
                <button type="submit" onclick="login()">Login</button>
            </a>
        </div>
    );
};

export default LoginPage;