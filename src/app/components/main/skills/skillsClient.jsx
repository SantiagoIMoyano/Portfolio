'use client';

import { Card } from "@/app/components/main/elements/card";
import { Skill } from "@/app/components/main/skills/skill";
import { useState, useRef, useEffect } from "react";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import styles from '@/app/styles/elements/popover.module.css';


export function SkillsClient({ technologies }){
    const [selectedColor, setSelectedColor] = useState(null);
    const [groupedByType, setGroupedByType] = useState({});
    const driverRef = useRef(null);

      // Defino un color fijo para cada stack
    const stackColors = {
        Python: '#00fff2' ,
        JavaScript: "#f7df1e",
        Java: "#b07219",
        Database: "#ffffff",
        DevOps: "#ff5733",
        Machine_Learning: "#26913d"
    };

    useEffect(() => {
        async function loadTechnologies() {
          
          // Se agrupan las tecnologías por su atributo "type"
          const grouped = technologies.reduce((acc, tech) => {
            const type = tech.type; // Por ejemplo: "Language", "Framework", etc.
            if (!acc[type]) {
              acc[type] = [];
            }
            acc[type].push(tech);
            return acc;
          }, {});
          
          setGroupedByType(grouped);
        }
        loadTechnologies();
      }, []);

    const handleSkillClick = (color, clickedSkill) => {
        if (color === selectedColor) {
            // Si se hace clic en una skill ya activa, desactiva el color y destruye el tour
            setSelectedColor(null);
            if (driverRef.current) {
                driverRef.current.destroy();
                driverRef.current = null;
            }
            removeNoSmoothScroll();
            return;
        }

        setSelectedColor(color);

        const colorClass = color.replace('#', 'color-');

        const steps = Array.from(document.querySelectorAll(`.${colorClass}`)).map((element) => ({
            element: element,
            popover: {
                title: element.getAttribute('data-name'),
                description: element.getAttribute('data-moretext'),
                side: 'left',
                align: 'start'
            }
        }))

        const initialStepIndex = steps.findIndex(step => step.popover.title === clickedSkill.name);

        const driverObj = driver ({
            popoverClass: styles.driverjsTheme,
            stagePadding: 30,
            stageRadius: 75,
            showProgress: true,
            showButtons: ['next', 'previous'],
            steps: steps,
            onHighlightStarted: () => {
                addNoSmoothScroll();
            },
            onDestroyed: () => {
                setSelectedColor(null);
                removeNoSmoothScroll();
              }
        })

        driverRef.current = driverObj;

        driverObj.drive(initialStepIndex);
    }

    // Función para agregar la clase noSmoothScroll
    const addNoSmoothScroll = () => {
        const layoutContent = document.getElementById('layout-content');
        if (layoutContent) {
            layoutContent.classList.add('noSmoothScroll');
            console.log("Clase 'noSmoothScroll' agregada al layout-content.");
        } else {
            console.log("No se encontró el elemento con el ID 'layout-content'.");
        }
    };

    // Función para remover la clase noSmoothScroll
    const removeNoSmoothScroll = () => {
        const layoutContent = document.getElementById('layout-content');
        if (layoutContent) {
            layoutContent.classList.remove('noSmoothScroll');
            console.log("Clase 'noSmoothScroll' removida del layout-content.");
        }
    };
    
    return (
        <>
            <Card title="Skills">
                <Card title="Languages" centerTitle>
                    {groupedByType['Language'] &&
                        groupedByType['Language'].map((item, index) => (
                        <Skill
                            key={index}
                            name={item.name}
                            src={item.image}
                            alt={item.name + ' image'}
                            size={item.sizeImage}
                            color={stackColors[item.stack]}
                            level={item.level}
                            selectedColor={selectedColor}
                            onClick={handleSkillClick}
                            moreText={item.description}
                        />
                        ))
                    }
                </Card>
                <Card title="Frameworks" centerTitle>
                    {groupedByType['Framework'] &&
                        groupedByType['Framework'].map((item, index) => (
                        <Skill
                            key={index}
                            name={item.name}
                            src={item.image}
                            alt={item.name + ' image'}
                            size={item.sizeImage}
                            color={stackColors[item.stack]}
                            level={item.level}
                            selectedColor={selectedColor}
                            onClick={handleSkillClick}
                            moreText={item.description}
                        />
                        ))
                    }
                </Card>
                <Card title="Tools and libraries" centerTitle>
                    {groupedByType['Tool'] &&
                        groupedByType['Tool'].map((item, index) => (
                        <Skill
                            key={index}
                            name={item.name}
                            src={item.image}
                            alt={item.name + ' image'}
                            size={item.sizeImage}
                            color={stackColors[item.stack]}
                            level={item.level}
                            selectedColor={selectedColor}
                            onClick={handleSkillClick}
                            moreText={item.description}
                        />
                        ))
                    }
                </Card>
                <Card title="Databases" centerTitle>
                    {groupedByType['Database'] &&
                        groupedByType['Database'].map((item, index) => (
                        <Skill
                            key={index}
                            name={item.name}
                            src={item.image}
                            alt={item.name + ' image'}
                            size={item.sizeImage}
                            color={stackColors[item.stack]}
                            level={item.level}
                            selectedColor={selectedColor}
                            onClick={handleSkillClick}
                            moreText={item.description}
                        />
                        ))
                    }
                </Card>
                <Card title="CI/CD Tools" centerTitle>
                    {groupedByType['CI/CD'] &&
                        groupedByType['CI/CD'].map((item, index) => (
                        <Skill
                            key={index}
                            name={item.name}
                            src={item.image}
                            alt={item.name + ' image'}
                            size={item.sizeImage}
                            color={stackColors[item.stack]}
                            level={item.level}
                            selectedColor={selectedColor}
                            onClick={handleSkillClick}
                            moreText={item.description}
                        />
                        ))
                    }
                </Card>
            </Card>
        </>
    )
}