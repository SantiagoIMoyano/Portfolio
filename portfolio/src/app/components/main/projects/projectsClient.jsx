'use client';

import { useState, useEffect } from 'react';
import { Project } from '@/app/components/main/projects/project';
import { Card } from '@/app/components/main/elements/card';
import styles from '@/app/styles/projects/projects.module.css';

export function ProjectsClient({ projects }) {
  const [projectsPerPage, setProjectsPerPage] = useState(2);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 677) {
        setProjectsPerPage(1);
      } else {
        setProjectsPerPage(2);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - projectsPerPage : prevIndex - projectsPerPage
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= projects.length - projectsPerPage ? 0 : prevIndex + projectsPerPage
    );
  };

  const visibleProjects = projects.slice(currentIndex, currentIndex + projectsPerPage);

  return (
    <Card title="Projects">
      <div className={styles.projectsCarousel}>
        <button
          onClick={handlePrevClick}
          className={styles.navButton}
          disabled={currentIndex === 0}
        >
          &lt;
        </button>
        <div className={styles.projectsContainer}>
          {visibleProjects.map((project, index) => (
            console.log(project),
            <div
              key={index}
              className={visibleProjects.length === 1 ? styles.singleProject : styles.project}
            >
              <Project {...project} />
            </div>
          ))}
        </div>
        <button
          onClick={handleNextClick}
          className={styles.navButton}
          disabled={currentIndex >= projects.length - projectsPerPage}
        >
          &gt;
        </button>
        <div className={styles.navigationDots}>
          {Array.from({ length: Math.ceil(projects.length / projectsPerPage) }).map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${index === Math.floor(currentIndex / projectsPerPage) ? styles.active : ''}`}
              onClick={() => setCurrentIndex(index * projectsPerPage)}
            ></span>
          ))}
        </div>
      </div>
    </Card>
  );
}