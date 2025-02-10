import styles from '@/app/styles/elements/cards.module.css';

export function Card({ title, children, centerTitle }) {
  const headerClass = centerTitle ? styles.centerTitle : '';
  const titleClass = `${styles.cardTitle} ${headerClass}`;

  return (
    <div className={styles.cardContainer}>
      <div className={`${styles.cardHeader} ${headerClass}`}>
        <h3 className={titleClass}>
          {title}
        </h3>
      </div>
      <div className={styles.cardContent}>
        {children}
      </div>
    </div>
  );
}