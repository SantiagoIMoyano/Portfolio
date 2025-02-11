import styles from '@/app/styles/education/education.module.css';
import { ImageComponent } from '@/app/components/main/elements/image';
import { SkillsInvolved } from '@/app/components/main/skills/skillsInvolved';
import { Columns } from '@/app/components/main/elements/columns';
import { Card } from '@/app/components/main/elements/card';
import { fetchEducations } from '@/app/lib/educationData';


export default async function Education () {
    const { educations } = await fetchEducations();

    return (
      <Card title="Education">
        {educations.map((education, index) => (
          console.log(education),
          <Card key={index} title={education.institution} centerTitle>
          <div className={styles.subtitle}>
            {education.degree}
          </div>
          <div className={styles.educationContainer}>
            <div className={styles.imageContainer}>
              <ImageComponent src={education.image} alt={education.institution + ' image'} />
            </div>
            <div className={styles.skills}>
            {education.technologies.length > 0 && (
                <SkillsInvolved images={education.technologies} />
              )}
            </div>
            <div className={styles.columnsContainer}>
              <Columns text={education.description} />
            </div>
          </div>
        </Card>
        ))}
      </Card>
    );
};
