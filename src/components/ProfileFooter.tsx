import React from 'react';
import styles from './ProfileFooter.module.css';

interface ProfileFooterProps {
    name: string;
    title: string;
}

export const ProfileFooter: React.FC<ProfileFooterProps> = ({ name, title }) => {
    return (
        <div className={styles.container}>
            <img
                src="/img/ProfileSebastianCorvalan.jpeg"
                alt={name}
                className={styles.avatar}
            />
            <div className={styles.info}>
                <p className={styles.name}>{name}</p>
                <p className={styles.title}>{title}</p>
            </div>
        </div>
    );
};