import styles from "@/app/styles/elements/image.module.css";
import Image from 'next/image';

export function ImageComponent({ src, alt, size = 300 }) {
  return (
    <div className={styles.imageContainer}
    style={{ width: size, height: size }}>
      <Image
        src={src}
        width={500}
        height={500}
        className={styles.image}
        alt={alt}
      />
    </div>
  );
}