import { useState, useEffect } from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import { motion } from "framer-motion"
import logo from '../assets/img/logo-02.png';
import Modal from '../components/Modal/index'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
import { Link, Outlet } from 'react-router-dom';

export const NavBar = () => {
    const [activeLink, setactiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50) {
                setScrolled(true);
            }else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])
    const onUpdateActiveLink = (value) => {
        setactiveLink(value);
    }
    return (
        <Navbar expand="lg" className={scrolled ? "Scrolled" : ""}>
        <Container>
            <Navbar.Brand href="/">
                <img src={logo} alt='Logo' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                {/* <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link> */}
                <Link to='/' className={activeLink === 'home' ? 'active navbar-link nav-link' : 'navbar-link nav-link'} onClick={() => onUpdateActiveLink('home')}>Home</Link>
                <Link to='/Musicplayer' className={activeLink === 'musicplayer' ? 'active navbar-link nav-link' : 'navbar-link nav-link'} onClick={() => onUpdateActiveLink('musicplayer')}>Musicplayer</Link>
                <Link to='/Blog' className={activeLink === 'blog' ? 'active navbar-link nav-link' : 'navbar-link nav-link'} onClick={() => onUpdateActiveLink('blog')}>Blog</Link>
                <Link to='/Shop' className={activeLink === 'shop' ? 'active navbar-link nav-link' : 'navbar-link nav-link'} onClick={() => onUpdateActiveLink('shop')}>Shop</Link>
            </Nav>
            <span className="navbar-text">
                <div className="social-icon">
                    <a href="#"><img src={navIcon1} alt="" /></a>
                    <a href="#"><img src={navIcon2} alt="" /></a>
                    <a href="#"><img src={navIcon3} alt="" /></a>
                </div>
                <motion.button 
                    whileTap={{scale: 0. }}
                    className="save-button"
                    onClick={() => (modalOpen ? close() : open())}>
                    LOGIN
                </motion.button>
                {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}  
            </span>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}