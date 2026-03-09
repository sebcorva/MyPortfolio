import React, { useEffect, useRef } from 'react';
import styles from './Layout.module.css';
import { useChatEngine } from '../hooks/useChatEngine';
import { BubbleChat } from './BubbleChat';
import { useState } from 'react';
import type { ChatPhase } from '../interfaces/chat';
import { translations } from '../translations';
import { ProfileFooter } from './ProfileFooter';

export const Layout: React.FC = () => {
    const { phase, isTyping, isWaitingForUser, advancePhase, finishTyping, skipAll } = useChatEngine();
    const chatBottomRef = useRef<HTMLDivElement>(null);

    const [subMsgIndex, setSubMsgIndex] = useState(0);
    const [language, setLanguage] = useState('en');

    const handleSkip = () => {
        skipAll();
        const finalPhaseMsgs = translations[language].chat['PROJECTS'];
        setSubMsgIndex(finalPhaseMsgs.length - 1);
    };

    useEffect(() => {
        if (isTyping || subMsgIndex === 0) {
            setSubMsgIndex(0);
        }
    }, [phase]);

    useEffect(() => {
        chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [phase, isTyping, isWaitingForUser, subMsgIndex]);

    const handleMessageComplete = () => {
        const currentPhaseMsgs = phasesData[phase];
        if (subMsgIndex < currentPhaseMsgs.length - 1) {
            setSubMsgIndex(prev => prev + 1);
        } else {
            finishTyping();
        }
    };

    const changeLanguage = () => {
        setLanguage(prev => prev === 'es' ? 'en' : 'es');
    }

    const currentLangData = translations[language];
    const phasesData = currentLangData.chat;

    const phasesOrder: ChatPhase[] = ['WELCOME', 'ABOUT_ME', 'SKILLS_PENDING', 'PROJECTS'];
    const currentIndex = phasesOrder.indexOf(phase);
    const visiblePhases = phasesOrder.slice(0, currentIndex + 1);

    return (
        <div className={styles.layoutContainer}>
            <header className={styles.topHeader}>
                <div className={styles.skipContainer} onClick={handleSkip}>
                    <div className={styles.skipIcon}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="13 17 18 12 13 7"></polyline>
                            <polyline points="6 17 11 12 6 7"></polyline>
                        </svg>
                    </div>
                    <span className={styles.skipTooltip}>Skip animation</span>
                </div>
                <div className={styles.socialIcons}>
                    <button onClick={changeLanguage} className={styles.langButton}>
                        {language === 'es' ? 'EN' : 'ES'}
                    </button>
                    <a href="https://github.com/sebcorva" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                        <svg className={styles.socialIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                    </a>
                    <a href="mailto:sebacorvalan.e@gmail.com" className={styles.socialLink}>
                        <svg className={styles.socialIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/sebastián-corvalán-3b3424239/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                        <svg className={styles.socialIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                    </a>
                </div>
            </header>
            <ProfileFooter {...currentLangData.profile} />
            <div className={styles.chatWindow}>
                <div className={styles.messagesContainer}>
                    {visiblePhases.map((p) => {
                        const isCurrentPhase = p === phase;
                        const messagesToShow = isCurrentPhase
                            ? phasesData[p].slice(0, subMsgIndex + 1)
                            : phasesData[p];


                        return (
                            <React.Fragment key={p}>
                                {messagesToShow.map((msg, mIndex) => {
                                    const isLastInCurrentPhase = isCurrentPhase && mIndex === subMsgIndex;
                                    const isAnimating = isLastInCurrentPhase && isTyping;

                                    const isPhaseEndingWithButton = p !== 'PROJECTS';
                                    const showButton = isLastInCurrentPhase && isWaitingForUser && isPhaseEndingWithButton;

                                    const nextButton = showButton ? (
                                        <div
                                            className={`${styles.inlineButton} slide-and-pulse`}
                                            onClick={advancePhase}
                                        >
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <polyline points="12 16 16 12 12 8"></polyline>
                                                <line x1="8" y1="12" x2="16" y2="12"></line>
                                            </svg>
                                        </div>
                                    ) : undefined;

                                    return (
                                        <BubbleChat
                                            key={`${p}-${mIndex}`}
                                            text={msg.text}
                                            isBot={msg.isBot}
                                            animate={isAnimating}
                                            onComplete={isLastInCurrentPhase ? handleMessageComplete : undefined}
                                            actionButton={nextButton}
                                            type={msg.type}
                                            projectData={msg.projectData}
                                        />
                                    );
                                })}
                            </React.Fragment>
                        );
                    })}

                    <div ref={chatBottomRef} />
                </div>
            </div>
        </div>
    );
};
