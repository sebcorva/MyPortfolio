import React from 'react';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, link }) => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.imageContainer}>
                <img src={image} alt={title} className={styles.projectImage} />
            </div>
            <div className={styles.contentContainer}>
                <div>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.description}>{description}</p>
                </div>
                <a href={link} target="_blank" rel="noopener noreferrer" className={styles.linkContainer}>
                    <svg className={styles.linkIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                    <span>{link.replace(/^https?:\/\//, '')}</span>
                </a>
            </div>
        </div>
    );
};
