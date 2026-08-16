import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/who-we-are', label: 'Who We Are' },
  { href: '/projects', label: 'Projects' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/news', label: 'News' },
  { href: '/recognition-and-awards', label: 'Recognition & Awards' },
  { href: '/partners', label: 'Partners' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/baha-digital', label: 'BAHA Digital' },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="https://bgarama.github.io/BMG-CHARITY-WEBSITE/assets/images/bmg-logo.jpeg"
            alt="BAHA MADZO GADZE FOR CHARITY logo"
            width={64}
            height={64}
            className={styles.logoImage}
            priority
          />
          <span className={styles.logoText}>BAHA MADZO GADZE FOR CHARITY</span>
        </Link>

        <nav className={styles.nav} aria-label="Main navigation">
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/staff-login" className={styles.staffBtn}>
                Staff Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
