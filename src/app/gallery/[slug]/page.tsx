import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { galleryAlbums } from '../galleryData';
import styles from './page.module.css';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return galleryAlbums.map((album) => ({
    slug: album.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const album = galleryAlbums.find((item) => item.slug === slug);

  if (!album) {
    return {
      title: 'Album Not Found',
    };
  }

  return {
    title: `${album.title} | Gallery`,
    description: album.description,
    alternates: {
      canonical: `/gallery/${album.slug}`,
    },
    openGraph: {
      title: `${album.title} | BAHA MADZO GADZE FOR CHARITY`,
      description: album.description,
      images: [
        {
          url: album.coverImage,
        },
      ],
    },
  };
}

export default async function GalleryAlbumPage({ params }: PageProps) {
  const { slug } = await params;
  const album = galleryAlbums.find((item) => item.slug === slug);

  if (!album) {
    notFound();
  }

  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.container}>
          <p className={styles.breadcrumb}>
            <Link href="/gallery">Gallery</Link> / <span>{album.title}</span>
          </p>
          <h1>{album.title}</h1>
          <p className={styles.meta}>
            {album.date} • {album.location}
          </p>
          <p className={styles.description}>{album.description}</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.imageGrid}>
            {album.images.map((image) => (
              <div key={image.src} className={styles.imageWrap}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className={styles.image}
                />
              </div>
            ))}
          </div>

          <div className={styles.actions}>
            <Link href="/gallery" className={styles.secondaryLink}>
              Back to Gallery
            </Link>
            <Link href="/contact" className={styles.primaryLink}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
