import React from "react";
import {Link} from "react-router-dom";

const RegisterPage = () => {
    // todo some stuff for register
    return (
        <div className="auth-page">
            {/* todo there might be logo*/}
            <h2>Register</h2>
            <form className="email-login-form">
                <p>Your username</p>
                <input name="username" placeholder="Set a username for your profile"/>
                <p>Your email</p>
                <input name="email" placeholder="Type your email..." type="email"/>
                <p>Password</p>
                <input name="password" placeholder="Type your password..." type="password"/>
                <p>Confirmed password</p>
                <input name="password" placeholder="Confirm your password..." type="password"/>
                {/* todo make a cheeecks box */}
                <button>Sign up</button>
            </form>
            <h2 className="divider-h2">
                <div className="line"/>
                <span>OR</span>
                <div className="line"/>
            </h2>
            <button className="oauth">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                    width="15"
                    height="15"
                    alt="Google"
                />
                Sign up with Google
            </button>
            <p>Already have an account? <Link to="/login">Sign in</Link></p>

        </div>
    )
}

export default RegisterPage;
