import React, { useEffect, useState } from 'react';
import styles from './SkillsGrid.module.css';

interface SkillsGridProps {
    onComplete?: () => void;
}

const skills = [
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'CSS', icon: '🎨' },
    { name: 'Vite', icon: '⚡' },
    { name: 'Git', icon: '🐙' },
    { name: 'Python', icon: '🎨'},
];

export const SkillsGrid: React.FC<SkillsGridProps> = ({ onComplete }) => {
    const [visibleItems, setVisibleItems] = useState<number>(0);

    useEffect(() => {
        if (visibleItems < skills.length) {
            const timer = setTimeout(() => {
                setVisibleItems(prev => prev + 1);
            }, 300); 
            return () => clearTimeout(timer);
        } else if (visibleItems === skills.length) {
            if (onComplete) {
                setTimeout(onComplete, 500);
            }
        }
    }, [visibleItems, onComplete]);

    return (
        <div className={styles.grid}>
            {skills.map((skill, index) => (
                <div
                    key={skill.name}
                    className={`${styles.skillItem} ${index < visibleItems ? styles.visible : ''}`}
                >
                    <span className={styles.icon}>{skill.icon}</span>
                    <span className={styles.name}>{skill.name}</span>
                </div>
            ))}
        </div>
    );
};
