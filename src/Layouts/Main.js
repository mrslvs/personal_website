import React, { useEffect, useState } from 'react';
import { setActiveLink } from 'react-scroll/modules/mixins/scroller';
import '../Assets/Styles/main.css';
import About from '../Components/About';
import Contact from '../Components/Contact';
import Projects from '../Components/Projects';
import Skills from '../Components/Skills';

const Main = () => {
    let heightOfSection;
    let delimeters;

    const handleResize = () => {
        heightOfSection = (document.body.scrollHeight - 70) / 4;
        const firstDelimeter = heightOfSection / 2;

        delimeters = [
            firstDelimeter,
            firstDelimeter + heightOfSection,
            firstDelimeter + heightOfSection * 2,
        ];
    };

    useEffect(() => {
        // fix mobile loading 70 pixels lower
        window.scrollTo(0, 0);

        handleResize();
        // handle window resize
        window.addEventListener('resize', handleResize, false);

        window.addEventListener('scroll', () => {
            setActiveSection(window.pageYOffset, delimeters);
        });
    }, []);

    const setActiveSection = (y, delimeters) => {
        if (y < delimeters[0]) {
            handleSectionClass(0);
        } else if (y > delimeters[0] && y < delimeters[1]) {
            handleSectionClass(1);
        } else if (y > delimeters[1] && y < delimeters[2]) {
            handleSectionClass(2);
        } else {
            handleSectionClass(3);
        }
    };

    const handleSectionClass = (section) => {
        const about = document.getElementById('about-link');
        const projects = document.getElementById('projects-link');
        const skills = document.getElementById('skills-link');
        const contact = document.getElementById('contact-link');

        const sections = [about, projects, skills, contact];

        for (let i = 0; i < 4; i++) {
            if (i == section) {
                sections[i].classList.add('active-section');
            } else {
                if (sections[i].classList.contains('active-section')) {
                    sections[i].classList.remove('active-section');
                }
            }
        }
    };

    return (
        <main>
            <a class="anchor" id="about"></a>
            <About />
            <Projects />
            <Skills />
            <Contact />
        </main>
    );
};

export default Main;
