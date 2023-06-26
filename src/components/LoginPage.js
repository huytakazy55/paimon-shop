import React from "react";
import { Container } from "react-bootstrap";
import LoginService from "./Services/LoginService";
import { Link, Outlet } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const LoginPage = () => {
    const [signIn, setSignIn] = useState(true);
    const [stateLogin, setStateLogin] = useState({ userName: null, password: null });
    const [loginResponse, setLoginResponse] = useState(null);
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();

        LoginService.login(stateLogin.userName, stateLogin.password)
            .then((res) => {
                console.log(res);
                localStorage.setItem('isLogin', true);
                //navigate('/'); // Điều hướng đến trang "Home" sau khi đăng nhập thành công
                // window.location.href('/');
            })
            .catch((err) => {
                console.log(err);
                setLoginResponse(err.response.data);
            });
    }
    const handleSignup = (e) => {
        e.preventDefault();

        LoginService.signup(stateLogin.userName, stateLogin.password, stateLogin.nickname)
            .then((res) => {
                console.log(res);
                localStorage.setItem('isLogin', true);
                // window.location.href('/');
            })
            .catch((err) => {
                console.log(err);
                setLoginResponse(err.response.data);
            });
    }

    const isLogin = localStorage.getItem('isLogin');

    const HandleOnChangeStateLogin = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        let data = { ...stateLogin };
        data[name] = value;
        setStateLogin(data);
    }

    return (
        <div className="LoginBody">
            <Container className="LoginContainer">
                <div className={`SignUpContainer ${signIn ? 'signinIn' : ''}`}>
                    <form>
                        <h1>Create Account</h1>
                        <input type='text' placeholder='Name' />
                        <input type='email' placeholder='Email' />
                        <input type='password' placeholder='Password' />
                        <button>Sign Up</button>
                    </form>
                </div>

                <div className={`SignInContainer ${signIn ? 'signinIn' : ''}`}>
                    <form>
                        <h1>Sign in</h1>
                        <input type="text" name="userName" placeholder="Account" value={stateLogin.userName} onChange={(e) => HandleOnChangeStateLogin(e)} />
                        <input type="password" name="password" placeholder="Password" value={stateLogin.password} onChange={(e) => HandleOnChangeStateLogin(e)} />
                        <a href='#'>Forgot your password?</a>
                        {isLogin === true ? (<>Login success</>) : 
                        <button onClick={(e) => handleLogin(e)}>Sign In</button>}
                    </form>
                </div >

                <div className={`OverlayContainer ${signIn ? 'signinIn' : ''}`} >
                    <div className="Overlay" signinIn={signIn}>

                    <div className={`LeftOverlayPanel ${signIn ? 'signinIn' : ''}`}>
                        <h1>Welcome Back!</h1>
                        <p className="Paragraph">
                            To keep connected with us please login with your personal info
                        </p>
                        <button onClick={() => setSignIn(true)}>
                            Sign In
                        </button>
                        </div>

                        <div className={`RightOverlayPanel ${signIn ? 'signinIn' : ''}`}>
                            <h1>Hello, Friend!</h1>
                            <p className="Paragraph">
                                Enter Your personal details and start journey with us
                            </p>
                                <button onClick={() => setSignIn(false)}>
                                    Sign Up
                                </button> 
                        </div>
                    </div>
                </div>

            </Container>
        </div>
    )
}
export default LoginPage;
