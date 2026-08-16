import Image from 'next/image';
import PageHero from '@/components/ui/PageHero';
import Section from '@/components/ui/Section';
import styles from './page.module.css';

const impactItems = [
  {
    title: 'Tree Planting',
    description:
      'Revenue generated through BAHA Digital helps support tree planting and ecosystem restoration initiatives.',
  },
  {
    title: 'Waste Management',
    description:
      'Supporting waste segregation, recycling, and environmental cleanup activities in our communities.',
  },
  {
    title: 'Climate Action',
    description:
      'Advancing community climate resilience, environmental awareness, and sustainability education.',
  },
  {
    title: 'Community Development',
    description:
      'Using digital innovation to expand opportunity, strengthen skills, and support sustainable local development.',
  },
];

const serviceItems = [
  { title: 'Web', description: 'Website Design & Development' },
  { title: 'IT', description: 'Networking & Infrastructure Support' },
  { title: 'Cloud', description: 'Cloud & Productivity Tools' },
  { title: 'Training', description: 'Digital Skills Development' },
  { title: 'Support', description: 'Technical Support & IT Consultancy' },
];

const courseImages = [
  {
    src: '/assets/images/course-structure-overview.jpeg',
    alt: 'Course structure overview',
  },
  {
    src: '/assets/images/course-modules-breakdown.jpeg',
    alt: 'Course modules breakdown',
  },
  {
    src: '/assets/images/course-schedule-outline.jpeg',
    alt: 'Course schedule and outline',
  },
];

export default function BahaDigitalPage() {
  return (
    <>
      <PageHero
        title="BAHA Digital"
        subtitle="Technology for impact. Innovation for sustainability."
        actions={[
          { label: 'Contact Us', href: '/contact', variant: 'primary' },
          { label: 'View Projects', href: '/projects', variant: 'secondary' },
        ]}
      />

      <Section>
        <div className={styles.heroIntro}>
          <h2>BAHA Digital Innovation Hub</h2>
          <p>
            BAHA Digital Innovation Hub is the digital innovation and skills
            development arm of <strong>BAHA MADZO GADZE FOR CHARITY</strong>.
          </p>
          <p>
            It delivers digital services, technology support, and practical
            digital skills training that contribute to environmental
            conservation and community development.
          </p>
        </div>
      </Section>

      <Section background="soft">
        <div className={styles.contentBlock}>
          <h2>About BAHA Digital</h2>
          <div className={styles.textStack}>
            <p>
              BAHA Digital Innovation Hub is a social enterprise initiative of{' '}
              <strong>BAHA MADZO GADZE FOR CHARITY</strong> that bridges
              technology, innovation, and sustainable community development.
            </p>
            <p>
              The hub provides digital services, technology solutions, and
              skills development opportunities designed to strengthen
              individuals, support organizations, and create sustainable income
              for environmental programmes.
            </p>
            <p>
              By building both an internal and community-facing digital
              ecosystem, BAHA Digital promotes innovation, practical learning,
              and long-term impact through accessible and relevant technology.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className={styles.contentBlock}>
          <h2>How BAHA Digital Creates Impact</h2>
          <div className={styles.grid}>
            {impactItems.map((item) => (
              <article key={item.title} className={styles.card}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section background="soft">
        <div className={styles.contentBlock}>
          <h2>Our Core Services</h2>
          <div className={styles.serviceGrid}>
            {serviceItems.map((item) => (
              <article key={item.title} className={styles.serviceCard}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className={styles.contentBlock}>
          <h2>Digital Skills Training</h2>
          <div className={styles.textStack}>
            <p>
              BAHA Digital offers practical digital skills training for
              learners, youth, staff, and community members seeking relevant
              knowledge for education, work, entrepreneurship, and social
              impact.
            </p>
            <p>
              Training may include digital literacy, online communication
              tools, productivity platforms, Google Workspace basics, and
              responsible use of technology in everyday work and learning.
            </p>
          </div>
        </div>
      </Section>

      <Section background="soft">
        <div className={styles.contentBlock}>
          <h2>BAHA Digital Course Structure</h2>
          <p className={styles.sectionLead}>
            Explore the current BAHA Digital learning materials and course
            visuals designed to support practical, relevant digital skills
            development.
          </p>

          <div className={styles.courseGrid}>
            {courseImages.map((image) => (
              <div key={image.src} className={styles.courseImageWrap}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className={styles.courseImage}
                />
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className={styles.ctaBlock}>
          <h2>Start Your Digital Learning Journey</h2>
          <p>
            Connect with BAHA Digital to learn more about available services,
            digital training opportunities, and technology support for
            individuals, groups, and organizations.
          </p>
          <div className={styles.actions}>
            <a href="/contact" className={styles.primaryLink}>
              Contact Us
            </a>
            <a href="/projects" className={styles.secondaryLink}>
              View Projects
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
