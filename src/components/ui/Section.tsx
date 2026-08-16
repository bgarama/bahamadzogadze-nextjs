import type { ElementType, ReactNode } from 'react';
import styles from './Section.module.css';

type SectionProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  background?: 'default' | 'alt' | 'soft';
  as?: ElementType;
  id?: string;
};

export default function Section({
  children,
  className = '',
  containerClassName = '',
  background = 'default',
  as: Tag = 'section',
  id,
}: SectionProps) {
  const sectionClassName = [
    styles.section,
    styles[background],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const containerClassNames = [styles.container, containerClassName]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag className={sectionClassName} id={id}>
      <div className={containerClassNames}>{children}</div>
    </Tag>
  );
}
