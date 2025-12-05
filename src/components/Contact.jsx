import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <section className="contact section-padding" id="contact">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">Get In Touch</h2>
                    <h3>Let's Work Together</h3>
                </div>

                <div className="contact-content">
                    <div className="contact-info glass-panel">
                        <h4>Contact Information</h4>
                        <p>
                            Feel free to reach out for collaborations or just a friendly hello.
                        </p>

                        <div className="info-item">
                            <span className="icon">📧</span>
                            <a href="mailto:dhieyaaneshdev@gmail.com">dhieyaaneshdev@gmail.com</a>
                        </div>
                        <div className="info-item">
                            <span className="icon">📍</span>
                            <span>Erode,Tamilnadu</span>
                        </div>

                        <div className="social-links">
                            <a href="https://github.com/DhieyaaneshDP" className="social-link">GitHub</a>
                            <a href="https://www.linkedin.com/in/dhieyaanesh-dp-957176285/" className="social-link">LinkedIn</a>
                            <a href="#" className="social-link">Twitter</a>
                        </div>
                    </div>

                    <form className="contact-form glass-panel">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Your Name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="your@email.com" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="5" placeholder="Your Message"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
