import React from 'react';
import '../Assets/Styles/main.css';
import About from '../Components/About';
import Contact from '../Components/Contact';
import Projects from '../Components/Projects';
import Skilss from '../Components/Skilss';

const Main = () => {
    return (
        <main>
            <About />
            <Projects />
            <Skilss />
            <Contact />
        </main>
    );
};

export default Main;
