import React  from "react";
import Container from 'react-bootstrap/Container';
import './contactForm.css';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// This is static top section of the page and gives it semantic value.
function ContactForm() {

    return (
        <section>
            <Container id="contact">
                <h2 className="contact__title">Email</h2>
                <div className="contact__email-container">
                    <h2 className="contact__or-title">or</h2>
                    <div className="contact__email-txt">
                        <p className="g__body-lg">You can email me at</p>
                        <p>
                            <a href="mailto:parkerdell94@gmail.com"
                                className="g__body-lg">
                                parkerdell94@gmail.com
                        </a>
                        </p>
                    </div>
                </div>
            </Container>

        </section >
    )
}


export default ContactForm;