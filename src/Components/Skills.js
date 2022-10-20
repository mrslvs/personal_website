import React from 'react';
import '../Assets/Styles/skills.css';

import { TbBrandHtml5, TbBrandCss3, TbBrandJavascript, TbBrandReactNative } from 'react-icons/tb';
import { FaNodeJs, FaUbuntu } from 'react-icons/fa';
import { SiMysql, SiPhp, SiGithub } from 'react-icons/si';

const Skilss = () => {
    return (
        <section id="skills">
            <h2>Technologies I worked with</h2>
            <div className="skills-grid">
                <div className="skill">
                    <div className="skill-header">
                        <TbBrandHtml5 className="skill-logo" />
                        <h3 className="skill-name">HTML</h3>
                    </div>
                    <div className="skill-information">
                        <p className="skill-level">Advanced</p>
                        <p className="skill-description">I produce valid HTML5 code</p>
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
                            I've tried Tailwind and Bootstrap, but I ussualy do not use any
                            frameworks
                        </p>
                    </div>
                </div>

                <div className="skill">
                    <div className="skill-header">
                        <TbBrandJavascript className="skill-logo" />
                        <h3 className="skill-name">Javascript</h3>
                    </div>
                    <div className="skill-information">
                        <p className="skill-level">Advanced</p>
                        <p className="skill-description">
                            I understand both basic and advanced features of modern javascript
                        </p>
                    </div>
                </div>

                <div className="skill">
                    <div className="skill-header">
                        <TbBrandReactNative className="skill-logo" />
                        <h3 className="skill-name">ReactJS</h3>
                    </div>
                    <div className="skill-information">
                        <p className="skill-level">Advanced Beginner</p>
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
                        <p className="skill-level">Intermediate</p>
                        <p className="skill-description">
                            Currently learning how to build server-side code with ExpressJS and
                            Sequelize ORM
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
                            I understand basics of realtional databases and I am able to work with
                            data using SQL language
                        </p>
                    </div>
                </div>

                {/* <div className="skill">
                    <div className="skill-header">
                        <SiPhp className="skill-logo" />
                        <h3 className="skill-name">PHP</h3>
                    </div>
                    <div className="skill-information">
                        <p className="skill-level">Beginner</p>
                        <p className="skill-description">
                            During my studies I programmed basic PHP projects such as login system
                            or API
                        </p>
                    </div>
                </div> */}

                <div className="skill">
                    <div className="skill-header">
                        <FaUbuntu className="skill-logo" />
                        <h3 className="skill-name">Linux</h3>
                    </div>
                    <div className="skill-information">
                        <p className="skill-level">Advanced Beginner</p>
                        <p className="skill-description">
                            I use linux console with TMUX terminal to run my scripts, git commands
                            and manage files
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
                            When developing, I actively use Git with GitHub for version control
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skilss;
