import React from "react";

export function GetState() {
    const [text, setText] = React.useState({
        nav1: 'Acceuil',
        nav2: 'Projets',
        nav3: 'A propos',
        header1: 'Tout actes',
        header2: 'ont des conséquances...',
        header3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa eligendi eveniet, ipsam officiis ratione unde vero. Adipisci aspernatur cum illo in placeat. Ab cupiditate dolores facere ipsa quis sed voluptatem?',
        subHeader1: 'Sensibilitée Ecologique',
        subHeader2: 'Sensibilitée Ecologique',
        subHeader3: 'Sensibilitée Ecologique',
        projetTitle:  'Nos Projets',
        projet1: 'Jardinage dans un jardin public',
        projet2: 'Jardinage dans un jardin public',
        projet3: 'Jardinage dans un jardin public',
        aboutTitle: 'Qui sommes nous ?',
        sectionAbout1Title: "Nos Valeurs",
        sectionAbout1Text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium blanditiis culpa debitis dignissimos fugiat officiis, repellendus repudiandae sequi. Alias architecto at dolore dolorem eligendi eos harum inventore odio repellendus repudiandae?",
        sectionAbout2Title_1: 'Trust',
        sectionAbout2Text_1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at cum',
        sectionAbout2Title_2: 'Trust',
        sectionAbout2Text_2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at cum',
        sectionAbout2Title_3: 'Trust',
        sectionAbout2Text_3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at cum',
        sectionAbout2Title_4: 'Trust',
        sectionAbout2Text_4: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at cum',
    })


    const [members, setMembers] = React.useState([
        { id: 0,ref: 'member1', name: "John Doe", image: "./assets/Chef-Projet.jpg", proffession: "Chef de projets", description: "lroem ipsum", contact: "CP@gmail.com" },
        { id: 1,ref: 'member2', name: "John Doe", image: "./assets/CM.jpg", proffession: "Community Manager", description: "lroem", contact: "test@gmail.com" },
        { id: 2,ref: 'member3', name: "John Doe", image: "./assets/CEO.jpg", proffession: "CEO", description: "lroem", contact: "CEO@gmail.com" },
        { id: 3,ref: 'member4', name: "John Doe", image: "./assets/developeur.jpg", proffession: "Developpeur", description: "lroem", contact: "dev@gmail.com" },
        { id: 4,ref: 'member5', name: "John Doe", image: "./assets/Design.jpg", proffession: "Designeuse", description: "lroem", contact: "Design@gmail.com" },
    ])

    const [img, setImg] = React.useState({
        header: '/vite.svg',
        subHeader1: "/vite.svg",
        subHeader2: "/vite.svg",
        subHeader3: "/vite.svg",
        projet1: "/vite.svg",
        projet2: "/vite.svg",
        projet3: "/vite.svg",
        about1: "/vite.svg",
        about2: "/vite.svg",
        about3: "/vite.svg",
        about4: "/vite.svg",
        member1: members.filter(member => member.id === 0)[0].image,
        member2: members.filter(member => member.id === 1)[0].image,
        member3: members.filter(member => member.id === 2)[0].image,
        member4: members.filter(member => member.id === 3)[0].image,
        member5: members.filter(member => member.id === 4)[0].image,
    })


    const [links, setLinks] = React.useState({
        linkAllProject: 'exemple.com',
        project1: 'exemple.com',
        project2: 'exemple.com',
        project3: 'exemple.com',
    })

    return {img, setImg, setText, text, members, setMembers, links, setLinks}
}