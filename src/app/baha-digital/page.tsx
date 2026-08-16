import PageHero from '@/components/ui/PageHero';
import Section from '@/components/ui/Section';

export default function BahaDigitalPage() {
  return (
    <>
      <PageHero
        title="BAHA Digital"
        subtitle="Digital learning, community empowerment, and practical skills for sustainable impact."
        actions={[
          { label: 'Contact Us', href: '/contact', variant: 'primary' },
          { label: 'View Projects', href: '/projects', variant: 'secondary' },
        ]}
      />

      <Section>
        <h2>Coming Soon</h2>
        <p>
          We are preparing this page with more details about BAHA Digital
          programs, learning pathways, and community opportunities.
        </p>
      </Section>
    </>
  );
}
