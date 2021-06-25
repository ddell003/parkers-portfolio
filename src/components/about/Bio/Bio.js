import React from "react";
import './bio.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// This is static top section of the page and gives it semantic value.
function Bio() {

    return (
        <section>
            <Container>
                <h2
                    id="bioTitle"
                >Bio</h2>

                <Row
                    className="bioContainer justify-content-md-center g_negative-margin"
                >
                    <Col className="g_white-color" lg={8}>
                        <p className="g__body-lg">
                            I am a Charlottesville-based full-stack developer and devops engineer who takes pride in perfecting the little details.
                        </p>
                        <p>
                            Experienced Software engineer with a demonstrated history of working in the mechanical or industrial engineering industry as well as DOD. Experienced with setting up and maintaining serverless architecture including GCS, AWS. Technical languages include: JAVA, PHP, HTML/CSS, Javascript, Mysql, Python, VueJS, React, Angular. Further strengths include successful experience with creating and maintaining APIs and ETLs for and from many platforms. Strong engineering professional with a MS in Computer Information Systems with a concentration in IT Project Management. Along with a double major from Bridgewater College in computer science and business administration.
                        </p>
                        <p>
                            It provided the opportunity to serve some great companies, including; <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.r717.net/"
                            className="bio__link">Innovative Refigeration Systems</a>, <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.maxar.com/"
                            className="bio__link">Maxar</a>, <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://mountcrawford.us/"
                            className="bio__link">Mount Crawford</a>, <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://stpaulsumcstaunton.org/"
                            className="bio__link">St Paul's UMC</a>, and <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://originalmind.com.au/"
                            className="bio__link">Original Mind</a>.
                        </p>

                        <p>
                            These days I get the joy of building things with and writing about code.
                        </p>


                    </Col>
                </Row>

            </Container>

        </section>
    )
}


export default Bio;