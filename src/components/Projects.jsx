import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
    const projects = [
        {
            title: "E-Commerce Dashboard",
            description: "A comprehensive dashboard for managing products, orders, and analytics. Built with React and Recharts.",
            tags: ["React", "Redux", "Chart.js"],
            links: { demo: "#", repo: "#" }
        },
        {
            title: "Social Media App",
            description: "Real-time social platform with chat, notifications, and media sharing. Powered by Node.js and Socket.io.",
            tags: ["MERN Stack", "Socket.io", "AWS"],
            links: { demo: "#", repo: "#" }
        },
        {
            title: "AI Image Generator",
            description: "SaaS application allowing users to generate images using Stable Diffusion API.",
            tags: ["Next.js", "OpenAI API", "Stripe"],
            links: { demo: "#", repo: "#" }
        }
    ];

    return (
        <section className="projects section-padding" id="projects">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">Portfolio</h2>
                    <h3>Featured Projects</h3>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card glass-panel">
                            <div className="project-image">
                                <div className="placeholder-image">
                                    <span>Project Preview</span>
                                </div>
                                <div className="project-overlay">
                                    <div className="project-links">
                                        <a href={project.links.demo} className="btn-icon" aria-label="View Demo">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                        </a>
                                        <a href={project.links.repo} className="btn-icon" aria-label="View Code">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="project-content">
                                <h4>{project.title}</h4>
                                <p>{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
