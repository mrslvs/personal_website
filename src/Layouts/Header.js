import React from 'react';
import { Link } from 'react-scroll';

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
                        <Link to="projects" spy={true} smooth={true} duration={500}>
                            Projects
                        </Link>
                        <Link to="skills" spy={true} smooth={true} duration={500}>
                            Skills
                        </Link>
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
