import React from 'react';
import '../styles/About.css';
import profileImage from '../assets/logo.jpeg';

const About = () => {
    return (
        <section className="about section-padding" id="about">
            <div className="container">
                <div className="about-content">
                    <div className="about-image-wrapper">
                        <div className="about-image glass-panel">
                            <img src={profileImage} alt="Profile" className="profile-img" />
                        </div>
                        <div className="about-shape"></div>
                    </div>

                    <div className="about-text">
                        <h2 className="section-title">About Me</h2>
                        <h3>Designing the Future, One Pixel at a Time</h3>
                        <p>
                            I am a passionate Fullstack Developer and UI/UX Designer with a knack for creating
                            immersive digital experiences. With a background in both engineering and design,
                            I bridge the gap between aesthetics and functionality.
                        </p>
                        <p>
                            My journey started with a curiosity for how things work on the web, which evolved
                            into a career building robust applications and stunning interfaces. I believe that
                            great software should not only work perfectly but also bring joy to its users.
                        </p>

                        <div className="stats-grid">
                            <div className="stat-item glass-panel">
                                <span className="stat-number">5+</span>
                                <span className="stat-label">Years Experience</span>
                            </div>
                            <div className="stat-item glass-panel">
                                <span className="stat-number">5+</span>
                                <span className="stat-label">Projects Completed</span>
                            </div>
                            <div className="stat-item glass-panel">
                                <span className="stat-number">100%</span>
                                <span className="stat-label">Client Satisfaction</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
