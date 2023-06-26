import { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { motion } from "framer-motion";
import imgLogin from '../../assets/img/logo-02.png';
import LoginService from '../Services/LoginService';
import { Backdrop } from "../Backdrop";
import { useNavigate } from "react-router-dom";
import navIcon1 from '../../assets/img/nav-icon1.svg'
import navIcon2 from '../../assets/img/nav-icon2.svg'
import navIcon3 from '../../assets/img/nav-icon3.svg'

export const FormModal = () => {
    const [stateLogin, setStateLogin] = useState({ userName: null, password: null });
    const [stateSignup, setStateSignup] = useState({ userName: null, password: null, nickname: null});
    const [loginResponse, setLoginResponse] = useState(null);
    const [show, setShow] = useState(true);
    const [modalOpenRegister, setModalOpenRegister] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const validateForm = () => {
        let errors = {};
        
        if (!stateLogin.userName) {
          errors.userName = 'Username is required';
        }
        
        if (!stateLogin.password) {
          errors.password = 'Password is required';
        }
        
        setFormErrors(errors);
        
        return Object.keys(errors).length === 0;
      };
    
        const handleLogin = (e) => {
            e.preventDefault();
            if (validateForm()) {
                LoginService.login(stateLogin.userName, stateLogin.password)
                .then((res) => {
                    console.log(res);
                    localStorage.setItem('isLogin', true);
                    window.location.reload();
                    // window.location.href('/');
                })
                .catch((err) => {
                    console.log(err);
                    setLoginResponse(err.response.data);
                });
            }
    }
    const handleSignup = (e) => {
        e.preventDefault();
        LoginService.signup(stateSignup.userName, stateSignup.password, stateSignup.nickname)
        .then((res) => {
            console.log(res);
            setShow(true)
        })
        .catch((err) => {
            console.log(err);
            setLoginResponse(err.response.data);
        });
    }

    const closeModal = () => {
        setModalOpenRegister(false);
    };

    const open = () => {
            setModalOpenRegister(true);
    }
    const isLogin = localStorage.getItem('isLogin');

    const HandleOnChangeStateLogin = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        let data = { ...stateLogin };
        data[name] = value;
        setStateLogin(data);
    }
    const HandleOnChangeStateSignup = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        let data = { ...stateSignup };
        data[name] = value;
        setStateSignup(data);
    }
    return (
        <section className="formModal">
            <Container>
                {
                    show ? 
                    <>
                        <form>
                            <div><img src={imgLogin} alt="Login" /></div>
                            <Row>
                                <h4>Account</h4>
                                <input type="text" name="userName" placeholder="Account" value={stateLogin.userName} onChange={(e) => HandleOnChangeStateLogin(e)} />
                            </Row>
                            <Row>
                                <h4>Password</h4>
                                <input type="password" name="password" placeholder="Password" value={stateLogin.password} onChange={(e) => HandleOnChangeStateLogin(e)} />
                            </Row>
                            <Row>
                                <Col md={6} className="remember_me">
                                    <input type="checkbox" placeholder="Remember" />
                                    <span>Remember me!</span>
                                </Col>
                                <Col md={6} className="forgot_pass">
                                    <a href="#">Forgot password?</a>
                                </Col>
                            </Row>
                            <Col md={6} className="">
                                {loginResponse && <p>{loginResponse}</p>}
                            </Col>
                            <button className="loginButton"  
                                onClick={(e) => {
                                    handleLogin(e);
                                }}>
                                Sign In
                            </button>
                            <h5>Don't have an account
                                <button className="changeLogin" onClick={(e) => { e.preventDefault(); setShow(!show); }}>Signup Now!</button>
                                {modalOpenRegister && <Modal modalOpenRegister={modalOpenRegister} handleClose={closeModal} />}
                            </h5>
                        </form>
                    </>
                    :
                    <>
                        <form>
                        <div><img src={imgLogin} alt="Login" /></div>
                        <Row>
                            <h4>Account</h4>
                            <input type="text" name="userName" placeholder="Account" value={stateSignup.userName} onChange={(e) => HandleOnChangeStateSignup(e)} />
                        </Row>
                        <Row>
                            <h4>Password</h4>
                            <input type="password" name="password" placeholder="Password" value={stateSignup.password} onChange={(e) => HandleOnChangeStateSignup(e)} />
                        </Row>
                        <Row>
                            <h4>NickName</h4>
                            <input type="text" name="nickname" placeholder="Nickname" value={stateSignup.nickname} onChange={(e) => HandleOnChangeStateSignup(e)} />
                        </Row>
                        <Col md={6} className="">
                            {loginResponse && <p>{loginResponse}</p>}
                        </Col>
                        <Row>
                            <button className="loginButton"
                                onClick={(e) => {e.preventDefault(); handleSignup(e);}}>
                                Sign Up
                            </button>
                            <h5>Don't have an account
                                <button className="changeLogin" onClick={(e) => { e.preventDefault(); handleShow() }}>Login Now!</button>
                            </h5>
                        </Row>
                        
                </form>
                    </>
                }
                <h5 className="errs">
                    {formErrors.userName && <p>{formErrors.userName}</p>}
                    {formErrors.password && <p>{formErrors.password}</p>}
                </h5>
                
            </Container>
        </section>
    );
};