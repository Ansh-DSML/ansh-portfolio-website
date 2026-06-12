import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const skillsData = [
    { title: 'PYTHON ECOSYSTEM', size: 'large', tools: 'Python, Pandas, NumPy, Scikit-Learn, FastAPI, Flask' },
    { title: 'PYTORCH & TENSORS', size: 'large', tools: 'PyTorch, TensorFlow, Hugging Face Transformers, MLflow, Optuna' },
    { title: 'LARGE LANGUAGE MODELS', size: 'large', tools: 'LangChain, OpenAI API, Gemini API, Prompt Engineering, RAG' },
    { title: 'VECTOR DATABASES', size: 'medium', tools: 'Pinecone, FAISS, Qdrant, Typesense' },
    { title: 'GENERATIVE AI', size: 'medium', tools: 'Gemini Pro Vision, Stable Diffusion, Image Generation, n8n' },
    { title: 'MLOPS PIPELINES', size: 'medium', tools: 'Docker, Kubernetes, AWS, Azure, Prometheus, Grafana' },
    { title: 'DATA ENGINEERING', size: 'medium', tools: 'Apache Spark, Kafka, Airflow, Snowflake, MongoDB, MySQL' },
    { title: 'WEB & APIS', size: 'medium', tools: 'React, Next.js, Tailwind CSS, Node.js, RESTful APIs' },
    { title: 'VISUALIZATION', size: 'medium', tools: 'Power BI, Tableau, Matplotlib, Seaborn, Plotly, Qlik Sense' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section className="skills-section container" id="skills">
      <div className="section-heading font-anton">SKILLS</div>
      <motion.div 
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {skillsData.map((skill, index) => (
          <motion.div className="skill-item" key={index} variants={itemVariants}>
            <h3 className={`skill-title font-anton ${skill.size} transition-all`}>{skill.title}</h3>
            <p className="skill-tools font-hanken">{skill.tools}</p>
          </motion.div>
        ))}
      </motion.div>
      <div className="skills-divider"></div>
    </section>
  );
};

export default Skills;
