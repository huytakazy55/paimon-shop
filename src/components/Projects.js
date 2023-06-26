import { Container, Row, Tab, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Nav from 'react-bootstrap/Nav';
import colorSharp2 from '../assets/img/color-sharp2.png';
import projImg1 from '../assets/img/genshin-banner1.jpg';
import projImg2 from '../assets/img/genshin-banner2.jpg';
import projImg3 from '../assets/img/genshin-banner3.jpg';
import projImg4 from '../assets/img/genshin-banner4.jpg';
import projImg5 from '../assets/img/genshin-banner5.jpg';
import projImg6 from '../assets/img/genshin-banner6.jpg';

import 'animate.css';
import Fade from "react-reveal/Fade";

export const Projects = () => {
    const projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg4,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg5,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg6,
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                <Col size={12}>
                    <Fade>
                        <h2>Projects</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="section">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Fade>
                </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
            </section>
    )
}