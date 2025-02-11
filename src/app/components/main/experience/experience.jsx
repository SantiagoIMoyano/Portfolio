import styles from '@/app/styles/experience/experience.module.css';
import { ImageComponent } from '@/app/components/main/elements/image';
import { SkillsInvolved } from '@/app/components/main/skills/skillsInvolved';
import { Columns } from '@/app/components/main/elements/columns';
import { Card } from '@/app/components/main/elements/card';
import { fetchExperiences } from '@/app/lib/experienceData';

export default async function Experience () {
  const { experiences } = await fetchExperiences();

  return (
    <Card title="Experience">
      {experiences.map((experience, index) => (
        <Card key={index} title={experience.workplace} centerTitle>
          <div className={styles.container}>
            <div className={styles.imageSection}>
              <h4 className={styles.subtitle}>{'Seniority: ' + experience.seniority}</h4>
              <ImageComponent src={experience.image} alt={experience.workplace} />
              <SkillsInvolved images={experience.technologies} />
            </div>
            <Columns text={experience.description} />
          </div>
        </Card>
      ))}
    </Card>
  );
};
