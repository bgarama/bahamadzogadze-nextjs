import PageHero from '@/components/ui/PageHero';
import Section from '@/components/ui/Section';

export default function NewsPage() {
  return (
    <>
      <PageHero
        title="News & Updates"
        subtitle="Stay informed about our latest activities, community programs, environmental work, and organizational updates."
        actions={[
          { label: 'View Projects', href: '/projects', variant: 'primary' },
          { label: 'Contact Us', href: '/contact', variant: 'secondary' },
        ]}
      />

      <Section>
        <h2>Latest Stories Coming Soon</h2>
        <p>
          We are preparing this page to share announcements, program updates,
          impact stories, and important news from BAHA Madzo Gadze for Charity.
        </p>
      </Section>
    </>
  );
}
