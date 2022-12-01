

const data = {
    name: "Steven LATOR",
    desc: "Etudiant Developpement Web & Mobile IOS",
    social: {
        github: "https://github.com/ByTyson",
        linkdin: "https://www.linkedin.com/in/stevenltr/",
        email: "stevenlator.contact@gmail.com",
    },

    about: {
        title: "Mon parcours",
        description:
            "Mes dernières expériences professionnelles réalisées au cours de ces quatre dernières années m’ont permis d’apprendre, de me former et d’être en mesure d’effectuer des travaux de maintenance majoritairement de premier niveau. J’ai souhaité changer cela afin de pouvoir surmonter ce premier niveau et être confronté à des problématiques plus sérieuses, plus ambitieuses, ayant un réel impact en termes d’évolution, d’innovation et de nouveauté. C’est la raison pour laquelle en Janvier 2020, j’ai décidé de reprendre mes études, toujours en informatique mais cette fois-ci dans le developpement Web & Mobile. À ce jour, je poursuis cet apprentissage en première année de Master en alternance.",
    },

    titleSkill: "Mes compétences",
    skills:
        [
            {
                skillName: "Frontend",
                skillDesc: "HTML CSS JS TS REACT ANGULAR",
                skillIcon: "whh:html",
            },
            {
                skillName: "Backend",
                skillDesc: "PHP / SYMPHONY NEST",
                skillIcon: "fa6-solid:server"
            },
            {
                skillName: "BDD",
                skillDesc: "MySQL / MongoDB",
                skillIcon: "entypo:database"
            },
            {
                skillName: "IOS",
                skillDesc: "SWIFT UI with Xcode",
                skillIcon: "fa-brands:swift",
            }
        ],

    titleHobby: "Mes passe-temps",
    hobbies: [
        {
            hobbyName: "Drone FPV",
            hobbyDesc: "Electronique Pilotage Montage vidéo",
            hobbyIcon: "healthicons:drone",
        },
        {
            hobbyName: "F1",
            hobbyDesc: "Sensation forte Compétition Stratégie",
            hobbyIcon: "fa-solid:car",


        },
        {
            hobbyName: "Moto",
            hobbyDesc: "Balade & Vitesse",
            hobbyIcon: "mdi:motorbike",
        },
        {
            hobbyName: "Running",
            hobbyDesc: "Auto-Discipline Régularité Sport",
            hobbyIcon: "fa-solid:running",
        },
        {
            hobbyName: "Domotique",
            hobbyDesc: "Docker HomeAssistant Raspberry",
            hobbyIcon: "fa-solid:home",
        }
    ],
    titleProject: "Mes projets",
    projects: [
        {
            projectName: "Formula 1",
            projectDesc: "Suivi de la saison de F1",
            projectIcon: 'emojione:racing-car',
            projectLangage: "Angular",
            projectLink: "https://formula1-sltr.vercel.app",
        }
    ],

    domaineName: "sltr.fr",
    domaineLink: "https://www.sltr.fr",
};

export default data;
