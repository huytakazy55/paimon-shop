import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';
import ColorSharp from '../assets/img/color-sharp.png';
import Fade from "react-reveal/Fade";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <section className="skill" id="skills">
            <Container>
                <Fade bottom>
                    <Row>
                        <Col>
                            <div className="skill-bx">
                                <h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br></p>
                                    <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                        <div className="item">
                                            <img src={meter1} alt="Image" />
                                            <h5>Web Developer</h5>
                                        </div>
                                        <div className="item">
                                            <img src={meter2} alt="Image" />
                                            <h5>Brand Identity</h5>
                                        </div>
                                        <div className="item">
                                            <img src={meter3} alt="Image" />
                                            <h5>Logo Design</h5>
                                        </div>
                                        <div className="item">
                                            <img src={meter1} alt="Image" />
                                            <h5>Web Developer</h5>
                                        </div>
                                    </Carousel>
                                </h2>
                            </div>
                        </Col>
                    </Row>
                </Fade>
            </Container>
            <img className="background-image-left" src={ColorSharp} alt="image-left" />
        </section>
    )
}