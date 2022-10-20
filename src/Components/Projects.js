import React from 'react';
import '../Assets/Styles/projects.css';
import { GoLogoGithub } from 'react-icons/go';
import { AiFillGithub } from 'react-icons/ai';
import todo from '../Assets/Images/todo.png';
import fakturacia from '../Assets/Images/fakturacia.png';

const Projects = () => {
    return (
        <section id="projects">
            <h2>My projects</h2>
            <div className="projects-container">
                <div className="portfolio-project">
                    <img src={todo} />
                    <h3>Javascript TODO app</h3>
                    <p>My first vanilla javascript project with emphasis on OOP </p>
                    {/* <GoLogoGithub className="github-link" /> */}
                    <div className="github-link-container">
                        <a href="https://github.com/mrslvs/todo" className="github-link">
                            <AiFillGithub className="github-logo" />
                            <span>Github</span>
                        </a>
                    </div>
                </div>
                <div className="portfolio-project">
                    <img src={fakturacia} />
                    <h3>Fullstack app</h3>
                    <p>
                        My first fullstack javascript application (still in progress) using MySQL,
                        ExpressJS, ReactJS, NodeJS.
                    </p>
                    <p>More information available on GitHub.</p>
                    {/* <GoLogoGithub className="github-link" /> */}
                    <div className="github-link-container">
                        <a href="https://github.com/mrslvs/todo" className="github-link">
                            <AiFillGithub className="github-logo" />
                            <span>Github</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
