import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const tabs = ['RAG', 'AI AGENTS', 'NLP', 'DATA SCIENCE', 'DATA ANALYSIS'];
  const [activeTab, setActiveTab] = useState('RAG');

  const projectsData = {
    'RAG': [
      {
        title: 'GraphRAG Research Chatbot',
        desc: 'Production-grade hybrid retrieval pipeline over a thesis and 30 research papers. BGE-large embeddings merged with BM25 via Reciprocal Rank Fusion, achieving RAGAS faithfulness 0.85+.',
        tags: ['Python', 'LangChain', 'Qdrant', 'FastAPI', 'Claude 3.5']
      },
      {
        title: 'Semantic Search Engine',
        desc: 'Scalable RAG pipeline using FAISS and LangChain to interface with 50M+ unstructured enterprise documents, reducing retrieval latency by 40%.',
        tags: ['Python', 'FAISS', 'LangChain', 'FastAPI']
      },
      {
        title: 'News Sentiment Analyzer',
        desc: 'Full-stack microservices app with FastAPI backend and Streamlit frontend delivering real-time financial sentiment forecasting using BERT.',
        tags: ['FastAPI', 'BERT', 'Streamlit', 'Docker', 'NewsAPI']
      },
      {
        title: 'Multi-Source Brand Intelligence',
        desc: 'RAG system integrating Reddit, Quora, Google Reviews, and Instagram data with brand guidelines to generate automated brand audits.',
        tags: ['LangChain', 'Pinecone', 'Gemini', 'RAG']
      }
    ],
    'AI AGENTS': [
      {
        title: 'Multi-Modal Creative Intelligence',
        desc: 'End-to-end AI pipeline combining Gemini Pro Vision and NLP to extract 50+ dimensional features from ads, generating compliance-validated creative recommendations.',
        tags: ['Gemini Pro Vision', 'LangChain', 'Pydantic', 'FastAPI']
      },
      {
        title: 'Adaptive Creative Iteration System',
        desc: 'Agent pipeline transforming underperforming ads into high-performing assets with Meta Andromeda compliance, deployed in live campaigns.',
        tags: ['Gemini', 'LangChain', 'Python', 'Meta API']
      },
      {
        title: 'Consumer Segmentation Agent',
        desc: 'ML agent with 35+ behavioral dimensions and 300+ enumerated patterns identifying distinct consumer cohorts and predicting optimal creative-segment pairings.',
        tags: ['Python', 'Scikit-Learn', 'LangChain', 'Clustering']
      },
      {
        title: 'Real-Time Policy Q&A',
        desc: 'Highly available streaming endpoint using vLLM and Pinecone to serve real-time policy queries for customer support agents with sub-second latency.',
        tags: ['vLLM', 'Pinecone', 'FastAPI', 'Streaming']
      }
    ],
    'NLP': [
      {
        title: 'News Sentiment Analyzer',
        desc: 'Real-time financial sentiment classification using BERT (Positive/Negative/Neutral) on live headlines, with TTS output and async Uvicorn endpoints.',
        tags: ['BERT', 'gTTS', 'FastAPI', 'Streamlit']
      },
      {
        title: 'GraphRAG Knowledge Extraction',
        desc: 'spaCy PhraseMatcher-based NLP pipeline constructing a NetworkX knowledge graph with 8 relation types over ophthalmic AI literature.',
        tags: ['spaCy', 'NetworkX', 'NLP', 'Python']
      },
      {
        title: 'Ad Compliance NLP Engine',
        desc: 'Meta compliance prediction engine using NLP to achieve 98% accuracy in ad approval prediction across diverse creative formats.',
        tags: ['NLP', 'Pydantic', 'Scikit-Learn', 'FastAPI']
      },
      {
        title: 'TF-IDF Text Classifier',
        desc: 'Supervised NLP pipeline (text preprocessing, TF-IDF, classification) with cross-validation and hyperparameter tuning on small-scale datasets.',
        tags: ['Python', 'Scikit-Learn', 'TF-IDF', 'NLP']
      }
    ],
    'DATA SCIENCE': [
      {
        title: 'Chemical Batch Yield Predictor',
        desc: 'Predictive models optimizing chemical formulations and batch yield for Aashirvad Chemicals; identified key quality variables, reducing material waste.',
        tags: ['Python', 'Scikit-Learn', 'Pandas', 'Regression']
      },
      {
        title: 'Anomaly Detection & Alerting',
        desc: 'Automated anomaly detection pipeline with Twilio-based real-time SMS alert integration for plant operations monitoring.',
        tags: ['Python', 'Twilio', 'Pandas', 'Automation']
      },
      {
        title: 'Ad Performance Prediction',
        desc: 'ML models predicting optimal creative-segment pairings, reducing creative testing cycles by 40% through data-driven segment analysis.',
        tags: ['Python', 'Scikit-Learn', 'Clustering', 'Visualization']
      },
      {
        title: 'Ophthalmic AI Literature Analysis',
        desc: 'Research pipeline over 30 papers using MinHash LSH deduplication and LangChain SemanticChunker for clean, hierarchical chunk ingestion.',
        tags: ['PyMuPDF', 'Grobid', 'LangChain', 'Qdrant']
      }
    ],
    'DATA ANALYSIS': [
      {
        title: 'Brand Audit Dashboard',
        desc: 'Streamlit dashboard visualizing 50+ dimensional brand performance metrics, consumer sentiment trends, and creative scoring across client campaigns.',
        tags: ['Streamlit', 'Plotly', 'Python', 'RAG']
      },
      {
        title: 'Plant Operations KPI Dashboard',
        desc: 'Real-time Streamlit dashboard for chemical plant KPIs, tracking yield, anomaly flags, and process variability metrics.',
        tags: ['Streamlit', 'Pandas', 'Python', 'Visualization']
      },
      {
        title: 'Ad Sentiment & Reach Analytics',
        desc: 'Visualization dashboards analyzing ad-to-audience alignment and ROAS impact across creative formats and consumer segments.',
        tags: ['Power BI', 'Plotly', 'Python', 'Seaborn']
      },
      {
        title: 'Consumer Cohort Analysis',
        desc: 'Statistical clustering and visualization pipeline identifying distinct D2C and B2B consumer cohorts from 300+ enumerated behavioral patterns.',
        tags: ['Python', 'Pandas', 'Scikit-Learn', 'Plotly']
      }
    ]
  };

  const activeProjects = projectsData[activeTab] || [];

  return (
    <section className="projects-section container" id="work">
      <div className="section-heading font-anton">WORK</div>
      <div className="projects-tabs-container">
        <div className="projects-tabs font-jetbrains">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`projects-tab transition-all ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="projects-grid">
        <AnimatePresence mode="popLayout">
          {activeProjects.map((project, index) => (
            <motion.div 
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="project-card transition-all" 
              key={`${activeTab}-${project.title}`}
            >
              <div className="project-image"></div>
              <h3 className="project-title font-anton">{project.title}</h3>
              <p className="project-desc font-hanken">{project.desc}</p>
              <div className="project-tags font-jetbrains">
                {project.tags.map(tag => (
                  <span className="project-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;
