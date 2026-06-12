import React from 'react';
import { motion } from 'framer-motion';
import './FocusMilestones.css';

const FocusMilestones = () => {
  const cards = [
    {
      label: 'CLIENT AD SPEND PROTECTED',
      value: '98%',
      valueSize: 'large',
      subLabel: 'Meta compliance accuracy'
    },
    {
      label: 'CREATIVE TESTING REDUCTION',
      value: '40%',
      valueSize: 'large',
      subLabel: 'Through ML-driven audience alignment'
    },
    {
      label: 'MARKET RESEARCH TIME',
      value: 'WEEKS → HOURS',
      valueSize: 'medium',
      subLabel: 'RAG-powered brand audits'
    }
  ];

  return (
    <section className="focus-section container" id="focus">
      <motion.div 
        className="focus-block"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
        }}
      >
        <div className="section-heading font-anton">FOCUS</div>
        <div className="focus-grid">
          {[
            { title: 'DATA PIPELINES', desc: 'Engineering high-throughput, automated data processing flows.' },
            { title: 'RAG SYSTEMS', desc: 'Creating advanced retrieval pipelines powered by vector databases and LLMs.' },
            { title: 'INTELLIGENT AGENTS', desc: 'Building autonomous multi-modal and RAG-powered systems.' },
            { title: 'PRODUCT DEVELOPMENT', desc: 'Transforming data into measurable, user-centric business outcomes.' }
          ].map((item, index) => (
            <motion.div 
              className="focus-grid-item" 
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
            >
              <h3 className="focus-grid-title font-anton transition-all">{item.title}</h3>
              <p className="focus-grid-desc font-hanken">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div 
        className="milestones-block"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="milestones-label font-jetbrains">MILESTONES</div>
        <motion.h2 
          className="milestones-statement font-anton"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Built systems processing <span className="highlight-italic">500+</span> ads with <span className="highlight-italic">95%+</span> accuracy, reducing research from weeks to <span className="highlight-italic">hours</span>.
        </motion.h2>

        <div className="milestones-cards">
          {cards.map((card, index) => (
            <motion.div 
              className="milestone-card" 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
            >
              <div className="card-label font-jetbrains">{card.label}</div>
              <div className={`card-value font-anton ${card.valueSize}`}>{card.value}</div>
              <div className="card-sublabel font-hanken">{card.subLabel}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FocusMilestones;
