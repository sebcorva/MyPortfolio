import { useState, useCallback } from 'react';
import type { ChatPhase, ChatState } from '../interfaces/chat';

const defaultState: ChatState = {
    phase: 'WELCOME',
    isTyping: true,
    isWaitingForUser: false,
};

//useChatEngine is a custom hook that manages the chat state
export const useChatEngine = () => {
    const [state, setState] = useState<ChatState>(defaultState);

    //advancePhase is a function that change the chat phase to pass to the next phase
    const advancePhase = useCallback(() => {
        setState((prev) => {
            let nextPhase: ChatPhase = prev.phase;

            switch (prev.phase) {
                case 'WELCOME':
                    nextPhase = 'ABOUT_ME';
                    break;
                case 'ABOUT_ME':
                    nextPhase = 'SKILLS_PENDING';
                    break;
                case 'SKILLS_PENDING':
                    nextPhase = 'PROJECTS';
                    break;/* 
                case 'SKILLS_REVEALED':
                    nextPhase = 'PROJECTS';
                    break; */
                case 'PROJECTS':
                    return prev;
            }

            return {
                phase: nextPhase,
                isTyping: true,
                isWaitingForUser: false,
            };
        });
    }, []);

    //finishTyping is a function that sets the state to not typing and waiting for user
    const finishTyping = useCallback(() => {
        setState((prev) => ({
            ...prev,
            isTyping: false,
            isWaitingForUser: true,
        }));
    }, []);

    const resetChat = useCallback(() => {
        setState(defaultState);
    }, []);

    const skipAll = useCallback(() => {
        setState({
            phase: 'PROJECTS',
            isTyping: false,
            isWaitingForUser: true,
        });
    }, []);

    return {
        ...state,
        advancePhase,
        finishTyping,
        resetChat,
        skipAll,
    };
};
