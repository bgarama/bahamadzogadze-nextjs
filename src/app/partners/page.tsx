import PageHero from '@/components/ui/PageHero';
import Section from '@/components/ui/Section';

export default function PartnersPage() {
  return (
    <>
      <PageHero
        title="Partners"
        subtitle="We value collaboration with organizations, institutions, and communities that support our mission and shared impact."
        actions={[
          { label: 'Contact Us', href: '/contact', variant: 'primary' },
          { label: 'View Projects', href: '/projects', variant: 'secondary' },
        ]}
      />

      <Section>
        <h2>Partnership Information Coming Soon</h2>
        <p>
          We are preparing this page to showcase our partners, collaborations,
          and opportunities for joint community and environmental action.
        </p>
      </Section>
    </>
  );
}
