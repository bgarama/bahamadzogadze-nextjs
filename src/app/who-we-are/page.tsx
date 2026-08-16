import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/ui/PageHero';
import Button from '@/components/ui/Button';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Who We Are',
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
    'climate action',
    'tree planting',
    'waste management',
    'recycling',
    'Zero Plastic',
    'environmental education',
  ],
  alternates: {
    canonical: '/who-we-are',
  },
};

const values = [
  'Environmental Stewardship',
  'Community Participation',
  'Sustainability',
  'Education & Awareness',
  'Transparency, Integrity & Accountability',
  'Innovation & Collaboration',
];

const leadership = [
  {
    name: 'Baraka Garama',
    role: 'Founder, CEO & Director',
    image: 'https://bgarama.github.io/BMG-CHARITY-WEBSITE/assets/images/baraka.jpeg',
  },
  {
    name: 'Steven Fanuel Otieno',
    role: 'Chairperson',
    image: 'https://bgarama.github.io/BMG-CHARITY-WEBSITE/assets/images/steven.jpeg',
  },
  {
    name: 'Salma Ali',
    role: 'Communication Officer & Office Secretary',
    image: 'https://bgarama.github.io/BMG-CHARITY-WEBSITE/assets/images/salma.jpeg',
  },
  {
    name: 'Gloria Kai',
    role: 'Treasurer',
    image: 'https://bgarama.github.io/BMG-CHARITY-WEBSITE/assets/images/gloria.jpeg',
  },
  {
    name: 'Mtawali Darius',
    role: 'Sports Coordinator',
    image: 'https://bgarama.github.io/BMG-CHARITY-WEBSITE/assets/images/mtawali.jpeg',
  },
];

const workItems = [
  {
    title: 'Zero Plastic Campaign',
    description:
      'Reducing plastic pollution through cleanups and community awareness.',
  },
  {
    title: 'Environmental Education',
    description:
      'Teaching schools and communities sustainable environmental practices.',
  },
  {
    title: 'Tree and Mangrove Restoration',
    description:
      'Restoring green spaces and strengthening climate resilience.',
  },
  {
    title: 'Sustainable Waste Management',
    description:
      'Promoting waste segregation, recycling, and circular economy practices.',
  },
  {
    title: 'Climate Action',
    description:
      'Supporting local initiatives that contribute to climate resilience.',
  },
  {
    title: 'Community Empowerment',
    description:
      'Working with volunteers, youth groups, and stakeholders for lasting impact.',
  },
];

const impactStats = [
  { value: '5,000+', label: 'Trees Planted' },
  { value: '2+ Tonnes', label: 'Plastic Collected' },
  { value: '20+', label: 'Schools Reached' },
  { value: '50+', label: 'Community Activities' },
  { value: '500+', label: 'Volunteers Engaged' },
];

export default function WhoWeArePage() {
  return (
    <div className={styles.page}>
      <PageHero
        title="Who We Are"
        subtitle="Learn about BAHA MADZO GADZE FOR CHARITY, our story, mission, values, leadership, and commitment to a cleaner, greener Kilifi."
      />

      <section className={`${styles.story} section`}>
        <div className="container">
          <div className={styles.storyIntro}>
            <span className={styles.eyebrow}>Founded in 2017</span>
            <h2>Our Story</h2>
          </div>

          <p>
            BAHA MADZO GADZE FOR CHARITY is a community-based environmental
            organization founded in 2017 in Mnarani, Kilifi County, Kenya.
          </p>

          <p>
            The organization was established with the vision of serving communities
            through volunteerism, environmental conservation, youth empowerment,
            and sustainable development.
          </p>

          <p>
            Over the years, we have grown into a grassroots movement bringing
            together communities, schools, government institutions, partner
            organizations, and volunteers to create practical environmental
            solutions.
          </p>

          <p>
            Today, our work focuses on protecting ecosystems, reducing pollution,
            promoting environmental education, supporting climate action, and
            empowering communities to build a cleaner and greener future.
          </p>
        </div>
      </section>

      <section className={`${styles.missionVision} section`}>
        <div className="container">
          <div className={styles.mvGrid}>
            <article className={styles.mvCard}>
              <h2>Our Mission</h2>
              <p>
                To promote environmental conservation, sustainable waste
                management, climate action, environmental education, and
                community empowerment through innovative and community-driven
                initiatives.
              </p>
            </article>

            <article className={styles.mvCard}>
              <h2>Our Vision</h2>
              <p>
                To build a cleaner, greener, and more sustainable future where
                every community actively protects and values the environment.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className={`${styles.valuesSection} section`}>
        <div className="container">
          <h2>Our Core Values</h2>

          <div className={styles.valuesGrid}>
            {values.map((value) => (
              <article key={value} className={styles.valueCard}>
                <h3>{value}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.leadership} section`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Our Leadership Team</h2>

          <p className={styles.sectionText}>
            Meet the dedicated leaders guiding BAHA MADZO GADZE FOR CHARITY
            towards a cleaner, greener, and more sustainable future.
          </p>

          <div className={styles.teamGrid}>
            {leadership.map((member) => (
              <article key={member.name} className={styles.teamCard}>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={320}
                  height={320}
                />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.whatWeDo} section`}>
        <div className="container">
          <h2>What We Do</h2>

          <div className={styles.workGrid}>
            {workItems.map((item) => (
              <article key={item.title} className={styles.workCard}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
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
          <h2>USAFI WA MAZINGIRA YETU NI JUKUMU LETU SOTE</h2>
          <p>Keeping our environment clean is everyone&apos;s responsibility.</p>
          <Button href="/contact" variant="secondary" size="lg">
            Join Our Mission
          </Button>
        </div>
      </section>
    </div>
  );
}