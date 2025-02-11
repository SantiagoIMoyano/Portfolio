import NavBar from "@/app/components/navbar/navBar";
import styles from "@/app/styles/layoutMain.module.css";

export default function Layout({ children }) {

    return (
      <div className={styles['layout-container']}>
        <div className={styles['layout-navbar']}>
          <NavBar />
        </div>
        <div id="layout-content" className={styles['layout-content']}>
          <div className={styles['inner-content']}>
            {children}
          </div>
        </div>
      </div>
    )
}

