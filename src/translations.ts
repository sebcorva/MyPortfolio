import type { ChatPhase, MessageData, ProfileData } from "./interfaces/chat";


export const translations: Record<string, { profile: ProfileData; chat: Record<ChatPhase, MessageData[]> }> = {
    es: {
        profile: {
            name: 'Sebastián Corvalán Espinoza',
            title: 'Desarrollador Fullstack | Ingeniero en Desarrollo de Software en Formación'
        },
        chat: {WELCOME: [
            { text: 'Hola ! Quien eres?', isBot: true },
            { text: 'Hola, mi nombre es Sebastian Corvalan\nTitulado de Analista Programador Computacional y\nIngeniero en Desarrollo de Software en Formacion.', isBot: false }
        ],
        ABOUT_ME: [
            { text: 'Excelente, cuentame mas sobre ti...', isBot: true },
            { text: 'Soy un Desarrollador FullStack con experiencia en desarrollo de software y con muchas ganas de aprender y crecer en este ambiente, comence en la programacion en el año 2020 buscando un giro en mi carrera profesional, me desempeñe por 14 años como Tripulante de Aeronaves en la Fuerza Aerea de Chile. Pero mi pasion siempre ha estado en la tecnologia e informatica y sin duda ha sido un buen cambio.', isBot: false }
        ],
        SKILLS_PENDING: [
            { text: 'Que habilidades tienes para ofrecer?', isBot: true },
            { text: 'FrontEnd: React, Tailwind CSS, Css , Html, JavaScript, TypeScript', isBot: false },
            { text: 'BackEnd: Node.js, Python, Django', isBot: false },
            { text: 'Base de Datos: MongoDB, MySQL, PostgreSQL', isBot: false },
            { text: 'Herramientas: Git/ GitHub, docker, Postman, AWS, Linux (Nginx & Gunicorn)', isBot: false },
            { text: 'Otro: Metodologias Agile, Scrum', isBot: false },
        ],
        PROJECTS: [
            { text: 'Tienes algun proyecto para revisar ?', isBot: true },
            { text: 'Claro, aqui tienes algunos de los proyectos en los que he trabajado.', isBot: false },
            {
                isBot: false,
                type: 'project',
                projectData: {
                    title: 'API CLIMA',
                    description: 'Aplicación para revisar el clima probando el uso de api. Consulta el clima de cualquier ciudad en tiempo real.',
                    image: '/img/AppClima.png',
                    link: 'https://weatherapp-lac-one-20.vercel.app'
                }
            }
        ]}
    },
    en: {
        profile: {
            name: 'Sebastián Corvalán Espinoza',
            title: 'Fullstack Developer | Software Engineering Candidate'
        },
        chat: {WELCOME: [
            { text: 'Hello! Who are you?', isBot: true },
            { text: `Hi, my name is Sebastian Corvalan.\nI'm a Graduate Fullstack Developer and\nSoftware Engineer in training.`, isBot: false }
        ],
        ABOUT_ME: [
            { text: 'Excellent, tell me more about yourself...', isBot: true },
            { text: `I'm a Full Stack Developer with experience in software development and a strong desire to learn and grow in this field. I started programming in 2020 seeking a career pivot after serving 14 years as an Aircrew Member in the Chilean Air Force. My passion has always been in technology and IT, and it has definitely been a great transition.`, isBot: false }
        ],
        SKILLS_PENDING: [
            { text: 'What skills do you have to offer?', isBot: true },
            { text: 'FrontEnd: React, Tailwind CSS, CSS, HTML, JavaScript, TypeScript', isBot: false },
            { text: 'BackEnd: Node.js, Python, Django', isBot: false },
            { text: 'Databases: MongoDB, MySQL, PostgreSQL', isBot: false },
            { text: 'Tools: Git/GitHub, Docker, Postman, AWS, Linux (Nginx & Gunicorn)', isBot: false },
            { text: 'Other: Agile Methodologies, Scrum', isBot: false }
        ],
        PROJECTS: [
            { text: 'Do you have any projects to review?', isBot: true },
            { text: 'Sure, here are some of the projects I have worked on.', isBot: false },
            {
                isBot: false,
                type: 'project',
                projectData: {
                    title: 'WEATHER API',
                    description: 'Application to check the weather testing API usage. Real-time weather data for any city.',
                    image: '/img/AppClima.png',
                    link: 'https://weatherapp-lac-one-20.vercel.app'
                }
            }
        ]}
    }
};
