import React, { useEffect } from 'react';
import '../Assets/Styles/main.css';
import About from '../Components/About';
import Contact from '../Components/Contact';
import Projects from '../Components/Projects';
import Skills from '../Components/Skills';

const Main = () => {
    useEffect(() => {
        // fix mobile loading 70 pixels lower
        window.scrollTo(0, 0);
    }, []);

    return (
        <main>
            <About />
            <Projects />
            <Skills />
            <Contact />
        </main>
    );
};

export default Main;
