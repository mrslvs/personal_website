import React from 'react';
import '../Assets/Styles/about.css';
import portrait from '../Assets/Images/linkedin_profile_photo.jpeg';

const About = () => {
    return (
        <section id="about">
            {/* to scroll to the top, moved anchor element into the Main.js component */}
            {/* <a class="anchor" id="scroll-here-about"></a> */}
            <img src={portrait} id="portrait" />
            <div className="about-text">
                <p>IT student based in Bratislava with passion for web development.</p>
                <p>Currently learning ReactJS and NodeJS.</p>
            </div>
        </section>
    );
};

export default About;
