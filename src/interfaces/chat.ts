export type ChatPhase = 'WELCOME' | 'ABOUT_ME' | 'SKILLS_PENDING' | 'PROJECTS';

export interface ChatState {
  phase: ChatPhase;
  isTyping: boolean;
  isWaitingForUser: boolean;
}

export interface MessageData {
  text?: string;
  isBot: boolean;
  type?: 'text' | 'project';
  projectData?: {
    title: string;
    description: string;
    image: string;
    link: string;
  };
}

export interface ProfileData {
  name: string;
  title: string;
}