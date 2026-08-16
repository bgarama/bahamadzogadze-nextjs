import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Home',
};

const keyProjects = [
  {
    title: 'Zero Plastic Campaign',
    description:
      'Community cleanups, plastic waste awareness, and coastal protection activities.',
    href: '/projects',
  },
  {
    title: 'Environmental Education',
    description:
      'School and community programs promoting conservation, recycling, and climate awareness.',
    href: '/projects',
  },
  {
    title: 'Tree Planting',
    description:
      'Restoring green spaces through indigenous tree planting and community beautification.',
    href: '/projects',
  },
  {
    title: 'BAHA Digital Innovation Hub',
    description:
      'Website development, IT support, cloud tools, digital skills training, and practical technology solutions.',
    href: '/baha-digital',
  },
];

const impactStats = [
  { value: '5,000+', label: 'Trees Planted' },
  { value: '3+ Tonnes', label: 'Plastic Collected' },
  { value: '5+', label: 'Schools Reached' },
  { value: '50+', label: 'Community Activities' },
  { value: '500+', label: 'Volunteers Engaged' },
];

export default function HomePage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroContent}>
            <h1>BAHA MADZO GADZE FOR CHARITY</h1>
            <h2>Working Together for a Cleaner, Greener Kilifi</h2>
            <p>
              Environmental Conservation • Sustainable Waste Management • Climate
              Action • Community Empowerment
            </p>

            <div className={styles.heroActions}>
              <Button
                href="/who-we-are"
                variant="secondary"
                size="lg"
                className={styles.heroActionButton}
              >
                Who We Are
              </Button>
              <Button
                href="/projects"
                variant="secondary"
                size="lg"
                className={styles.heroActionButton}
              >
                Projects
              </Button>
              <Button
                href="/baha-digital"
                variant="secondary"
                size="lg"
                className={styles.heroActionButton}
              >
                BAHA Digital
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.intro} section`}>
        <div className="container">
          <h2>Who We Are</h2>
          <p>
            BAHA MADZO GADZE FOR CHARITY is a community-driven environmental
            organization based in Mnarani, Kilifi County, Kenya. We work to
            promote environmental conservation, sustainable waste management,
            climate action, environmental education, and community empowerment.
          </p>
        </div>
      </section>

      <section className={`${styles.programs} section`}>
        <div className="container">
          <h2>Our Key Projects</h2>

          <div className={styles.programGrid}>
            {keyProjects.map((project) => (
              <article key={project.title} className={styles.programCard}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <Button href={project.href} variant="soft" size="sm">
                  Learn More
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.impact} section`}>
        <div className="container">
          <h2>Our Impact</h2>

          <div className={styles.impactGrid}>
            {impactStats.map((stat) => (
              <article key={stat.label} className={styles.impactCard}>
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
