import {Style} from "./Style.js";
import changeLink from "./changeLink.jsx";
import React from "react";


export const siteHTML  = ({img, text, members}) => `<!doctype html>
<html lang="fr">
<head>

    <!-- Prérequis du HTML -->
    <meta charset="UTF-8">
    <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'>
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <!-- Links Fonts -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

    <!-- Links Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;900&display=swap" rel="stylesheet">

     <!-- Css -->
    <style>
        ${Style}
    </style>


    <title>Template</title>
</head>
<body>
<nav id="navbar-desktop" class="desktop">
    <span class="logo"></span>

    <ul class="onglet-container">
        <li class="onglet"><a href="#header">Home</a></li>
        <li class="onglet"><a href="#first-section">Projets</a></li>
        <li class="onglet"><a href="#second-section">A Propos</a></li>
    </ul>

    <a href="#footer-contact" class="contact-button">Nous Contacter</a>

</nav>

<nav id="navbar-mobile" class="mobile">
    <span class="logo"></span>

    <span class="burger-menu"></span>
    <ul class="onglet-container">
        <span class="cross"></span>

        <li class="onglet"><a href="#header">Home</a></li>
        <li class="onglet"><a href="#first-section">Projets</a></li>
        <li class="onglet"><a href="#second-section">A Propos</a></li>

        <a href="#footer-contact" class="contact-button">Nous Contacter</a>

    </ul>
</nav>

<header id="header">
    <section class="header-image" style="background-image: url(${img.header})">
    </section>
    <section class="header-text-information">
        <h1>${text.header1}</h1>
        <h2>${text.header2}</strong></h2>
        <p>${text.header3}</p>

        <div class="header-button-container">
            <a href="" class="contact-button">Nous Contacter</a>
            <a href="" class="about-button">Plus d'information</a>
        </div>
    </section>
</header>

<main>
    <section class="end-header">

        <div class="section-items">
            <img src=${img.subHeader1} alt="">
            <h4>${text.subHeader1}</h4>
        </div>
        <div class="section-items">
            <img src=${img.subHeader2} alt="">
            <h4>${text.subHeader2}</h4>
        </div>
        <div class="section-items">
            <img src=${img.subHeader3} alt="">
            <h4>${text.subHeader3}</h4>
        </div>

    </section>

    <section id="first-section">
        <h2>${text.projetTitle}</h2>

        <div class="first-section-container">
            <div class="first-section-item">
                <div class="first-section-item-image" style="background-image: url(${img.projet1})"></div>
                <h4 class="first-section-item-title">${text.projet1}</h4>
                <a href="" class="more-information">Plus d'information</a>
            </div>
            <div class="first-section-item">
                <div class="first-section-item-image" style="background-image: url(${img.projet1})"></div>
                <h4 class="first-section-item-title">${text.projet2}</h4>
                <a href="" class="more-information">Plus d'information</a>
            </div>
            <div class="first-section-item">
                <div class="first-section-item-image" style="background-image: url(${img.projet1})"></div>
                <h4 class="first-section-item-title">${text.projet3}</h4>
                <a href="" class="more-information">Plus d'information</a>
            </div>


            <a href="" class="all">Voir tous les projets -></a>
        </div>
    </section>

    <section id="second-section">
        <h2>${text.aboutTitle}</h2>

        <section class="second-section-1-container">
            <div class="left">
                <h3>${text.sectionAbout1Title}</h3>
                <p>${text.sectionAbout1Text}</p>
            </div>
            <div class="right">
                <div class="top">
                    <div class="second-section-1-item">
                        <span><img src=${img.about1} alt=""> <strong class="green">${text.sectionAbout2Title_1}</strong></span>
                        <p>${text.sectionAbout2Text_1}</p>
                    </div>
                    <div class="second-section-1-item" style="border-left: 1px solid grey; padding-left: 20px; border-top-left-radius: 0; border-bottom-left-radius: 0">
                    <span><img src=${img.about2} alt=""> <strong class="green">${text.sectionAbout2Title_2}</strong></span>
                        <p>${text.sectionAbout2Text_2}</p>
                    </div>
                </div>
                <div class="bottom">
                    <div class="second-section-1-item">
                        <span><img src=${img.about3} alt=""> <strong class="green">${text.sectionAbout2Title_3}</strong></span>
                        <p>${text.sectionAbout2Text_3}</p>
                    </div>
                    <div class="second-section-1-item" style="border-left: 1px solid grey; padding-left: 20px; border-top-left-radius: 0; border-bottom-left-radius: 0">
                        <span><img src=${img.about4} alt=""> <strong class="green">${text.sectionAbout2Title_4}</strong></span>
                        <p>${text.sectionAbout2Text_4}</p>
                    </div>
                </div>
            </div>
        </section>
    </section>


    <section id="third-section">
        <div class="left">
            <div class="little-image-container">
                <img src=${img.member5} alt="">
            </div>
            <div class="little-image-container">
                <img src=${img.member4} alt="">
            </div>
        </div>
        <div class="middle">
            <div class="img-container">
                <img src=${img.member3} alt="">
            </div>
            <h3>John Doe</h3>
            <h4>CEO</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam architecto cupiditate, delectus deserunt dolorem fuga, nemo non nostrum provident quas quisquam quo repellat repudiandae rerum, sunt ullam unde voluptatum!</p>
            <a href="mailto:CEO@gmail.com" class="contact-member">Me Contacter</a>
        </div>
        <div class="right">
            <div class="little-image-container">
                <img src=${img.member2} alt="">
            </div>
            <div class="little-image-container">
                <img src=${img.member1} alt="">
            </div>
        </div>

        <div class="arrows-container">
            <span class="arrow-left"></span>
            <span class="arrow-right"></span>
        </div>
    </section>

    <section id="instagram-section">
        <div class="img-container">
            <img src="" alt="">
        </div>
        <div class="imgs-container">
            <div class="img-container">
                <img src="" alt="">
            </div>
            <div class="img-container">
                <img src="" alt="">
            </div>
            <div class="img-container">
                <img src="" alt="">
            </div>
            <div class="img-container">
                <img src="" alt="">
            </div>
        </div>
    </section>
</main>

<div id="instagram-posts"></div>

<footer>
    <section id="footer-contact">
        <h3>Pour nous contacter:</h3>
        <p class="validation" style="margin-top: -00px"></p>
        <form action="#">
            <label class="label-email" for="email">
                <input type="text" id="email" placeholder="exemple@exemple.exemple">
            </label>
            <label class="label-text" for="text">
                <textarea id="text" placeholder="exemple@exemple.exemple"></textarea>
            </label>
            <button class="button-form" type="submit">Continuer</button>
        </form>
    </section>

    <p style="text-align: center;">© Developed by Devlowave</p>
</footer>


<script src="script.js"></script>

<script>
        let users = ${JSON.stringify(members)}
            const leftarrow = document.querySelector(".arrow-left");
            const rightarrow = document.querySelector(".arrow-right");
        const all = [
            { id: 0, element: document.querySelector("#third-section").querySelector(".right").querySelectorAll(".little-image-container")[1].querySelector("img") },
            { id: 1, element: document.querySelector("#third-section").querySelector(".right").querySelectorAll(".little-image-container")[0].querySelector("img") },
            { id: 2, element: document.querySelector("#third-section").querySelector(".middle") },
            { id: 3, element: document.querySelector("#third-section").querySelector(".left").querySelectorAll(".little-image-container")[0].querySelector("img") },
            { id: 4, element: document.querySelector("#third-section").querySelector(".left").querySelectorAll(".little-image-container")[1].querySelector("img") },
        ];
        
        window.addEventListener('load', () => {
            syncImages()
})

       leftarrow.addEventListener('click', () => {
            users = users.map(user => user.id === 0 ? {...user, id: 4} : {...user, id: user.id - 1})
            syncImages()
        })

        rightarrow.addEventListener('click', () => {
            users = users.map(user => user.id === 4 ? {...user, id: 0} : {...user, id: user.id + 1})
            syncImages()
        })

        function syncImages(){
            all.forEach(member => {
                if (member.id !== 2){
                    member.element.src = users.filter(user => user.id === member.id)[0].image                
                }else{
                    const userFiltre = users.filter(user => user.id === member.id)[0]
                    member.element.querySelector('img').src = userFiltre.image
                    member.element.querySelector('h3').innerText = userFiltre.name
                    member.element.querySelector('h4').innerText = userFiltre.proffession
                    member.element.querySelector('p').innerText = userFiltre.description
                    member.element.querySelector('a').href = userFiltre.contact
                }
            })
        }
</script>

</body>
</html>`



export const renderSite = ({img, text, members, links}) => `
<nav id="navbar-desktop" class="desktop">
    <span class="logo"></span>

    <ul class="onglet-container">
        <li class="onglet"><a href="#header">${text.nav1}</a></li>
        <li class="onglet"><a href="#first-section">${text.nav2}</a></li>
        <li class="onglet"><a href="#second-section">${text.nav3}</a></li>
    </ul>

    <a href="#footer-contact" class="contact-button">Nous Contacter</a>

</nav>

<nav id="navbar-mobile" class="mobile">
    <span class="logo"></span>

    <span class="burger-menu"></span>
    <ul class="onglet-container">
        <span class="cross"></span>

        <li class="onglet"><a href="#header">Home</a></li>
        <li class="onglet"><a href="#first-section">Projets</a></li>
        <li class="onglet"><a href="#second-section">A Propos</a></li>

        <a href="#footer-contact" class="contact-button">Nous Contacter</a>

    </ul>
</nav>

<header id="header">
    <section class="header-image" style="background-image: url(${img.header})">
    </section>
    <section class="header-text-information">
        <h1>${text.header1}</h1>
        <h2>${text.header2}</h2>
        <p>${text.header3}</p>

        <div class="header-button-container">
            <a href="" class="contact-button">Nous Contacter</a>
            <a href="" class="about-button">Plus d'information</a>
        </div>
    </section>
</header>

<main>
    <section class="end-header">

        <div class="section-items">
            <img src=${img.subHeader1} alt="">
            <h4>${text.subHeader1}</h4>
        </div>
        <div class="section-items">
            <img src=${img.subHeader2} alt="">
            <h4>${text.subHeader2}</h4>
        </div>
        <div class="section-items">
            <img src=${img.subHeader3} alt="">
            <h4>${text.subHeader3}</h4>
        </div>

    </section>

    <section id="first-section">
        <h2>${text.projetTitle}</h2>

        <div class="first-section-container">
            <div class="first-section-item">
                <div class="first-section-item-image" style="background-image: url(${img.projet1})"></div>
                <h4 class="first-section-item-title">${text.projet1}</h4>
                <a href="//${links.project1}" class="more-information">Plus d'information</a>
            </div>
            <div class="first-section-item">
                <div class="first-section-item-image" style="background-image: url(${img.projet1})"></div>
                <h4 class="first-section-item-title">${text.projet2}</h4>
                <a href="//${links.project2}" class="more-information">Plus d'information</a>
            </div>
            <div class="first-section-item">
                <div class="first-section-item-image" style="background-image: url(${img.projet1})"></div>
                <h4 class="first-section-item-title">${text.projet3}</h4>
                <a href="//${links.project3}" class="more-information">Plus d'information</a>
            </div>


            <div className="link-input">
             <a href="//${links.linkAllProject}" className="all">Voir tous les projets -></a>
            </div>
        </div>
    </section>

    <section id="second-section">
        <h2>${text.aboutTitle}</h2>

        <section class="second-section-1-container">
            <div class="left">
                <h3>${text.sectionAbout1Title}</h3>
                <p>${text.sectionAbout1Text}</p>
            </div>
            <div class="right">
                <div class="top">
                    <div class="second-section-1-item">
                        <span><div class="icons"><img src=${img.about1} alt=""></div> <strong class="green">${text.sectionAbout2Title_1}</strong></span>
                        <p>${text.sectionAbout2Text_1}</p>
                    </div>
                    <div class="second-section-1-item" style="border-left: 1px solid grey; padding-left: 20px; border-top-left-radius: 0; border-bottom-left-radius: 0">
                    <span><div class="icons"><img src=${img.about2} alt=""></div> <strong class="green">${text.sectionAbout2Title_2}</strong></span>
                        <p>${text.sectionAbout2Text_2}</p>
                    </div>
                </div>
                <div class="bottom">
                    <div class="second-section-1-item">
                        <span><div class="icons"><img src=${img.about3} alt=""></div> <strong class="green">${text.sectionAbout2Title_3}</strong></span>
                        <p>${text.sectionAbout2Text_3}</p>
                    </div>
                    <div class="second-section-1-item" style="border-left: 1px solid grey; padding-left: 20px; border-top-left-radius: 0; border-bottom-left-radius: 0">
                        <span><div class="icons"><img src=${img.about4} alt=""></div> <strong class="green">${text.sectionAbout2Title_4}</strong></span>
                        <p>${text.sectionAbout2Text_4}</p>
                    </div>
                </div>
            </div>
        </section>
    </section>


    <section id="third-section">
        <div class="left">
            <div class="little-image-container">
                <img src=${members.filter(memberSelect => memberSelect.id === 3)[0].image} alt="">
            </div>
            <div class="little-image-container">
                <img src=${members.filter(memberSelect => memberSelect.id === 4)[0].image} alt="">
            </div>
        </div>
        <div class="middle">
            <div class="img-container">
                <img src=${members.filter(memberSelect => memberSelect.id === 2)[0].image} alt="">
            </div>
            <h3>${members.filter(memberSelect => memberSelect.id === 2)[0].name}</h3>
            <h4>${members.filter(memberSelect => memberSelect.id === 2)[0].proffession}</h4>
            <p>${members.filter(memberSelect => memberSelect.id === 2)[0].description}</p>
            <a href=${`mailto:${members.filter(memberSelect => memberSelect.id === 2)[0].contact}`} class="contact-member">Me Contacter</a>
        </div>
        <div class="right">
            <div class="little-image-container">
                <img src=${members.filter(memberSelect => memberSelect.id === 1)[0].image} alt="">
            </div>
            <div class="little-image-container">
                <img src=${members.filter(memberSelect => memberSelect.id === 0)[0].image} alt="">
            </div>
        </div>

        <div class="arrows-container">
            <span class="arrow-left"></span>
            <span class="arrow-right"></span>
        </div>
    </section>

    <section id="instagram-section">
        <div class="img-container">
            <img src="" alt="">
        </div>
        <div class="imgs-container">
            <div class="img-container">
                <img src="" alt="">
            </div>
            <div class="img-container">
                <img src="" alt="">
            </div>
            <div class="img-container">
                <img src="" alt="">
            </div>
            <div class="img-container">
                <img src="" alt="">
            </div>
        </div>
    </section>
</main>

<div id="instagram-posts"></div>

<footer>
    <section id="footer-contact">
        <h3>Pour nous contacter:</h3>
        <p class="validation" style="margin-top: -00px"></p>
        <form action="#">
            <label class="label-email" for="email">
                <input type="text" id="email" placeholder="exemple@exemple.exemple">
            </label>
            <label class="label-text" for="text">
                <textarea id="text" placeholder="exemple@exemple.exemple"></textarea>
            </label>
            <button class="button-form" type="submit">Continuer</button>
        </form>
    </section>

    <p style="text-align: center;">© Developed by Devlowave</p>
</footer>`