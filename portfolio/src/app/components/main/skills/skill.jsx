import styles from '@/app/styles/skills/skill.module.css';
import Image from 'next/image';

export function Skill({name, src, alt, size, color, level, selectedColor, onClick, moreText}) {
  const isActive = selectedColor === color;

  const handleClick = () => {
    onClick(color, { name, moreText });
  };

  const activeStyle = isActive
    ? {
        background: color,
        boxShadow: `0 0 20px 10px ${color}`,
      }
    : {};

  return (
    <div className={`${styles.skillContainer} color-${color.replace('#', '')}`} data-name={name} data-moretext={moreText}>
      <div
        className={`${styles.circleContainer} ${isActive ? styles.active : ''}`}
        onClick={handleClick}
      >
        <div className={styles.outerCircle}></div>
        <div className={styles.dottedCircle}></div>
        <div className={styles.colorCircle} style={activeStyle}></div>
        <div className={styles.innerCircle}>
          <Image
            src={src}
            width={size}
            height={size}
            className={styles.image}
            alt={alt}
          />
        </div>
        <div className={styles.skillLevel}>
          {level}
        </div>
      </div>
    </div>
  );
}