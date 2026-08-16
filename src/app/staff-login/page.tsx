import PageHero from '@/components/ui/PageHero';
import Section from '@/components/ui/Section';

export default function StaffLoginPage() {
  return (
    <>
      <PageHero
        title="Staff Login"
        subtitle="Secure access for staff and authorized team members."
        actions={[
          { label: 'Back Home', href: '/', variant: 'outline' },
          { label: 'Contact Support', href: '/contact', variant: 'primary' },
        ]}
      />

      <Section>
        <h2>Login Area Coming Soon</h2>
        <p>
          This section is being prepared for internal staff access, secure tools,
          and administrative resources.
        </p>
      </Section>
    </>
  );
}
