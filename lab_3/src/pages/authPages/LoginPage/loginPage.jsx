import React from "react";
import "../stylesAuthPage.scss";
import {Link, useHistory} from "react-router-dom";
import transformData from '../../../services/transformData';
import auth from '../../../services/auth';
import {loggedIn} from "../../../redux/actions";
import {connect} from "react-redux";
const LoginPage = ({loggedIn}) => {
    const history = useHistory();
    const logInHandler = (e) => {
        e.preventDefault();

        const data = transformData(e.target);


        console.log(data);
        auth('http://localhost:5000/users/login', data).then(r => {
            localStorage.setItem('token', r.token);
            loggedIn()
            history.push('/');
        });
    }

    return (
        <div className="auth-page">
            {/* todo there might be logo*/}
            <h2>Sign in to continue</h2>
            <form onSubmit={logInHandler} className="email-login-form">
                <p>Email or username</p>
                <input name="email" placeholder="Type your email or username..."/>
                <div className="over-password"><p>Password</p> <a href="/forgot-password">Forgot password?</a></div>
                <input name="password" placeholder="Type your password..." type="password"/>
                <button type="submit">Sign in</button>
            </form>
            {/*<h2 className="divider-h2">*/}
            {/*    <div className="line"/>*/}
            {/*    <span>OR</span>*/}
            {/*    <div className="line"/>*/}
            {/*</h2>*/}
            {/* todo add google oauth */}
            {/*<button className="oauth">*/}
            {/*    <img*/}
            {/*        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"*/}
            {/*        width="15"*/}
            {/*        height="15"*/}
            {/*        alt="Google"*/}
            {/*    />*/}
            {/*    Sign in with Google*/}
            {/*</button>*/}
            <p>New to us? <Link to="/register">Sign up</Link></p>


        </div>
    )
}

const mapDispatchToProps = {
    loggedIn
}

export default connect(null, mapDispatchToProps)(LoginPage);
