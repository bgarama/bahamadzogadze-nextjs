import Button from './Button';
import styles from './PageHero.module.css';

type HeroAction = {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
};

type PageHeroProps = {
  title: string;
  subtitle?: string;
  actions?: HeroAction[];
  align?: 'left' | 'center';
};

export default function PageHero({
  title,
  subtitle,
  actions = [],
  align = 'center',
}: PageHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner} ${align === 'left' ? styles.left : styles.center}`}>
        <h1 className={styles.title}>{title}</h1>
        {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}

        {actions.length > 0 ? (
          <div className={styles.actions}>
            {actions.map((action) => (
              <Button
                key={`${action.label}-${action.href}`}
                href={action.href}
                variant={action.variant ?? 'primary'}
                size="lg"
              >
                {action.label}
              </Button>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
