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
                        <Link to="about" spy={true} smooth={true} duration={500}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="projects" spy={true} smooth={true} duration={500}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link to="skills" spy={true} smooth={true} duration={500}>
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" spy={true} smooth={true} duration={500}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
