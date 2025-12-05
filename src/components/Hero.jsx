import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-bg-elements">
                <div className="glow-blob blob-1"></div>
                <div className="glow-blob blob-2"></div>
            </div>

            <div className="container hero-content">
                <div className="hero-text">
                    <h2 className="animate-fade-in">Hello, I'm</h2>
                    <h1>Dhieyaanesh N</h1>
                    <h3 className="animate-fade-in delay-200">
                        Fullstack Developer & UI/UX Designer
                    </h3>
                    <p className="animate-fade-in delay-300">
                        I build exceptional digital experiences that blend
                        <span className="highlight"> technical depth</span> with
                        <span className="highlight"> visual elegance</span>.
                    </p>

                    <div className="hero-buttons animate-fade-in delay-300">
                        <a href="#projects" className="btn btn-primary">View Work</a>
                        <a href="#contact" className="btn btn-outline">Contact Me</a>
                    </div>
                </div>

                <div className="hero-visual animate-float delay-200">
                    <div className="glass-card">
                        <div className="code-snippet">
                            <div className="circle red"></div>
                            <div className="circle yellow"></div>
                            <div className="circle green"></div>
                            <code>
                                <span className="keyword">const</span> <span className="var">developer</span> = {'{'}
                                <br />&nbsp;&nbsp;name: <span className="string">'Dhieyaanesh'</span>,
                                <br />&nbsp;&nbsp;skills: [<span className="string">'React'</span>, <span className="string">'Node'</span>, <span className="string">'Design'</span>],
                                <br />&nbsp;&nbsp;passion: <span className="boolean">true</span>
                                <br />{'}'};
                            </code>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
