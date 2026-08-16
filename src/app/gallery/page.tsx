import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gallery',
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
    'innovation',
    'climate action',
    'tree planting',
    'waste management',
    'recycling',
    'Zero Plastic',
    'environmental education',
    'gallery',
  ],
  alternates: {
    canonical: '/gallery',
  },
  openGraph: {
    title: 'BAHA MADZO GADZE FOR CHARITY',
    description: 'Working Together for a Cleaner, Greener Kilifi',
  },
};

const albums = [
  {
    date: '17 June 2026',
    location: 'Vipingo, Kilifi County',
    title: 'World Desertification and Drought Day 2026',
    description:
      'BAHA MADZO GADZE FOR CHARITY joined stakeholders in commemorating World Desertification and Drought Day 2026, where both the organization and Chairperson Mr. Steven Otieno were recognized for environmental conservation efforts.',
    image:
      '/assets/images/articles/world-desertification-drought-day-2026/wddd-2026-01-event-banner.jpeg',
    href: '/articles/world-desertification-drought-day-2026',
  },
  {
    date: '8 June 2026',
    location: 'Vidazini Beach',
    title: 'World Oceans Day 2026',
    description:
      'Environmental education and beach cleanup action to protect Kilifi’s marine ecosystem.',
    image: '/assets/images/articles/world-ocean-day-2026/ocean-day-1.jpeg',
    href: '/articles/world-ocean-day-2026',
  },
  {
    date: '5 June 2026',
    location: 'Pwani University',
    title: 'World Environment Day 2026',
    description:
      'Tree planting, climate action awareness, and stakeholder participation for a greener Kilifi.',
    image: '/assets/images/articles/world-environment-day-2026/environment-1.jpeg',
    href: '/articles/world-environment-day-2026',
  },
  {
    date: 'December 2025',
    location: 'Mnarani, Kilifi',
    title: 'Zero Plastic Football Fiesta 2025',
    description:
      'A sports-for-environment initiative combining cleanup, youth engagement, and plastic pollution awareness.',
    image:
      '/assets/images/articles/Zero-Plastic-Football-Fiesta-2025/football-1.jpeg',
    href: '/articles/zero-plastic-football-fiesta-2025',
  },
];

const featuredMoments = [
  {
    src: '/assets/images/articles/world-desertification-drought-day-2026/wddd-2026-02-bmg-recognition-award.jpeg',
    alt: 'BAHA MADZO GADZE FOR CHARITY certificate recognition',
  },
  {
    src: '/assets/images/articles/world-desertification-drought-day-2026/wddd-2026-03-chairperson-recognition-award.jpeg',
    alt: 'Mr Steven Otieno certificate recognition',
  },
  {
    src: '/assets/images/articles/world-desertification-drought-day-2026/wddd-2026-04-cultural-performance.jpeg',
    alt: 'World Desertification and Drought Day cultural performance',
  },
  {
    src: '/assets/images/articles/world-desertification-drought-day-2026/wddd-2026-06-award-ceremony.jpeg',
    alt: 'Award ceremony during World Desertification and Drought Day 2026',
  },
  {
    src: '/assets/images/articles/world-ocean-day-2026/ocean-day-2.jpeg',
    alt: 'World Oceans Day activity',
  },
  {
    src: '/assets/images/articles/world-ocean-day-2026/ocean-day-3.jpeg',
    alt: 'Beach cleanup activity',
  },
  {
    src: '/assets/images/articles/world-environment-day-2026/environment-2.jpeg',
    alt: 'World Environment Day activity',
  },
  {
    src: '/assets/images/articles/world-environment-day-2026/environment-3.jpeg',
    alt: 'Tree planting activity',
  },
  {
    src: '/assets/images/articles/Zero-Plastic-Football-Fiesta-2025/football-2.jpeg',
    alt: 'Zero Plastic Football Fiesta activity',
  },
  {
    src: '/assets/images/articles/Zero-Plastic-Football-Fiesta-2025/football-3.jpeg',
    alt: 'Community participation',
  },
];

const courseStructureImages = [
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

export default function GalleryPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>Gallery</h1>
          <p>
            Moments from our environmental campaigns, community cleanups,
            school programs, tree planting activities, and partner engagements.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Event Albums</h2>

          <div className="card-grid">
            {albums.map((album) => (
              <article key={album.title} className="content-card">
                <Image
                  src={album.image}
                  alt={album.title}
                  width={800}
                  height={500}
                  className="card-image"
                />
                <div className="card-body">
                  <p className="meta">
                    {album.date} • {album.location}
                  </p>
                  <h3>{album.title}</h3>
                  <p>{album.description}</p>
                  <Link href={album.href} className="btn-primary">
                    View Album
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2>Featured Moments</h2>

          <div className="image-grid">
            {featuredMoments.map((image) => (
              <Image
                key={image.src}
                src={image.src}
                alt={image.alt}
                width={800}
                height={600}
                className="gallery-image"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>BAHA Digital - Course Structure</h2>

          <div className="image-grid image-grid-three">
            {courseStructureImages.map((image) => (
              <Image
                key={image.src}
                src={image.src}
                alt={image.alt}
                width={800}
                height={600}
                className="gallery-image"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <p>
            Every image reflects community action, partnership, and environmental
            responsibility.
          </p>
          <Link href="/contact" className="btn-primary">
            Partner With Us
          </Link>
        </div>
      </section>
    </main>
  );
}
