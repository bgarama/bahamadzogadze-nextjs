export type GalleryAlbum = {
  slug: string;
  date: string;
  location: string;
  title: string;
  description: string;
  coverImage: string;
  images: { src: string; alt: string }[];
};

export const galleryAlbums: GalleryAlbum[] = [
  {
    slug: 'world-desertification-and-drought-day-2026',
    date: '17 June 2026',
    location: 'Vipingo, Kilifi County',
    title: 'World Desertification and Drought Day 2026',
    description:
      'BAHA MADZO GADZE FOR CHARITY joined stakeholders in commemorating World Desertification and Drought Day 2026, where both the organization and Chairperson Mr. Steven Otieno were recognized for environmental conservation efforts.',
    coverImage:
      '/assets/images/articles/world-desertification-drought-day-2026/wddd-2026-01-event-banner.jpeg',
    images: [
      {
        src: '/assets/images/articles/world-desertification-drought-day-2026/wddd-2026-01-event-banner.jpeg',
        alt: 'World Desertification and Drought Day 2026 event banner',
      },
      {
        src: '/assets/images/articles/world-desertification-drought-day-2026/wddd-2026-02-bmg-recognition-award.jpeg',
        alt: 'BAHA MADZO GADZE FOR CHARITY recognition award',
      },
      {
        src: '/assets/images/articles/world-desertification-drought-day-2026/wddd-2026-04-cultural-performance.jpeg',
        alt: 'Cultural performance during the event',
      },
      {
        src: '/assets/images/articles/world-desertification-drought-day-2026/wddd-2026-06-award-ceremony.jpeg',
        alt: 'Award ceremony during World Desertification and Drought Day 2026',
      },
    ],
  },
  {
    slug: 'world-oceans-day-2026',
    date: '8 June 2026',
    location: 'Vidazini Beach, Kilifi',
    title: 'World Oceans Day 2026',
    description:
      'Environmental education and beach cleanup action to protect Kilifi’s marine ecosystem.',
    coverImage: '/assets/images/articles/world-ocean-day-2026/ocean-day-1.jpeg',
    images: [
      {
        src: '/assets/images/articles/world-ocean-day-2026/ocean-day-1.jpeg',
        alt: 'World Oceans Day 2026 main event image',
      },
      {
        src: '/assets/images/articles/world-ocean-day-2026/ocean-day-2.jpeg',
        alt: 'World Oceans Day activity',
      },
      {
        src: '/assets/images/articles/world-ocean-day-2026/ocean-day-3.jpeg',
        alt: 'Beach cleanup activity',
      },
    ],
  },
  {
    slug: 'world-environment-day-2026',
    date: '5 June 2026',
    location: 'Pwani University, Kilifi',
    title: 'World Environment Day 2026',
    description:
      'Tree planting, climate action awareness, and stakeholder participation for a greener Kilifi.',
    coverImage:
      '/assets/images/articles/world-environment-day-2026/environment-1.jpeg',
    images: [
      {
        src: '/assets/images/articles/world-environment-day-2026/environment-1.jpeg',
        alt: 'World Environment Day 2026 main image',
      },
      {
        src: '/assets/images/articles/world-environment-day-2026/environment-2.jpeg',
        alt: 'World Environment Day activity',
      },
      {
        src: '/assets/images/articles/world-environment-day-2026/environment-3.jpeg',
        alt: 'Tree planting activity',
      },
    ],
  },
  {
    slug: 'zero-plastic-football-fiesta-2025',
    date: 'December 2025',
    location: 'Mnarani, Kilifi',
    title: 'Zero Plastic Football Fiesta 2025',
    description:
      'A sports-for-environment initiative combining cleanup, youth engagement, and plastic pollution awareness.',
    coverImage:
      '/assets/images/articles/Zero-Plastic-Football-Fiesta-2025/football-1.jpeg',
    images: [
      {
        src: '/assets/images/articles/Zero-Plastic-Football-Fiesta-2025/football-1.jpeg',
        alt: 'Zero Plastic Football Fiesta main event image',
      },
      {
        src: '/assets/images/articles/Zero-Plastic-Football-Fiesta-2025/football-2.jpeg',
        alt: 'Zero Plastic Football Fiesta activity',
      },
      {
        src: '/assets/images/articles/Zero-Plastic-Football-Fiesta-2025/football-3.jpeg',
        alt: 'Community participation during the football fiesta',
      },
    ],
  },
];
