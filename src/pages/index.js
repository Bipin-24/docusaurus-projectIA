import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { motion } from 'framer-motion';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="Bipin Pandey | Information Architect & AI Strategist"
      description="Portfolio of Bipin Pandey - Information Architect, AI in Documentation, and Strategic Content Manager."
    >
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <h1 className={styles.heroTitle}>Designing Information that Drives Clarity</h1>
            <p className={styles.heroSubtitle}>
              I’m <strong>Bipin Pandey</strong> — an Information Architect and Strategic Content Manager
              integrating <strong>AI</strong> into documentation to deliver structured, intelligent, and
              findable knowledge experiences.
            </p>
            <div className={styles.heroButtons}>
              <Link className="button button--primary button--lg" to="/portfolio/intro">
                Explore Portfolio
              </Link>
              <Link className="button button--secondary button--lg" to="/about">
                About Me
              </Link>
            </div>
          </motion.div>
          <motion.img
            src="/img/bipin-profile.png"
            alt="Bipin Pandey"
            className={styles.heroImage}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />
        </section>

        {/* Z-Pattern Cards */}
        <section className={styles.cardsSection}>
          <div className={styles.cardRow}>
            <Link to="/portfolio/ia-strategy" className={styles.card}>
              <motion.div whileHover={{ scale: 1.05 }}>
                <h3>Information Architecture</h3>
                <p>
                  Designing documentation ecosystems that enhance navigation, content discoverability,
                  and user experience.
                </p>
              </motion.div>
            </Link>

            <Link to="/portfolio/ai-content-solutions" className={`${styles.card} ${styles.alt}`}>
              <motion.div whileHover={{ scale: 1.05 }}>
                <h3>AI in Documentation</h3>
                <p>
                  Implementing intelligent content frameworks and metadata-driven search to make
                  content smart and context-aware.
                </p>
              </motion.div>
            </Link>
          </div>

          <div className={styles.cardRowReverse}>
            <Link to="/portfolio/content-strategy" className={styles.card}>
              <motion.div whileHover={{ scale: 1.05 }}>
                <h3>Content Strategy</h3>
                <p>
                  Building end-to-end strategies for content creation, governance, and automation
                  using modern documentation pipelines.
                </p>
              </motion.div>
            </Link>

            <Link to="/portfolio/analytics-and-metrics" className={`${styles.card} ${styles.alt}`}>
              <motion.div whileHover={{ scale: 1.05 }}>
                <h3>Analytics & Metrics</h3>
                <p>
                  Optimizing documentation using data insights and analytics to drive content
                  discoverability and performance.
                </p>
              </motion.div>
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
