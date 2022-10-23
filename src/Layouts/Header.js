import React from 'react';
import { Link } from 'react-scroll';
import '../Assets/Styles/header.css';

const Header = () => {
    // suppressing spy={true} so it does not manipulate classList

    return (
        <header>
            <h1>Miroslav Sekerka</h1>
            <nav>
                <ul>
                    <li>
                        {/* <Link
                            to="about"
                            // spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            id="about-link"
                            className="active-section"
                        >
                            About
                        </Link> */}

                        <a href="#scroll-here-about">About</a>
                    </li>
                    <li>
                        {/* <Link
                            to="projects"
                            // spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            id="projects-link"
                        >
                            Projects
                        </Link> */}

                        <a href="#scroll-here-projects">Projects</a>
                    </li>
                    <li>
                        {/* <Link
                            to="skills"
                            // spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            id="skills-link"
                        >
                            Skills
                        </Link> */}

                        <a href="#scroll-here-skills">Skills</a>
                    </li>
                    <li>
                        {/* <Link
                            to="contact"
                            // spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            id="contact-link"
                        >
                            Contact
                        </Link> */}

                        <a href="#scroll-here-contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
