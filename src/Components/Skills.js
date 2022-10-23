import React from 'react';
import '../Assets/Styles/skills.css';

import { TbBrandHtml5, TbBrandCss3, TbBrandJavascript, TbBrandReactNative } from 'react-icons/tb';
import { FaNodeJs, FaUbuntu } from 'react-icons/fa';
import { SiMysql, SiPhp, SiGithub } from 'react-icons/si';

const Skilss = () => {
    return (
        <section id="skills-section">
            <a class="anchor" id="skills"></a>
            <h2>Technologies I worked with</h2>
            <div className="skills-grid">
                <div className="skill">
                    <div className="skill-header">
                        <TbBrandHtml5 className="skill-logo" />
                        <h3 className="skill-name">HTML</h3>
                    </div>
                    <div className="skill-information">
                        <p className="skill-level">Advanced</p>
                        <p className="skill-description">I write valid HTML5 code</p>
                    </div>
                </div>

                <div className="skill">
                    <div className="skill-header">
                        <TbBrandCss3 className="skill-logo" />
                        <h3 className="skill-name">CSS</h3>
                    </div>
                    <div className="skill-information">
                        <p className="skill-level">Advanced</p>
                        <p className="skill-description">
                            Most of the time I use basic CSS although I've tried Tailwind and
                            Bootstrap
                        </p>
                    </div>
                </div>

                <div className="skill">
                    <div className="skill-header">
                        <TbBrandJavascript className="skill-logo" />
                        <h3 className="skill-name">JavaScript</h3>
                    </div>
                    <div className="skill-information">
                        <p className="skill-level">Advanced</p>
                        <p className="skill-description">
                            I understand both basic and advanced features of modern JavaScript
                        </p>
                    </div>
                </div>

                <div className="skill">
                    <div className="skill-header">
                        <TbBrandReactNative className="skill-logo" />
                        <h3 className="skill-name">ReactJS</h3>
                    </div>
                    <div className="skill-information">
                        <p className="skill-level">Beginner</p>
                        <p className="skill-description">
                            Currently learning ReactJS library to build modern frontend applications
                        </p>
                    </div>
                </div>

                <div className="skill">
                    <div className="skill-header">
                        <FaNodeJs className="skill-logo" />
                        <h3 className="skill-name">NodeJS</h3>
                    </div>
                    <div className="skill-information">
                        <p className="skill-level">Beginner</p>
                        <p className="skill-description">
                            Currently learning how to build server-side code with ExpressJS and
                            Sequelize ORM
                        </p>
                    </div>
                </div>

                <div className="skill">
                    <div className="skill-header">
                        <SiPhp className="skill-logo" />
                        <h3 className="skill-name">PHP</h3>
                    </div>
                    <div className="skill-information">
                        <p className="skill-level">Intermediate</p>
                        <p className="skill-description">
                            I have basic knowledge of Laravel, but during my studies, I programmed
                            school projects in vanilla PHP.
                        </p>
                    </div>
                </div>

                <div className="skill">
                    <div className="skill-header">
                        <SiMysql className="skill-logo" />
                        <h3 className="skill-name">MySQL</h3>
                    </div>
                    <div className="skill-information">
                        <p className="skill-level">Intermediate</p>
                        <p className="skill-description">
                            I understand basics of relational databases and I am able to write
                            database queries
                        </p>
                    </div>
                </div>

                <div className="skill">
                    <div className="skill-header">
                        <FaUbuntu className="skill-logo" />
                        <h3 className="skill-name">Linux</h3>
                    </div>
                    <div className="skill-information">
                        <p className="skill-level">Intermediate</p>
                        <p className="skill-description">
                            I use linux console to run my scripts and git commands
                        </p>
                    </div>
                </div>
                <div className="skill">
                    <div className="skill-header">
                        <SiGithub className="skill-logo" />
                        <h3 className="skill-name">Git</h3>
                    </div>
                    <div className="skill-information">
                        <p className="skill-level">Advanced</p>
                        <p className="skill-description">
                            I actively use Git with GitHub for version control
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skilss;
