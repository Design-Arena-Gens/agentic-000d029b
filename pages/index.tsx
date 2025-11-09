import Head from 'next/head';
import { useState } from 'react';

const sections = [
  {
    title: 'Full-Funnel Playbooks',
    description:
      'Discover conversion-focused campaigns mapped to every stage of the customer journey, boosting acquisition, activation, and retention.',
  },
  {
    title: '80 Ready-to-Launch Pages',
    description:
      'Each page delivers tactical guidance, templates, metrics, and rollout steps curated for modern digital teams working at startup speed.',
  },
  {
    title: 'Visual Dashboards & Workflows',
    description:
      'Screenshot-inspired diagrams showcase campaign architectures, analytics dashboards, and automation flows for rapid implementation.',
  },
  {
    title: 'Tooling & Channel Stack',
    description:
      'Build a resilient growth engine with recommended Martech stacks, integrations, and measurement best practices for 2024 and beyond.',
  },
];

const timeline = [
  {
    label: 'Foundation',
    summary:
      'Craft personas, value propositions, and audit your owned channels to remove friction before scaling paid acquisition.',
  },
  {
    label: 'Lifecycle',
    summary:
      'Automate onboarding, retention, and reactivation cadences that compound customer lifetime value.',
  },
  {
    label: 'Acceleration',
    summary:
      'Layer paid, partner, and product-led strategies with precise measurement to optimize CAC/LTV ratios.',
  },
  {
    label: 'Intelligence',
    summary:
      'Implement dashboards, AI copilots, and experimentation frameworks that unlock continuous revenue gains.',
  },
];

export default function Home() {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    const anchor = document.createElement('a');
    anchor.href = '/api/ebook';
    anchor.download = 'digital-marketing-blueprint.pdf';
    anchor.rel = 'noopener';
    anchor.click();
    setTimeout(() => setDownloading(false), 2000);
  };

  return (
    <>
      <Head>
        <title>Digital Marketing Blueprint · 80-Page Playbook</title>
        <meta
          name="description"
          content="Download an 80-page digital marketing eBook packed with playbooks, visuals, and templates for high-growth teams."
        />
      </Head>
      <main>
        <section className="hero">
          <div className="hero__badge">New · 2024 Edition</div>
          <h1>Digital Marketing Blueprint</h1>
          <p className="hero__tagline">
            A comprehensive 80-page operating system for building, launching, and optimizing high-velocity demand generation programs.
          </p>
          <button className="hero__cta" onClick={handleDownload} disabled={downloading}>
            {downloading ? 'Preparing eBook…' : 'Download the 80-Page PDF'}
          </button>
          <p className="hero__note">Instant download · High resolution visuals · Desktop-optimized PDF</p>
        </section>

        <section className="preview">
          <div className="preview__mockup">
            <div className="mockup__screen">
              <div className="mockup__header" />
              <div className="mockup__content" />
              <div className="mockup__sidebar" />
            </div>
            <div className="preview__shadow" />
          </div>
          <div className="preview__copy">
            <h2>Inside the Playbook</h2>
            <p>
              Build conversion-ready journeys with detailed campaign recipes, measurement frameworks, and automation workflows. Every
              page is crafted to help growth teams execute quickly while staying aligned with strategic outcomes.
            </p>
            <ul>
              {sections.map((section) => (
                <li key={section.title}>
                  <h3>{section.title}</h3>
                  <p>{section.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="timeline">
          <h2>Scale with Confidence</h2>
          <div className="timeline__grid">
            {timeline.map((milestone) => (
              <div key={milestone.label} className="timeline__card">
                <h3>{milestone.label}</h3>
                <p>{milestone.summary}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="cta">
          <div>
            <h2>Ready to launch remarkably efficient campaigns?</h2>
            <p>
              Download the full PDF to access scalable frameworks, annotated visuals, experiment trackers, and go-to-market calculators
              built for modern marketing leaders.
            </p>
          </div>
          <button className="hero__cta" onClick={handleDownload} disabled={downloading}>
            {downloading ? 'Preparing eBook…' : 'Grab the eBook'}
          </button>
        </section>
      </main>
      <style jsx>{`
        .hero {
          max-width: 900px;
          margin: 0 auto 4rem;
          text-align: center;
        }

        .hero__badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.35rem 0.75rem;
          margin-bottom: 1.25rem;
          font-size: 0.85rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          background: rgba(239, 131, 84, 0.15);
          color: var(--highlight);
          border-radius: 999px;
          font-weight: 600;
        }

        h1 {
          font-size: clamp(2.5rem, 5vw, 3.6rem);
          letter-spacing: -0.03em;
          margin-bottom: 1rem;
        }

        .hero__tagline {
          max-width: 680px;
          margin: 0 auto 2rem;
          font-size: 1.1rem;
          line-height: 1.6;
          color: rgba(27, 38, 59, 0.85);
        }

        .hero__cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.85rem 2.75rem;
          border-radius: 999px;
          background: linear-gradient(135deg, var(--brand-accent), var(--brand-primary));
          color: white;
          font-weight: 600;
          font-size: 1.05rem;
          border: none;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .hero__cta:disabled {
          opacity: 0.75;
          cursor: progress;
        }

        .hero__cta:not(:disabled):hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(65, 90, 119, 0.28);
        }

        .hero__note {
          margin-top: 1rem;
          font-size: 0.95rem;
          color: rgba(27, 38, 59, 0.65);
        }

        .preview {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2.5rem;
          align-items: center;
          max-width: 1100px;
          margin: 0 auto 5rem;
        }

        .preview__mockup {
          position: relative;
          height: 340px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mockup__screen {
          width: min(100%, 420px);
          height: 280px;
          border-radius: 18px;
          background: linear-gradient(160deg, #ffffff, rgba(224, 225, 221, 0.9));
          border: 1px solid rgba(65, 90, 119, 0.16);
          position: relative;
          overflow: hidden;
        }

        .mockup__header {
          height: 48px;
          background: linear-gradient(120deg, rgba(65, 90, 119, 0.85), rgba(65, 90, 119, 0.55));
        }

        .mockup__content {
          position: absolute;
          top: 70px;
          left: 38px;
          right: 38px;
          height: 120px;
          background: linear-gradient(160deg, rgba(27, 38, 59, 0.2), transparent);
          border-radius: 12px;
        }

        .mockup__sidebar {
          position: absolute;
          bottom: 28px;
          left: 38px;
          right: 38px;
          height: 60px;
          background: linear-gradient(160deg, rgba(239, 131, 84, 0.35), transparent);
          border-radius: 12px;
        }

        .preview__shadow {
          position: absolute;
          width: 260px;
          height: 80px;
          border-radius: 50%;
          background: rgba(27, 38, 59, 0.15);
          filter: blur(45px);
          bottom: -25px;
        }

        .preview__copy h2 {
          font-size: 2rem;
          margin-bottom: 1.25rem;
        }

        .preview__copy p {
          margin-bottom: 1.5rem;
          color: rgba(27, 38, 59, 0.75);
          line-height: 1.7;
        }

        .preview__copy ul {
          display: grid;
          gap: 1.4rem;
        }

        .preview__copy li h3 {
          font-size: 1.1rem;
          margin-bottom: 0.4rem;
          color: var(--brand-primary);
        }

        .preview__copy li p {
          margin: 0;
        }

        .timeline {
          max-width: 1040px;
          margin: 0 auto 5rem;
          text-align: center;
        }

        .timeline h2 {
          font-size: 2.2rem;
          margin-bottom: 2rem;
        }

        .timeline__grid {
          display: grid;
          gap: 1.8rem;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        }

        .timeline__card {
          background: white;
          border-radius: 18px;
          padding: 1.75rem;
          box-shadow: 0 20px 45px rgba(65, 90, 119, 0.15);
          text-align: left;
        }

        .timeline__card h3 {
          margin-bottom: 0.75rem;
          font-size: 1.1rem;
          color: var(--brand-accent);
        }

        .timeline__card p {
          color: rgba(27, 38, 59, 0.75);
          line-height: 1.6;
        }

        .cta {
          max-width: 960px;
          margin: 0 auto;
          background: linear-gradient(135deg, rgba(65, 90, 119, 0.12), rgba(65, 90, 119, 0.05));
          border-radius: 26px;
          padding: 2.5rem 3rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          align-items: flex-start;
        }

        .cta h2 {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .cta p {
          color: rgba(27, 38, 59, 0.75);
          line-height: 1.6;
        }

        @media (min-width: 900px) {
          .cta {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }

          .cta button {
            flex-shrink: 0;
          }
        }
      `}</style>
    </>
  );
}
