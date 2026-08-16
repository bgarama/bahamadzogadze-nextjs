import Image from 'next/image';
import PageHero from '@/components/ui/PageHero';
import Section from '@/components/ui/Section';
import styles from './page.module.css';

const recognitionItems = [
  {
    title: 'Community Impact Recognition',
    description:
      'Honored for mobilizing communities in Mnarani and Kilifi County toward environmental restoration and responsible waste management.',
  },
  {
    title: 'Youth Empowerment Through Action',
    description:
      'Recognized for engaging young people in conservation, clean-up campaigns, and sustainability education programs.',
  },
  {
    title: 'Climate Action Advocacy',
    description:
      'Acknowledged for championing local solutions in climate awareness, tree planting, and community environmental resilience.',
  },
];

export default function RecognitionAndAwardsPage() {
  return (
    <>
      <PageHero
        title="Recognition & Awards"
        subtitle="Celebrating milestones, achievements, and the recognition earned through our commitment to environmental conservation, sustainable waste management, and climate action."
        actions={[
          { label: 'View Projects', href: '/projects', variant: 'primary' },
          { label: 'Contact Us', href: '/contact', variant: 'secondary' },
        ]}
      />

      <Section>
        <div className={styles.intro}>
          <h2>Our Achievements</h2>
          <p>
            BAHA MADZO GADZE FOR CHARITY continues to gain recognition for
            community-led environmental action, innovative recycling
            initiatives, youth engagement, and advocacy for a cleaner and
            healthier future.
          </p>
        </div>

        <div className={styles.grid}>
          {recognitionItems.map((item) => (
            <article key={item.title} className={styles.card}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section background="soft">
        <div className={styles.spotlight}>
          <div className={styles.spotlightContent}>
            <h2>2026 Recognition Spotlight</h2>
            <p>
              In 2026, BAHA MADZO GADZE FOR CHARITY received recognition during
              World Desertification and Drought Day activities, reflecting our
              continued commitment to environmental stewardship and community
              action.
            </p>
            <div className={styles.actions}>
              <a href="/news" className={styles.primaryLink}>
                See Latest Updates
              </a>
              <a href="/contact" className={styles.secondaryLink}>
                Contact Us
              </a>
            </div>
          </div>

          <div className={styles.imageWrap}>
            <Image
              src="/assets/images/awards/2026/award-2026-01-bmg-nema-recognition.jpeg"
              alt="Recognition award received by BAHA MADZO GADZE FOR CHARITY in 2026"
              fill
              className={styles.image}
            />
          </div>
        </div>
      </Section>
    </>
  );
}
