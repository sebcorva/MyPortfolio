import { useState, useEffect, useCallback, useRef } from 'react';

export const useTypingEffect = (text: string, speedTarget: number = 40, onComplete?: () => void) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isComplete, setIsComplete] = useState(false);

    const intervalIdRef = useRef<number | null>(null);

    const skipToEnd = useCallback(() => {
            if (intervalIdRef.current) {
                clearInterval(intervalIdRef.current);
            }
            setDisplayedText(text);
            setIsComplete(true);
            if (onComplete) {
                onComplete();
            }
        }, [text, onComplete]);

    useEffect(() => {
        let i = 0;
        setDisplayedText('');
        setIsComplete(false);

        const intervalId = setInterval(() => {
            setDisplayedText((prev) => prev + text.charAt(i));
            i++;
            if (i >= text.length) {
                clearInterval(intervalId);
                setIsComplete(true);
                if (onComplete) {
                    onComplete();
                }
            }
            intervalIdRef.current = intervalId;
        }, speedTarget);

        return () => clearInterval(intervalId);
    }, [text, speedTarget, onComplete]);

    return { displayedText, isComplete, skipToEnd };
};
