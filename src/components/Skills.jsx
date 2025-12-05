import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
    const skills = [
        { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind/CSS", "Three.js"] },
        { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "GraphQL", "AWS"] },
        { category: "Design", items: ["Figma", "Adobe XD", "UI Systems", "Prototyping", "Motion"] }
    ];

    return (
        <section className="skills section-padding" id="skills">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">My Expertise</h2>
                    <h3>Skills & Technologies</h3>
                </div>

                <div className="skills-grid">
                    {skills.map((skillGroup, index) => (
                        <div key={index} className="skill-card glass-panel">
                            <h4>{skillGroup.category}</h4>
                            <div className="skill-tags">
                                {skillGroup.items.map((item, i) => (
                                    <span key={i} className="skill-tag">{item}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
