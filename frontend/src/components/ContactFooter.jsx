import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ContactFooter.css';

const ContactFooter = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const response = await fetch('http://localhost:8000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', company: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      setStatus('Error sending message. Is backend running?');
    }
  };

  return (
    <section className="contact-section container" id="contact">
      <motion.div 
        className="contact-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="contact-headline font-anton">GET IN TOUCH ↓</h2>
        <p className="contact-subtext font-hanken">
          Currently open to new opportunities in AI/ML engineering or Data Science. Whether you have a project, a role, or just want to connect — reach out.
          <br /><br />
          Open to relocate anywhere in India.
        </p>
      </motion.div>

      <div className="contact-columns">
        <motion.div 
          className="contact-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="font-jetbrains">NAME</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name" 
                className="font-hanken transition-all"
                required 
              />
            </div>
            <div className="form-group">
              <label className="font-jetbrains">COMPANY</label>
              <input 
                type="text" 
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Where do you work?" 
                className="font-hanken transition-all"
                required
              />
            </div>
            <div className="form-group">
              <label className="font-jetbrains">EMAIL</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com" 
                className="font-hanken transition-all"
                required 
              />
            </div>
            <div className="form-group">
              <label className="font-jetbrains">MESSAGE</label>
              <textarea 
                rows="4" 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about the opportunity..." 
                className="font-hanken transition-all"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button font-jetbrains transition-all">
              SEND MESSAGE
            </button>
            {status && <div className="form-status font-hanken">{status}</div>}
          </form>
        </motion.div>

        <motion.div 
          className="contact-right"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="direct-contact-label font-jetbrains">DIRECT</div>
          <div className="direct-contact-info font-hanken">
            <a href="mailto:ansh.mlops@gmail.com" className="email-link transition-all">ansh.mlops@gmail.com</a>
            <div className="location-info">
              <span className="location-label">Based in</span> <span className="location-value">Ahmedabad, Gujarat</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="footer-separator"></div>

      <motion.footer 
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="footer-content">
          <div className="footer-left">
            <a href="mailto:ansh.mlops@gmail.com" className="footer-email font-anton">ANSH.MLOPS@GMAIL.COM</a>
            <p className="footer-open font-hanken">Open to full-time roles and internships in AI/ML Engineering.</p>
          </div>
          <div className="footer-right">
            <div className="connect-label font-jetbrains">CONNECT</div>
            <div className="social-links font-hanken">
              <a href="https://github.com/Ansh-DSML" target="_blank" rel="noreferrer" className="transition-all">GitHub</a>
              <a href="https://linkedin.com/in/ansh-shah-dsml" target="_blank" rel="noreferrer" className="transition-all">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright font-jetbrains">©2025 ANSH SHAH. ALL RIGHTS RESERVED.</div>
        </div>
      </motion.footer>
    </section>
  );
};

export default ContactFooter;
