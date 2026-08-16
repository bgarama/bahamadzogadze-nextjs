import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/components/ui/PageHero';
import Section from '@/components/ui/Section';
import styles from './page.module.css';

const newsItems = [
  {
    title: 'World Desertification and Drought Day 2026',
    date: '17 June 2026',
    location: 'Vipingo, Kilifi County',
    image:
      '/assets/images/articles/world-desertification-drought-day-2026/wddd-2026-01-event-banner.jpeg',
    summary:
      'BAHA MADZO GADZE FOR CHARITY participated in World Desertification and Drought Day 2026 under the theme “Rangelands: Recognize, Respect, Restore,” where both the organization and Chairperson Mr. Steven Otieno received Certificates of Recognition.',
  },
  {
    title: 'World Oceans Day 2026',
    date: '8 June 2026',
    location: 'Vidazini Beach, Kilifi',
    image: '/assets/images/articles/world-ocean-day-2026/ocean-day-1.jpeg',
    summary:
      'BAHA MADZO GADZE FOR CHARITY joined partners and community members in commemorating World Oceans Day 2026 through environmental education and a large-scale beach cleanup campaign aimed at protecting our marine ecosystem.',
  },
  {
    title: 'World Environment Day 2026',
    date: '5 June 2026',
    location: 'Pwani University, Kilifi',
    image:
      '/assets/images/articles/world-environment-day-2026/environment-1.jpeg',
    summary:
      'Over 5,000 seedlings were planted as BAHA MADZO GADZE FOR CHARITY joined environmental stakeholders in commemorating World Environment Day.',
  },
  {
    title: 'Zero Plastic Football Fiesta 2025',
    date: 'December 2025',
    location: 'Mnarani, Kilifi',
    image:
      '/assets/images/articles/Zero-Plastic-Football-Fiesta-2025/football-1.jpeg',
    summary:
      'A sports-for-environment initiative combining football, youth engagement, plastic pollution awareness, and community cleanup action.',
  },
];

export default function NewsPage() {
  return (
    <>
      <PageHero
        title="News & Updates"
        subtitle="Follow the latest activities, environmental campaigns, community actions, and impact stories from BAHA MADZO GADZE FOR CHARITY."
        actions={[
          { label: 'View Gallery', href: '/gallery', variant: 'primary' },
          { label: 'View Projects', href: '/projects', variant: 'secondary' },
        ]}
      />

      <Section>
        <div className={styles.intro}>
          <h2>Latest News</h2>
          <p>
            Stay informed about our ongoing environmental work, community
            initiatives, public awareness campaigns, and organizational
            milestones across Kilifi County and beyond.
          </p>
        </div>

        <div className={styles.grid}>
          {newsItems.map((item) => (
            <article key={item.title} className={styles.card}>
              <div className={styles.imageWrap}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={styles.image}
                />
              </div>

              <div className={styles.cardContent}>
                <p className={styles.meta}>
                  {item.date} • {item.location}
                </p>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>

                <div className={styles.actions}>
                  <Link href="/gallery" className={styles.primaryLink}>
                    View Gallery
                  </Link>
                  <Link href="/contact" className={styles.secondaryLink}>
                    Contact Us
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section background="soft">
        <div className={styles.ctaBlock}>
          <h2>More Updates Coming</h2>
          <p>
            This page will continue to feature major activities, campaigns,
            achievements, and community stories as our work grows.
          </p>
          <div className={styles.actions}>
            <Link href="/projects" className={styles.primaryLink}>
              Explore Our Projects
            </Link>
            <Link href="/contact" className={styles.secondaryLink}>
              Get in Touch
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}