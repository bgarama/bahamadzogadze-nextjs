import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import Button from '@/components/ui/Button';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'BAHA MADZO GADZE FOR CHARITY is an environmental conservation organization based in Mnarani, Kilifi County, Kenya, promoting sustainable waste management, climate action, environmental education, and community empowerment.',
  keywords: [
    'BAHA MADZO GADZE FOR CHARITY',
    'BMG',
    'Kilifi',
    'Mnarani',
    'Kenya',
    'environment',
    'charity',
    'innovation',
    'climate action',
    'tree planting',
    'waste management',
    'recycling',
    'Zero Plastic Campaigns',
    'environmental education',
  ],
  alternates: {
    canonical: '/projects',
  },
};

const projects = [
  {
    title: 'Zero Plastic Campaign',
    description:
      'Community cleanups, plastic waste reduction, environmental awareness, and coastal protection activities that promote cleaner public spaces and healthier ecosystems.',
  },
  {
    title: 'Environmental Education',
    description:
      'School and community education programs that teach conservation, recycling, climate awareness, and responsible environmental practices.',
  },
  {
    title: 'EcoBricks Project',
    description:
      'Transforming plastic waste into useful eco-friendly products while supporting recycling, innovation, and sustainable livelihoods.',
  },
  {
    title: 'Tree and Mangrove Restoration',
    description:
      'Supporting indigenous tree planting, mangrove restoration, biodiversity protection, and climate resilience in local communities.',
  },
  {
    title: 'Zero Plastic Football Fiesta',
    description:
      'Using sports as a platform to engage youth, promote environmental responsibility, and strengthen community unity.',
  },
  {
    title: 'Community Waste Management',
    description:
      'Developing sustainable waste collection systems, recycling initiatives, community awareness, and local waste accountability structures.',
  },
  {
    title: 'BAHA Digital Innovation Hub',
    status: 'Operational',
    description:
      'BAHA Digital Innovation Hub is the digital innovation and skills development arm of BAHA MADZO GADZE FOR CHARITY.',
    extra:
      'It provides digital services, technology support, and practical digital skills training that support environmental conservation, community development, and sustainable impact.',
  },
];

const impactStats = [
  { value: '5,000+', label: 'Trees Planted' },
  { value: '2+ Tonnes', label: 'Plastic Collected' },
  { value: '5+', label: 'Schools Reached' },
  { value: '50+', label: 'Community Activities' },
  { value: '500+', label: 'Volunteers Engaged' },
];

export default function ProjectsPage() {
  return (
    <div className={styles.page}>
      <PageHero
        title="Projects"
        subtitle="Explore the community-driven environmental, education, climate, waste management, and digital innovation programs creating long-term impact in Kilifi County."
      />

      <section className={`${styles.intro} section`}>
        <div className="container">
          <h2>Creating Sustainable Impact</h2>
          <p>
            Our programs combine environmental conservation, sustainable waste
            management, climate action, education, youth engagement, and
            community empowerment. Every activity is designed to create long-term
            positive change for Kilifi County and beyond.
          </p>
        </div>
      </section>

      <section className={`${styles.projectsSection} section`}>
        <div className="container">
          <h2>Our Key Projects</h2>

          <div className={styles.projectsGrid}>
            {projects.map((project) => (
              <article key={project.title} className={styles.projectCard}>
                <h3>{project.title}</h3>
                {project.status ? (
                  <p className={styles.status}>
                    <strong>Status:</strong> {project.status}
                  </p>
                ) : null}
                <p>{project.description}</p>
                {project.extra ? <p>{project.extra}</p> : null}
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

      <section className={`${styles.cta} section`}>
        <div className="container">
          <h2>Together We Can Build a Greener Future</h2>
          <p>
            We welcome schools, community groups, volunteers, institutions, and
            partners who want to support environmental conservation and
            sustainable development.
          </p>

          <Button href="/contact" variant="secondary" size="lg">
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
}