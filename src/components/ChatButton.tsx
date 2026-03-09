import React from 'react';
import styles from './ChatButton.module.css';

interface ChatButtonProps {
    isAnimating: boolean;
    onClick: () => void;
    label?: string;
}

export const ChatButton: React.FC<ChatButtonProps> = ({ isAnimating, onClick, label = 'Siguiente' }) => {
    return (
        <button
            className={`${styles.button} ${isAnimating ? 'slide-and-pulse' : ''}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};
