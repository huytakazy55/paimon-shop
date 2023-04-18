import { Container, Row, Col } from "react-bootstrap"
import logo from '../assets/img/logo-02.png';
import { MailchimpForm } from './MailchimpForm'

import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <MailchimpForm />
                    <Col sm={6}>
                        <img src={logo} alt="logo"/>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="#"><img src={navIcon1} alt="" /></a>
                            <a href="#"><img src={navIcon2} alt="" /></a>
                            <a href="#"><img src={navIcon3} alt="" /></a>
                        </div>
                        <p>CopyRight 2023. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}