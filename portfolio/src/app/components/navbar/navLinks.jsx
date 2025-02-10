'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "@/app/styles/navbar/navLinks.module.css";

const links = [
    {name: "Presentation", href: "#presentation"},
    {name: "Projects", href: "#projects"},
    {name: "Skills", href: "#skills"},
    {name: "Work Experience", href: "#experience"},
    {name: "Education", href: "#education"}
];

export default function NavLinks({ isOpen }) {
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        const handleHashChange = () => {
            setActiveLink(window.location.hash);
        };

        // Update URL without reloading the page
        const updateURL = (hash) => {
            if (window.history.pushState) {
                window.history.pushState(null, null, hash);
            } else {
                window.location.hash = hash;
            }
        };

        // Initialize intersection observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const hash = `#${entry.target.id}`;
                    setActiveLink(hash);
                    updateURL(hash);
                }
            });
        }, {rootMargin: "-10% 0px -60% 0px"});

        // Observe each section
        links.forEach(link => {
            const section = document.querySelector(link.href);
            if (section) {
                observer.observe(section);
            }
        });

        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
            observer.disconnect(); // Cleanup observer
        };
    }, []);

    return (
        <nav className={`${styles.nav} ${isOpen ? styles.activeMenu : ""}`}>
            <ul className={styles.ul}>
                {links.map((link) => (
                    <li key={link.name} className={`${styles.li} ${styles.navItem}`}>
                        <Link href={link.href} className={`${styles['nav-link']} ${activeLink === link.href ? styles['active'] : ''}`}>
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}