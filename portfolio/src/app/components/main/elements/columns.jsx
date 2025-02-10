import styles from "@/app/styles/elements/columns.module.css";

export function Columns({ text }) {
    return (
      <div className={styles.columnContainer}>
        {text}
      </div>
    );
  }