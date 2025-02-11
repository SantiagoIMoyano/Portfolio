import styles from "@/app/page.module.css";
import TypingEffect from "@/app/components/typingEffect";
import typingEffectStyles from "@/app/styles/typingEffect.module.css";
import dotenv from 'dotenv';

dotenv.config();

export default function Home() {
  return (
    <div className={`${styles.container} ${typingEffectStyles["center-container"]}`}>
      <TypingEffect text="Hi, my name is Santiago Moyano. Welcome to my portfolio!"
      speed={100}
      className={typingEffectStyles["orbitron-presentation"]}
      fadeOutAfterTyping={true}/>
    </div>
  );
}
