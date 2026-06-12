import React from 'react';
import { motion } from 'framer-motion';
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      date: 'Jun 2025 – Jan 2026',
      title: 'AI Development Intern',
      company: 'Schbang',
      bullets: [
        'Architected end-to-end AI pipeline combining Gemini Pro Vision, NLP, and temporal analysis to extract 50+ dimensional features from 500+ ads, achieving 95%+ structured output accuracy.',
        'Engineered RAG system integrating multi-source consumer data (Reddit, Quora, Google Reviews, Instagram) with brand guidelines to generate automated brand audits, reducing market research time from weeks to hours.',
        'Developed Meta compliance prediction engine achieving 98% accuracy in ad approval prediction, protecting significant client ad spend.',
        'Built consumer profiling framework with 35+ behavioral dimensions, reducing creative testing cycles by 40% through ML-driven ad-to-audience alignment.',
        'Contributed to frontend of getadvize.ai using React, Next.js, and Tailwind CSS.'
      ],
      stack: 'Gemini Pro Vision · LangChain · FastAPI · Pinecone · RAG · Pydantic · prompt engineering · React · Next.js · Tailwind CSS',
      side: 'left'
    },
    {
      date: 'Oct 2024 – Feb 2025',
      title: 'Freelance Data Scientist',
      company: 'Aashirvad Chemicals',
      bullets: [
        'Built predictive models to optimize chemical formulations and improve batch yield using Pandas and Scikit-Learn.',
        'Automated anomaly detection and reporting pipelines with Twilio-based real-time SMS alert integration.',
        'Developed Streamlit dashboards to visualize KPIs and support data-driven decision-making for plant operations.'
      ],
      stack: 'Python · Scikit-Learn · Pandas · Streamlit · Twilio',
      side: 'right'
    },
    {
      date: 'Apr 2024 – May 2024',
      title: 'Data Science Intern',
      company: 'BrainyBeam Technologies',
      bullets: [
        'Built and evaluated supervised ML models (Logistic Regression, Random Forest) using Python and Scikit-Learn.',
        'Implemented NLP workflows (text preprocessing, TF-IDF, classification) for text datasets.',
        'Performed EDA, feature engineering, and hyperparameter tuning; presented model results through visualizations.'
      ],
      stack: 'Python · Scikit-Learn · NLP · TF-IDF · EDA',
      side: 'left'
    }
  ];

  return (
    <section className="experience-section container" id="experience">
      <div className="experience-background">
        <ShaderGradientCanvas
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}
        >
          <ShaderGradient
  animate="off"
  axesHelper="off"
  bgColor1="#000000"
  bgColor2="#000000"
  brightness={1}
  cAzimuthAngle={180}
  cDistance={2.8}
  cPolarAngle={80}
  cameraZoom={9.1}
  color1="#606080"
  color2="#8d7dca"
  color3="#212121"
  destination="onCanvas"
  embedMode="off"
  envPreset="city"
  format="gif"
  fov={45}
  frameRate={10}
  gizmoHelper="hide"
  grain="on"
  lightType="3d"
  pixelDensity={1}
  positionX={0}
  positionY={0}
  positionZ={0}
  range="disabled"
  rangeEnd={40}
  rangeStart={0}
  reflection={0.1}
  rotationX={50}
  rotationY={0}
  rotationZ={-60}
  shader="defaults"
  type="plane"
  uAmplitude={0}
  uDensity={1.5}
  uFrequency={0}
  uSpeed={0.3}
  uStrength={1.5}
  uTime={8}
  wireframe={false}
/>
        </ShaderGradientCanvas>
      </div>
      
      <div className="experience-content-wrapper">
        <div className="section-heading font-anton">EXPERIENCE</div>
        <div className="experience-ladder">
          <div className="experience-line"></div>
          {experiences.map((exp, index) => (
            <motion.div 
              className={`experience-entry ${exp.side}`} 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="experience-marker"></div>
              <div className="experience-header">
                <div className="experience-date font-jetbrains">{exp.date}</div>
                <h3 className="experience-title font-anton">{exp.title}</h3>
                <div className="experience-company font-hanken">{exp.company}</div>
              </div>
              <div className="experience-content">
                <ul className="experience-bullets font-hanken">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
                <div className="experience-stack font-jetbrains">{exp.stack}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
