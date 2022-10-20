import React from 'react';
import '../Assets/Styles/projects.css';
import { GoLogoGithub } from 'react-icons/go';
import todo from '../Assets/Images/todo.png';
import fakturacia from '../Assets/Images/fakturacia.png';

const Projects = () => {
    return (
        <section id="projects">
            <h2>My projects</h2>
            <div className="projects-container">
                <div className="portfolio-project">
                    <h3>Javascript TODO app</h3>
                    <img src={todo} />
                    <p>My first vanilla javascript project with emphasis on OOP </p>
                    <GoLogoGithub className="github-link" />
                </div>
                <div className="portfolio-project">
                    <h3>Fullstack app</h3>
                    <img src={fakturacia} />
                    <p>
                        My first fullstack javascript application (still in progress) using MySQL,
                        ExpressJS, ReactJS, NodeJS. More information available on GitHub.
                    </p>
                    <GoLogoGithub className="github-link" />
                </div>
            </div>
        </section>
    );
};

export default Projects;
