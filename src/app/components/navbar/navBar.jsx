'use client';

import { useState } from "react";
import NavLinks from "@/app/components/navbar/navLinks";
import styles from "@/app/styles/navbar/navBar.module.css";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
    <div className={styles.navbar}>
      <div className={styles.navContainer}>
          {/* Botón Hamburguesa (solo se mostrará en pantallas ≤817px según CSS) */}
          <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`} 
          onClick={toggleMenu} 
          aria-label="Toggle navigation menu">
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        <NavLinks isOpen={menuOpen}/>
        <div className={styles.placeholder}></div>
      </div>
    </div>
    )
}
