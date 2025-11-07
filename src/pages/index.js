import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function Home() {
  useEffect(() => {
    // Scroll reveal animation for smooth fade-in on scroll
    const reveals = document.querySelectorAll(`.${styles.revealOnScroll}`);
    const revealOnScroll = () => {
      reveals.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add(styles.visible);
        }
      });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return (
    <Layout
      title="Bipin Pandey — Information Architect & AI Strategist"
      description="Portfolio of Bipin Pandey — Information Architect, AI Strategist, and Content Experience Leader"
    >
      <main className={styles.main}>
        {/* --- Hero Section --- */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={`${styles.heroText} ${styles.revealOnScroll}`}>
              <h2 className={styles.heroSubTitle}>
                Designing Information that Drives Clarity
              </h2>
              <h1 className={styles.title}>
                Hi, I’m <span>Bipin Pandey</span>.
              </h1>
              <p className={styles.subtitle}>
                I design intelligent content systems and scalable documentation experiences
                powered by <strong>Information Architecture</strong> and <strong>AI-driven automation</strong>.
              </p>
              <div className={styles.cta}>
                <Link className="button button--primary" to="/about">
                  About Me
                </Link>
                <Link className="button button--secondary" to="/portfolio/intro">
                  View Portfolio
                </Link>
              </div>
            </div>
            <div className={styles.heroImage}>
              <img src="/img/bipin-profile.png" alt="Bipin Pandey" />
            </div>
          </div>
        </section>

        {/* --- Card Section --- */}
        <section className={styles.grid}>
          <div className={styles.card}>
            <h2>Information Architecture</h2>
            <p>
              Structuring documentation ecosystems for clarity, scalability, and reusability.
              I specialize in modular content design and taxonomy systems across multi-product portals.
            </p>
            <Link to="/portfolio/ia-strategy" className={styles.link}>
              Explore IA Work →
            </Link>
          </div>

          <div className={styles.card}>
            <h2>AI in Documentation</h2>
            <p>
              Applying AI and LLMs to automate metadata, improve search relevance, and enhance authoring efficiency.
              Exploring intelligent knowledge delivery.
            </p>
            <Link to="/portfolio/ai-content-solutions" className={styles.link}>
              See AI Solutions →
            </Link>
          </div>

          <div className={styles.card}>
            <h2>Content Strategy & Experience</h2>
            <p>
              Building unified documentation experiences with clear user journeys, versioning, and SEO optimization.
              Driving strategy that connects users to content seamlessly.
            </p>
            <Link to="/portfolio/content-strategy" className={styles.link}>
              View Strategy Work →
            </Link>
          </div>

          <div className={styles.card}>
            <h2>Analytics & Insights</h2>
            <p>
              Leveraging analytics to understand content engagement, discoverability, and performance.
              Turning data into actionable documentation strategy.
            </p>
            <Link to="/portfolio/analytics-and-metrics" className={styles.link}>
              View Analytics →
            </Link>
          </div>
        </section>

        {/* --- Blog Preview Section --- */}
        <section className={styles.blogPreview}>
          <h2>Latest Insights</h2>
          <p>
            Thoughts on AI, content architecture, and the evolving documentation landscape.
          </p>
          <Link className={styles.blogLink} to="/blog">
            Read Blog →
          </Link>
        </section>

        {/* --- Footer --- */}
        <footer className={styles.footer}>
          <p>© {new Date().getFullYear()} Bipin Pandey</p>
          <div className={styles.social}>
            <a
              href="https://github.com/Bipin-24"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/bipin-pandey-3594961a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </footer>
      </main>
    </Layout>
  );
}
