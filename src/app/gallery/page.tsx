import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { galleryAlbums } from './galleryData';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Explore photo albums from BAHA MADZO GADZE FOR CHARITY environmental campaigns, community cleanups, tree planting activities, and partner engagements.',
  alternates: {
    canonical: '/gallery',
  },
  openGraph: {
    title: 'Gallery | BAHA MADZO GADZE FOR CHARITY',
    description: 'Moments from our environmental campaigns and community action.',
  },
};

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
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>Gallery</h1>
          <p>
            Moments from our environmental campaigns, community cleanups,
            school programs, tree planting activities, and partner engagements.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <h2>Event Albums</h2>
            <p>
              Explore photo albums from major activities and community events
              led by BAHA MADZO GADZE FOR CHARITY.
            </p>
          </div>

          <div className={styles.cardGrid}>
            {galleryAlbums.map((album) => (
              <article key={album.slug} className={styles.card}>
                <div className={styles.cardImageWrap}>
                  <Image
                    src={album.coverImage}
                    alt={album.title}
                    fill
                    className={styles.cardImage}
                  />
                </div>

                <div className={styles.cardBody}>
                  <p className={styles.meta}>
                    {album.date} • {album.location}
                  </p>
                  <h3>{album.title}</h3>
                  <p>{album.description}</p>
                  <Link
                    href={`/gallery/${album.slug}`}
                    className={styles.primaryLink}
                  >
                    View Album
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.altSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <h2>BAHA Digital - Course Structure</h2>
            <p>
              Visual learning materials and course structure resources from
              BAHA Digital Innovation Hub.
            </p>
          </div>

          <div className={styles.imageGrid}>
            {courseStructureImages.map((image) => (
              <div key={image.src} className={styles.galleryImageWrap}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className={styles.galleryImage}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.ctaBlock}>
            <p>
              Every image reflects community action, partnership, and
              environmental responsibility.
            </p>
            <Link href="/contact" className={styles.primaryLink}>
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
