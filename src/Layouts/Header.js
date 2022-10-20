import React from 'react';
import { Link } from 'react-scroll';
import '../Assets/Styles/header.css';

const Header = () => {
    return (
        <header>
            <h1>Miroslav Sekerka</h1>
            <nav>
                <ul>
                    <li>
                        <Link
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            id="about-link"
                            className="active-section"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            id="projects-link"
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="skills"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            id="skills-link"
                        >
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            id="contact-link"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
