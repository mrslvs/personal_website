import React from 'react';
import '../Assets/Styles/contact.css';
import { SiMicrosoftoutlook } from 'react-icons/si';
import { FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact">
            <a class="anchor" id="scroll-here-contact"></a>
            <div className="contact-option">
                <FaLinkedin className="contact-logo" />
                <a href="https://www.linkedin.com/in/miroslav-sekerka/" className="contact-link">
                    Miroslav Sekerka
                </a>
            </div>
            <div className="contact-option">
                <SiMicrosoftoutlook className="contact-logo" />
                <p>sekerka.miroslav[at]outlook.com</p>
            </div>
            <div className="contact-option">
                <FaMapMarkerAlt className="contact-logo" />
                <p>Bratislava, Slovakia</p>
            </div>
        </section>
    );
};

export default Contact;
