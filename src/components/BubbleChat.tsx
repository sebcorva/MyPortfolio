import React from 'react';
import styles from './BubbleChat.module.css';
import { useTypingEffect } from '../hooks/useTypingEffect';

import { ProjectCard } from './ProjectCard';

interface BubbleChatProps {
    text?: string;
    isBot?: boolean;
    animate?: boolean;
    onComplete?: () => void;
    actionButton?: React.ReactNode;
    type?: 'text' | 'project';
    projectData?: {
        title: string;
        description: string;
        image: string;
        link: string;
    };
}

export const BubbleChat: React.FC<BubbleChatProps> = ({
    text = '',
    isBot = true,
    animate = false,
    onComplete,
    actionButton,
    type = 'text',
    projectData
}) => {
    const { displayedText, skipToEnd } = useTypingEffect(animate ? text : '', 40, animate ? onComplete : undefined);

    const finalContent = animate ? displayedText : text;

    return (
        <div className={`${styles.bubbleWrapper} ${isBot ? styles.botWrapper : styles.userWrapper}`}>
            <img
                src={isBot ? "/img/Unknown.png" : "/img/ProfileSebastianCorvalan.jpeg"}
                alt={isBot ? "Bot Avatar" : "User Avatar"}
                className={styles.avatar}
            />
            <div className={`${styles.bubble} ${isBot ? styles.bot : styles.user} ${type === 'project' ? styles.projectBubble : ''}`} onClick={animate ? skipToEnd : undefined}>
                {type === 'project' && projectData ? (
                    <ProjectCard {...projectData} />
                ) : (
                    <>
                        {finalContent}
                        {animate && finalContent.length < text.length && <span className={styles.cursor}>|</span>}
                    </>
                )}
                {actionButton && <div className={styles.actionContainer}>{actionButton}</div>}
            </div>
        </div>
    );
};

