import Image from "next/image";
import Link from "next/link";
import { SkillsInvolved } from "@/app/components/main/skills/skillsInvolved";
import styles from "@/app/styles/projects/project.module.css";

export function Project ({ name, description, link, image, technologies }) {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer" className={styles.containerLink}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src={image} alt={name + ' image'} className={styles.image} width={365} height={185}/>
        </div>
        <h3>{name}</h3>
        <p className={styles.description}>
          {description}
        </p>
        <div className={styles.skillsInvolvedContainer}>
          <SkillsInvolved images={technologies} /> {/* Asegúrate de pasar las props necesarias */}
        </div>
      </div>
    </Link>
  );
};
