import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import imgLogin from '../../assets/img/logo-02.png'
import navIcon1 from '../../assets/img/nav-icon1.svg'
import navIcon2 from '../../assets/img/nav-icon2.svg'
import navIcon3 from '../../assets/img/nav-icon3.svg'

export const FormModal = () => {

    const formInitialDetails = {
        Account: '',
        Password: '',
        Remember: '',
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }
    return (
        <section className="formModal">
            <Container>
                <form>
                    <div><img src={imgLogin} /></div>
                    <Row>
                        <h4>Account</h4>
                        <input type="text" value={formDetails.Account} placeholder="Account" onChange={(e) => onFormUpdate('Account', e.target.value)} />
                    </Row>
                    <Row>
                        <h4>Password</h4>
                        <input type="text" value={formDetails.Password} placeholder="Password" onChange={(e) => onFormUpdate('Password', e.target.value)} />
                    </Row>
                    <Row>
                        <Col md={6} className="remember_me">
                            <input type="checkbox" value={formDetails.Remember} placeholder="Remember" onChange={(e) => onFormUpdate('Remember', e.target.value)} />
                            <span>Remember me!</span>
                        </Col>
                        <Col md={6} className="forgot_pass">
                            <a href="#">Forgot password?</a>
                        </Col>
                    </Row>
                    <button className="loginButton">LOGIN</button>
                    <h5>Don't have an account <a href="#">Register?</a></h5>
                    {/* <Row>
                        <div className="social-icon">
                            <a href="#"><img src={navIcon1} alt="" /></a>
                            <a href="#"><img src={navIcon2} alt="" /></a>
                            <a href="#"><img src={navIcon3} alt="" /></a>
                        </div>
                    </Row> */}
                </form>
            </Container>
        </section>
    )
}