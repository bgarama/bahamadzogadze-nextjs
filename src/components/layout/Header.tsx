'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

const primaryNavItems = [
  { href: '/', label: 'Home' },
  { href: '/who-we-are', label: 'Who We Are' },
  { href: '/projects', label: 'Projects' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/partners', label: 'Partners' },
  { href: '/contact', label: 'Contact' },
];

const moreNavItems = [
  { href: '/news', label: 'News' },
  { href: '/recognition-and-awards', label: 'Recognition & Awards' },
  { href: '/baha-digital', label: 'BAHA Digital' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLLIElement | null>(null);

  const closeAllMenus = () => {
    setMenuOpen(false);
    setMoreOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (moreRef.current && !moreRef.current.contains(event.target as Node)) {
        setMoreOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.topRow}>
          <Link href="/" className={styles.logo} onClick={closeAllMenus}>
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

          <button
            type="button"
            className={styles.menuToggle}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => {
              setMenuOpen((prev) => !prev);
              setMoreOpen(false);
            }}
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </div>

        <nav
          className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}
          aria-label="Main navigation"
        >
          <ul className={styles.navList}>
            {primaryNavItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={closeAllMenus}>
                  {item.label}
                </Link>
              </li>
            ))}

            <li className={styles.moreItem} ref={moreRef}>
              <button
                type="button"
                className={styles.moreToggle}
                aria-expanded={moreOpen}
                onClick={() => setMoreOpen((prev) => !prev)}
              >
                More
                <span className={styles.caret}>▾</span>
              </button>

              <ul className={`${styles.dropdown} ${moreOpen ? styles.dropdownOpen : ''}`}>
                {moreNavItems.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} onClick={closeAllMenus}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li className={styles.staffItem}>
              <Link href="/staff-login" className={styles.staffBtn} onClick={closeAllMenus}>
                Staff Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}