import React from 'react';
import './About.css';
import Image from '../../assets/karthik.png.jpg';
import Resume from '../../assets/KarthikPResume (2).pdf.pdf';
import AboutBox from './AboutBox';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }


    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                    <p className="about__description">
    Hello! I'm Karthik P, a passionate fresher in web development. I have a strong interest in building interactive and responsive web applications.<br /><br />
    My journey in web development has just begun, and I am eager to learn and grow as a developer. Currently, I am focused on improving my skills by working on projects and expanding my knowledge in modern web technologies.<br /><br />
    Here are a few technologies I’ve been working with recently:
</p>

                        <ul className="about__list">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Boostarp</li>
                            <li>Javascript</li>
                            <li>React js</li>
                            <li>Node.js</li>
                            <li>Mysql</li>
                            <li>Python</li>
                            <li>Django</li>
                        </ul>
                        <button className="btn" onClick={downloadResume}>Donwload CV</button>
                    </div>

                    {/* <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography">

                                </span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About