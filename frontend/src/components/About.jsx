import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section className="about-section container" id="about">
      <motion.div 
        className="about-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="about-text font-hanken">
          I'm Ansh Shah, an AI Engineer and Data Scientist passionate about building intelligent systems that move beyond demos into real-world impact. From GraphRAG research assistants and multimodal AI pipelines to predictive analytics and cloud-native ML applications, I enjoy turning complex problems into scalable products. 
          <br /><br />
          My focus lies at the intersection of Generative AI, Machine Learning, Data Engineering, and MLOps, creating solutions that are not only technically sound but also deliver measurable business value.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
