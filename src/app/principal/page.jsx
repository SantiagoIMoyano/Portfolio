import Presentation from "@/app/components/main/presentation/presentation";
import Skills from "@/app/components/main/skills/skills";
import Experience from "@/app/components/main/experience/experience";
import styles from "@/app/styles/main.module.css";
import Education from "@/app/components/main/education/education";
import Projects from "@/app/components/main/projects/projects"

export default async function Page() {
    return (
        <main>
          <div className={`${styles.gridContainer} ${styles.smGridCols2} ${styles.lgGridCols4}`}>
            <section id="presentation" className={styles.section}>
              <Presentation/>
            </section>
            <section id="projects" className={styles.section}>
              <Projects/>
            </section>
            <section id="skills" className={styles.section}>
              <Skills/>
            </section>
            <section id="experience" className={styles.section}>
              <Experience/>
            </section>
            <section id="education" className={styles.section}>
              <Education/>
            </section>
          </div>
        </main>
    )
}