import styles from "@/app/styles/skills/skillsInvolved.module.css";
import Image from "next/image";

export function SkillsInvolved ({ images }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Skills involved</h2>
      <div className={styles.icons}>
        {images.map((obj, index) => (
          <Image key={index} src={obj.image} alt={`Skill ${index + 1}`} width={500} height={500} className={styles.icon} />
        ))}
      </div>
    </div>
  );
};
