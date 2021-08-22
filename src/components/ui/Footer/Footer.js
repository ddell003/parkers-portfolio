import React from 'react';
import { FaGithub, FaLinkedinIn, FaDev, FaReact } from 'react-icons/fa';
import './footer.css';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import resumeFile from "../../../dell-resume.docx";


function Footer() {
    return (
        <footer >
            <div className="footer__content-container">
                <Link
                    exact="true"
                    to="/"
                >
                    <Logo
                        cssClass="footer__logo"
                        fillOne="white"
                        fillTwo="white"
                    />

                </Link>



                <a
                    href={resumeFile}
                    download={true}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__resume "><h6>View Resume</h6></a>


                <div className="footer__social-icons-container">
                    <a href="https://www.linkedin.com/in/david-dell-1b328999/" target="_blank" rel="noopener noreferrer" className="footer__social-icons"><FaLinkedinIn /></a>
                    <a href="https://github.com/ddell003" target="_blank" rel="noopener noreferrer" className="footer__social-icons"><FaGithub /></a>
                    <a href="https://dev.to/ddell003" target="_blank" rel="noopener noreferrer" className="footer__social-icons"><FaDev /></a>

                </div>
            </div>


            <a href="https://github.com/ddell003" target="_blank" rel="noopener noreferrer" className="footer__built-with"><h6>Built with <FaReact className="footer__react" /> </h6></a>




        </footer>
    )
}


export default Footer;
