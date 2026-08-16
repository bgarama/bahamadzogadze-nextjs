import type { Metadata } from 'next';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import PageHero from '@/components/ui/PageHero';
import Section from '@/components/ui/Section';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Partners',
  description:
    'BAHA MADZO GADZE FOR CHARITY values strategic partnerships that advance environmental conservation, community empowerment, waste management, and sustainable development.',
  alternates: {
    canonical: '/partners',
  },
};

const partners = [
  {
    name: 'Municipality of Kilifi',
    image: '/assets/images/partners/municipality-kilifi.jpeg',
  },
  {
    name: 'Municipality of Mtwapa',
    image: '/assets/images/partners/municipality-mtwapa.jpeg',
  },
  {
    name: 'Blue Heart Movement',
    image: '/assets/images/partners/blueheart-movement.jpeg',
  },
  {
    name: 'Tuungane CBO',
    image: '/assets/images/partners/tuungane-cbo.jpeg',
    note: 'Together for Prosperity',
  },
  {
    name: 'Safe Used Diapers Disposal Initiative',
    image: '/assets/images/partners/safe-used-diapers.jpeg',
  },
];

export default function PartnersPage() {
  return (
    <>
      <PageHero
        title="Our Partners & Collaborators"
        subtitle="BAHA MADZO GADZE FOR CHARITY values strategic partnerships that advance environmental conservation, community empowerment, waste management, and sustainable development."
        actions={[
          { label: 'Contact Us', href: '/contact', variant: 'primary' },
          { label: 'View Projects', href: '/projects', variant: 'secondary' },
        ]}
      />

      <Section className={styles.partnersSection}>
        <div className={styles.sectionHeader}>
          <h2>Official Confirmed Partners</h2>
          <p>
            We are proud to work with organizations and institutions that share
            our commitment to environmental protection and community impact.
          </p>
        </div>

        <div className={styles.logoGrid}>
          {partners.map((partner) => (
            <article key={partner.name} className={styles.logoCard}>
              <div className={styles.logoWrap}>
                <Image
                  src={partner.image}
                  alt={partner.name}
                  width={260}
                  height={180}
                  className={styles.logoImage}
                />
              </div>
              <h3>{partner.name}</h3>
              {partner.note ? <p>{partner.note}</p> : null}
            </article>
          ))}
        </div>
      </Section>

      <Section background="alt" className={styles.ctaSection}>
        <div className={styles.ctaBox}>
          <h2>Partner With Us</h2>
          <p>
            We welcome collaboration with institutions, community organizations,
            schools, youth groups, and stakeholders committed to environmental
            conservation and sustainable community development.
          </p>
          <Button href="/contact" variant="primary">
            Contact Us
          </Button>
        </div>
      </Section>
    </>
  );
}
