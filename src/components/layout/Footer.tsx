import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <h3 className={styles.title}>BAHA MADZO GADZE FOR CHARITY</h3>

        <p className={styles.text}>
          Environmental Conservation • Sustainable Waste Management • Climate Action
        </p>
        <p className={styles.text}>Mnarani, Kilifi County, Kenya</p>
        <p className={styles.text}>
          Email:{' '}
          <a href="mailto:info@bahamadzogadze.com">info@bahamadzogadze.com</a>
        </p>

        <div className={styles.motto}>
          USAFI WA MAZINGIRA YETU NI JUKUMU LETU SOTE
        </div>

        <p className={styles.copy}>
          &copy; {currentYear} BAHA MADZO GADZE FOR CHARITY. All rights reserved.
        </p>

        <p className={styles.credits}>
          Powered by{' '}
          <Link href="/baha-digital">Baha Digital Innovation Hub</Link>
        </p>
      </div>
    </footer>
  );
}