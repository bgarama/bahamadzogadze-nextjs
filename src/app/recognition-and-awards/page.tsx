import PageHero from '@/components/ui/PageHero';
import Section from '@/components/ui/Section';

export default function RecognitionAndAwardsPage() {
  return (
    <>
      <PageHero
        title="Recognition & Awards"
        subtitle="Celebrating milestones, achievements, and recognition received through our work and community impact."
        actions={[
          { label: 'View Projects', href: '/projects', variant: 'primary' },
          { label: 'Contact Us', href: '/contact', variant: 'secondary' },
        ]}
      />

      <Section>
        <h2>Awards and Recognition Coming Soon</h2>
        <p>
          We are preparing this page to highlight honors, recognitions,
          achievements, and institutional milestones.
        </p>
      </Section>
    </>
  );
}
