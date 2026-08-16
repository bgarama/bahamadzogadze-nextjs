import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'BAHA MADZO GADZE FOR CHARITY is an environmental conservation organization based in Mnarani, Kilifi County, Kenya, promoting sustainable waste management, climate action, and digital innovation. Get in touch with us today.',
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
    'contact',
  ],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Us | BAHA MADZO GADZE FOR CHARITY',
    description:
      'Reach out to BAHA MADZO GADZE FOR CHARITY for partnerships, volunteering, and community engagement',
  },
};

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <h1>Contact Us</h1>
          <p>
            Reach out to BAHA MADZO GADZE FOR CHARITY for partnerships,
            volunteering, programs, and community engagement.
          </p>
        </div>
      </section>

      <section className={`${styles.contactSection} section`}>
        <div className="container">
          <div className={styles.contactGrid}>
            <article className={styles.contactCard}>
              <h2>Get in Touch</h2>

              <p>
                <strong>📍 Location:</strong>
                <br />
                Mnarani, Kilifi County, Kenya
              </p>

              <p>
                <strong>📧 Email:</strong>
                <br />
                <a href="mailto:info@bahamadzogadze.com">
                  info@bahamadzogadze.com
                </a>
              </p>

              <p>
                <strong>💬 WhatsApp:</strong>
              </p>

              <a
                className={styles.whatsappBtn}
                href="https://wa.me/254757285221?text=Hello%20BAHA%20MADZO%20GADZE%20FOR%20CHARITY,%0A%0AI%20hope%20you%20are%20doing%20well.%0A%0AI%20visited%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20initiatives.%0A%0AThank%20you!"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat with Us on WhatsApp
              </a>
            </article>

            <article className={styles.contactCard}>
              <h2>Connect With Us</h2>

              <div className={styles.socialLinks}>
                <a
                  href="https://www.facebook.com/share/198gD3y4k2/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/baha_madzo_gadze_org?utm_source=qr&igsh=aHphdDA0cDFqM2tn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
                <a
                  href="https://www.tiktok.com/@bahamadzogadze?_r=1&_t=ZN-96p7cb2HRVm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TikTok
                </a>
                <a
                  href="https://youtube.com/@bahamadzogadze?si=qpIWCWLtvRio9Wnt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube
                </a>
                <a
                  href="https://x.com/bmgforcharity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  X / Twitter
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className={`${styles.formSection} section`}>
        <div className="container">
          <h2>Send Us a Message</h2>

          <form
            action="https://formspree.io/f/mbdebjqp"
            method="POST"
            className={styles.contactForm}
          >
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <input type="text" name="subject" placeholder="Subject" required />
            <textarea
              name="message"
              rows={6}
              placeholder="Your Message"
              required
            />
            <button type="submit" className={styles.submitBtn}>
              Send Message
            </button>
          </form>

          <p className={styles.formNote}>
            ✅ Your message will be sent directly to our email. We typically
            respond within 24-48 hours.
          </p>
        </div>
      </section>

      <section className={`${styles.mapSection} section`}>
        <div className="container">
          <h2>Find Us</h2>

          <div className={styles.mapBox}>
            <iframe
              src="https://www.google.com/maps?q=Mnarani,%20Kilifi,%20Kenya&output=embed"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Map showing Mnarani, Kilifi, Kenya"
            />
          </div>
        </div>
      </section>
    </div>
  );
}