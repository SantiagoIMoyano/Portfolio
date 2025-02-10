import styles from '@/app/styles/presentation/presentation.module.css';
import Link from 'next/link';
import { ImageComponent } from '@/app/components/main/elements/image';
import Image from 'next/image';
import { Card } from '@/app/components/main/elements/card';
import { fetchProfile } from '@/app/lib/profileData';

export default async function Presentation() {
  const { profile } = await fetchProfile();

  return (
    <div className={styles.presentationContainer}>
      <Card title='Presentation'>
        <div className={styles.cardContainer}>
          <p className={styles.cardValue}>
            {profile.presentation}
          </p>
          <div className={styles.profileContainer}>
            <ImageComponent src={'/profile.jpeg'} alt={'Presentation image'}/>
            <div className={styles.socialLinks}>
              <Link href='https://github.com/SantiagoIMoyano' target="_blank" rel='noopener noreferrer'>
                <Image src='/github.svg' alt='GitHub image' width={40} height={40}/>
              </Link>
              <Link href='https://www.linkedin.com/in/santi-moyano' target='_blank' rel='noopener noreferrer'>
                <Image src='/linkedin.svg' alt='LinkedIn image' width={40} height={40}/>
              </Link>
            </div>
            <div className={styles.downloadButton}>
              <Link href="/Resume_Santiago_Moyano_English.pdf" target='_blank' download>
                <button className={styles.button}>Download Resume</button>
              </Link>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}