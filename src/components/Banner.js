import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle, ChevronDoubleRight } from "react-bootstrap-icons";
import headerImg from '../assets/img/nilou.png'
import Fade from "react-reveal/Fade";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Music player", "Blog", "Paimon Shop"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return () => { clearInterval(ticker)}; // run before function unmount
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        
        setText(updatedText);

        if(isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }

    }
        return (
            <section className="banner" id="home">
                <Container>
                    <Fade bottom>
                        <Row className="align-items-center"> 
                            <Col xs={12} md={6} xl={7}>
                                <span className="tagline">Welcome to my Paimon Shop</span>
                                <h1>{`Hi I'm webdecoded  `}</h1>
                                <h1 className="wrap"><ChevronDoubleRight size={45} />{text}</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25} /></button>
                            </Col>
                            <Col xs={12} md={6} xl={5}>
                                <img src={headerImg} alt="Header img" />
                            </Col>
                        </Row>
                    </Fade>
                </Container>
            </section>
        )
    }
