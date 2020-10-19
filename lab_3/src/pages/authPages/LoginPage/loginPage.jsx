import React from "react";
import "../stylesAuthPage.scss";
import { Link } from "react-router-dom";
const LoginPage = () => {
    // todo some stuff for login
    return (
        <div className="auth-page">
            {/* todo there might be logo*/}
            <h2>Sign in to continue</h2>
            <form className="email-login-form">
                <p>Email or username</p>
                <input name="email-username" placeholder="Type your email or username..."/>
                <div className="over-password"><p>Password</p> <a href="/forgot-password">Forgot password?</a></div>
                <input name="password" placeholder="Type your password..." type="password"/>
                <button>Sign in</button>
            </form>
            <h2 className="divider-h2">
                <div className="line"/>
                <span>OR</span>
                <div className="line"/>
            </h2>
            {/* todo add google oauth */}
            <button className="oauth">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                    width="15"
                    height="15"
                    alt="Google"
                />
                Sign in with Google
            </button>
            <p>New to us? <Link to="/register">Sign up</Link></p>


        </div>
    )
}

export default LoginPage;