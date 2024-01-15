export const Style = '/* Animations */\n' +
    '\n' +
    '@keyframes nav-animation {\n' +
    '    0%{\n' +
    '        transform: translateY(-100%);\n' +
    '    }\n' +
    '    100%{\n' +
    '        transform: translateY(0);\n' +
    '    }\n' +
    '}\n' +
    '\n' +
    '@keyframes footer-animation {\n' +
    '    0%{\n' +
    '        transform: translateY(100%);\n' +
    '    }\n' +
    '    100%{\n' +
    '        transform: translateY(0);\n' +
    '    }\n' +
    '}\n' +
    '\n' +
    '@keyframes header-left-animation {\n' +
    '    0%{\n' +
    '        transform: translateX(-100%);\n' +
    '        opacity: 0;\n' +
    '    }\n' +
    '    100%{\n' +
    '        transform: translateX(0);\n' +
    '        opacity: 1;\n' +
    '    }\n' +
    '}\n' +
    '\n' +
    '@keyframes header-spin-image {\n' +
    '    0%{\n' +
    '        transform: translateY(-50%) translateX(100%) rotate(180deg);\n' +
    '    }\n' +
    '    100%{\n' +
    '        transform: translateX(0) translateY(-50%) rotate(0deg);\n' +
    '    }\n' +
    '}\n' +
    '\n' +
    '@keyframes header-right-animation {\n' +
    '    0%{\n' +
    '        transform: translateX(100%) translateY(-50%);\n' +
    '    }\n' +
    '    100%{\n' +
    '        transform: translateX(0) translateY(-50%);\n' +
    '    }\n' +
    '}\n' +
    '\n' +
    '@keyframes responcive-header-right-animation {\n' +
    '    0%{\n' +
    '        transform: translateX(100%);\n' +
    '    }\n' +
    '    100%{\n' +
    '        transform: translateX(-50%);\n' +
    '    }\n' +
    '}\n' +
    '\n' +
    '@keyframes arrow-left-animation {\n' +
    '    0%{\n' +
    '        transform: translateX(100%) ;\n' +
    '        opacity: 0;\n' +
    '    }\n' +
    '    100%{\n' +
    '        transform: translateX(0) ;\n' +
    '        opacity: 1;\n' +
    '    }\n' +
    '}\n' +
    '\n' +
    '@keyframes end-header-element {\n' +
    '    0%{\n' +
    '        opacity: 0;\n' +
    '        transform: translateY(100%);\n' +
    '    }\n' +
    '\n' +
    '    100%{\n' +
    '        opacity: 1;\n' +
    '        transform: translateY(0%);\n' +
    '    }\n' +
    '}\n' +
    '\n' +
    '@keyframes members-left-animation {\n' +
    '    0%{\n' +
    '        opacity: 0;\n' +
    '        transform: translateX(-200%);\n' +
    '    }\n' +
    '    100%{\n' +
    '        opacity: 1;\n' +
    '        transform: translateX(0);\n' +
    '    }\n' +
    '}\n' +
    '\n' +
    '@keyframes members-right-animation {\n' +
    '    0%{\n' +
    '        opacity: 0;\n' +
    '        transform: translateX(200%);\n' +
    '    }\n' +
    '    100%{\n' +
    '        opacity: 1;\n' +
    '        transform: translateX(0);\n' +
    '    }\n' +
    '}\n' +
    '\n' +
    '@keyframes member-middle-animation {\n' +
    '    0%{\n' +
    '        opacity: 0;\n' +
    '        transform: scale(0);\n' +
    '    }\n' +
    '    100%{\n' +
    '        opacity: 1;\n' +
    '        transform: scale(1);\n' +
    '    }\n' +
    '}\n' +
    '\n' +
    '\n' +
    '* {\n' +
    '    padding: 0;\n' +
    '    margin: 0;\n' +
    '    box-sizing: border-box;\n' +
    '    text-decoration: none;\n' +
    '    list-style-type: none;\n' +
    '    color: unset;\n' +
    '    font-weight: unset;\n' +
    '}\n' +
    '\n' +
    'html {\n' +
    '    font-size: 16px;\n' +
    '    font-weight: 500;\n' +
    '    color: #3a5a40;\n' +
    '    font-family: \'Poppins\', sans-serif;\n' +
    '    overflow-x: hidden;\n' +
    '    scroll-behavior: smooth;\n' +
    '}\n' +
    '\n' +
    'body{\n' +
    '    position: relative;\n' +
    '}\n' +
    '\n' +
    'h1 {\n' +
    '    font-size: 3rem;\n' +
    '    font-weight: 700;\n' +
    '}\n' +
    '\n' +
    'h2 {\n' +
    '    font-size: 2rem;\n' +
    '    font-weight: 600;\n' +
    '}\n' +
    '\n' +
    'h3 {\n' +
    '    font-size: 1.8rem;\n' +
    '    font-weight: 600;\n' +
    '}\n' +
    '\n' +
    'h4 {\n' +
    '    font-size: 1.3rem;\n' +
    '    font-weight: 600;\n' +
    '}\n' +
    '\n' +
    '.green {\n' +
    '    color: seagreen;\n' +
    '}\n' +
    '\n' +
    '/* Navbar */\n' +
    '\n' +
    '#navbar-desktop {\n' +
    '    z-index: 999;\n' +
    '    position: absolute;\n' +
    '    top: 0;\n' +
    '    left: 0;\n' +
    '    width: 100vw;\n' +
    '    padding: 20px 50px;\n' +
    '    align-items: center;\n' +
    '    justify-content: space-between;\n' +
    '}\n' +
    '\n' +
    '.desktop {\n' +
    '    display: flex;\n' +
    '}\n' +
    '\n' +
    '.mobile {\n' +
    '    display: none;\n' +
    '}\n' +
    '\n' +
    '.navbar-animation{\n' +
    '    animation: nav-animation 1s forwards;\n' +
    '}\n' +
    '\n' +
    '#navbar-desktop .logo {\n' +
    '    width: 50px;\n' +
    '    height: 50px;\n' +
    '    border-radius: 50%;\n' +
    '    background: grey;\n' +
    '}\n' +
    '\n' +
    '#navbar-desktop .onglet-container {\n' +
    '    display: flex;\n' +
    '    align-items: center;\n' +
    '    gap: 80px;\n' +
    '}\n' +
    '\n' +
    '#navbar-desktop .onglet {\n' +
    '    position: relative;\n' +
    '    transition: color .1s ease-in-out;\n' +
    '}\n' +
    '\n' +
    '#navbar-desktop .onglet::after {\n' +
    '    content: "";\n' +
    '    position: absolute;\n' +
    '    bottom: 0;\n' +
    '    left: 50%;\n' +
    '    width: 90%;\n' +
    '    height: 1px;\n' +
    '    background: seagreen;\n' +
    '    transform: translateX(-50%) scale(0);\n' +
    '    transition: transform .3s ease-in-out;\n' +
    '}\n' +
    '\n' +
    '#navbar-desktop .onglet:hover::after {\n' +
    '    transform: translateX(-50%) scale(1);\n' +
    '}\n' +
    '\n' +
    '#navbar-desktop .onglet:hover {\n' +
    '    color: seagreen !important;\n' +
    '}\n' +
    '\n' +
    '#navbar-desktop .contact-button {\n' +
    '    padding: 10px 15px;\n' +
    '    border-radius: 30px;\n' +
    '    border: 1px solid #3a5a40;\n' +
    '    background: transparent;\n' +
    '    transition: all .2s;\n' +
    '    color: #3a5a40;\n' +
    '}\n' +
    '\n' +
    '#navbar-desktop .contact-button:hover{\n' +
    '    background: seagreen;\n' +
    '    color: white;\n' +
    '    scale: 1.1;\n' +
    '    border: 1px solid seagreen;\n' +
    '}\n' +
    '\n' +
    '/* Header */\n' +
    '\n' +
    '#header {\n' +
    '    position: relative;\n' +
    '    height: 100vh;\n' +
    '    overflow: hidden;\n' +
    '    background: #ABF08C52;\n' +
    '}\n' +
    '\n' +
    '.header-image{\n' +
    '    position: absolute;\n' +
    '    top: 50%;\n' +
    '    right: -2%;\n' +
    '    width: 80%;\n' +
    '    height: 80%;\n' +
    '    transform: translateY(-50%) translateX(100%) rotate(180deg);\n' +
    '    transform-origin: center;\n' +
    '    background-position: 90%;\n' +
    '    background-size: contain;\n' +
    '    background-repeat: no-repeat;\n' +
    '}\n' +
    '\n' +
    '.header-image-animation{\n' +
    '    animation: header-spin-image 2s forwards;\n' +
    '    animation-delay: 1s;\n' +
    '}\n' +
    '\n' +
    '.header-text-information{\n' +
    '    width: 50%;\n' +
    '    height: 100%;\n' +
    '    display: flex;\n' +
    '    flex-direction: column;\n' +
    '    align-items: start;\n' +
    '    justify-content: center;\n' +
    '    padding-left: 50px;\n' +
    '    padding-top: 100px;\n' +
    '    padding-bottom: 0;\n' +
    '    transform: translateX(-100%);\n' +
    '}\n' +
    '\n' +
    '.header-text-animation {\n' +
    '    animation: header-left-animation 1s forwards;\n' +
    '    animation-delay: 1s;\n' +
    '}\n' +
    '\n' +
    '.header-text-information h2 {\n' +
    '    margin-top: -15px;\n' +
    '    margin-bottom: 10px;\n' +
    '}\n' +
    '\n' +
    '.header-button-container {\n' +
    '    display: flex;\n' +
    '    align-items: center;\n' +
    '    gap: 50px;\n' +
    '    margin-top: 40px;\n' +
    '}\n' +
    '\n' +
    '.header-button-container a{\n' +
    '    padding: 10px 15px;\n' +
    '    border: 1px solid seagreen;\n' +
    '    background: transparent;\n' +
    '    border-radius: 30px;\n' +
    '    transition: all .3s;\n' +
    '}\n' +
    '\n' +
    '.header-button-container .contact-button{\n' +
    '    background: seagreen;\n' +
    '    color: white;\n' +
    '}\n' +
    '\n' +
    '.header-button-container .contact-button:hover {\n' +
    '    background: transparent;\n' +
    '    color: seagreen;\n' +
    '    font-weight: bold;\n' +
    '    border: 1px solid seagreen;\n' +
    '    scale: 1.1;\n' +
    '}\n' +
    '\n' +
    '.header-button-container .about-button {\n' +
    '    background: transparent;\n' +
    '    color: seagreen;\n' +
    '}\n' +
    '\n' +
    '.header-button-container .about-button:hover {\n' +
    '    background: seagreen;\n' +
    '    font-weight: bold;\n' +
    '    color: white;\n' +
    '    scale: 1.1;\n' +
    '}\n' +
    '\n' +
    '/* End Header section */\n' +
    '\n' +
    '.end-header {\n' +
    '    display: flex;\n' +
    '    align-items: center;\n' +
    '    justify-content: space-evenly;\n' +
    '    gap: 100px;\n' +
    '    padding: 0px 50px 50px 50px;\n' +
    '    background: #ABF08C52;\n' +
    '    box-shadow: rgba(100, 100, 111, 0.05) 0 43px 7px 0;\n' +
    '    border-bottom-right-radius: 30px;\n' +
    '    border-bottom-left-radius: 30px;\n' +
    '}\n' +
    '\n' +
    '.end-header .section-items {\n' +
    '    text-align: center;\n' +
    '    width: 300px;\n' +
    '    height: 100px;\n' +
    '    background: white;\n' +
    '    border-radius: 46px;\n' +
    '    transition: all .2s ease;\n' +
    '    padding: 20px 25px;\n' +
    '    display: flex;\n' +
    '    flex-direction: column;\n' +
    '    align-items: center;\n' +
    '    justify-content: center;\n' +
    '    gap: 5px;\n' +
    '    opacity: 0;\n' +
    '}\n' +
    '\n' +
    '.end-header-animation{\n' +
    '    animation: end-header-element 1s forwards;\n' +
    '    opacity: 0;\n' +
    '}\n' +
    '\n' +
    '.end-header .section-items img {\n' +
    '    width: 30px;\n' +
    '    height: 30px;\n' +
    '}\n' +
    '\n' +
    '.end-header .section-items:hover{\n' +
    '    scale: 1.05;\n' +
    '    box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;\n' +
    '}\n' +
    '\n' +
    '/* Première section */\n' +
    '\n' +
    '#first-section {\n' +
    '    padding:50px;\n' +
    '}\n' +
    '\n' +
    '.first-section-container {\n' +
    '    position: relative;\n' +
    '    display: grid;\n' +
    '    grid: auto / 1fr 1fr 1fr;\n' +
    '    gap: 50px;\n' +
    '    margin-top: 20px;\n' +
    '}\n' +
    '\n' +
    '.first-section-container .all {\n' +
    '    position: absolute;\n' +
    '    top: -30px;\n' +
    '    right: 30px;\n' +
    '}\n' +
    '\n' +
    '.first-section-container .all::after {\n' +
    '    content: \'\';\n' +
    '    position: absolute;\n' +
    '    bottom: 0;\n' +
    '    left: 0;\n' +
    '    width: 0;\n' +
    '    height: 1px;\n' +
    '    background: #3a5a40;\n' +
    '    transition: width .4s ease-in-out;\n' +
    '}\n' +
    '\n' +
    '.first-section-container .all:hover::after {\n' +
    '    width: 100%;\n' +
    '}\n' +
    '\n' +
    '.first-section-item{\n' +
    '    max-width: 500px;\n' +
    '    height: 400px;\n' +
    '    padding: 10px;\n' +
    '    border-radius: 20px;\n' +
    '    display: flex;\n' +
    '    flex-direction: column;\n' +
    '    gap: 10px;\n' +
    '}\n' +
    '.first-section-item-image{\n' +
    '    width: 100%;\n' +
    '    height: 60%;\n' +
    '    border-radius: 36px;\n' +
    '    background-size: cover;\n' +
    '    background-position: center;\n' +
    '}\n' +
    '\n' +
    '.first-section-item:hover .more-information{\n' +
    '    opacity: 1  ;\n' +
    '}\n' +
    '\n' +
    '.first-section-container .more-information{\n' +
    '    width: 100%;\n' +
    '    padding: 10px 0;\n' +
    '    border: 1px solid seagreen;\n' +
    '    color: seagreen;\n' +
    '    background: transparent;\n' +
    '    text-align: center;\n' +
    '    border-radius: 20px;\n' +
    '    opacity: 0;\n' +
    '    transition: all .3s;\n' +
    '}\n' +
    '\n' +
    '.first-section-item .more-information:hover {\n' +
    '    background: #3a5a40;\n' +
    '    color: white;\n' +
    '    border: 1px solid #3a5a40;\n' +
    '}\n' +
    '\n' +
    '/* Seconde section */\n' +
    '\n' +
    '#second-section {\n' +
    '    background: #ABF08C52;\n' +
    '    padding: 50px;\n' +
    '}\n' +
    '\n' +
    '.second-section-1-container {\n' +
    '    margin-top: 40px;\n' +
    '    display: flex;\n' +
    '    align-items: center;\n' +
    '    gap: 20px;\n' +
    '}\n' +
    '\n' +
    '.second-section-1-container .left {\n' +
    '    display: flex;\n' +
    '    flex-direction: column;\n' +
    '    gap: 20px;\n' +
    '    width: 40%;\n' +
    '}\n' +
    '\n' +
    '.second-section-1-container .left h3 {\n' +
    '    opacity: 0;\n' +
    '}\n' +
    '\n' +
    '.second-section-h3-animation {\n' +
    '    animation: end-header-element .7s forwards;\n' +
    '    opacity: 0;\n' +
    '}\n' +
    '\n' +
    '.second-section-1-container .right {\n' +
    '    width: 60%;\n' +
    '    background: rgba(46,139,87, .1);\n' +
    '    border: 1px solid grey;\n' +
    '    display: flex;\n' +
    '    flex-direction: column;\n' +
    '    align-items: center;\n' +
    '    justify-content: center;\n' +
    '    border-radius: 10px;\n' +
    '    padding: 30px;\n' +
    '    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgba(192,192,192, .7) 0px 0px 0px 8px;\n' +
    '}\n' +
    '\n' +
    '.second-section-1-container .right .top, .second-section-1-container .right .bottom {\n' +
    '    display: flex;\n' +
    '    align-items: center;\n' +
    '}\n' +
    '\n' +
    '.second-section-1-container .right .top {\n' +
    '    padding-bottom: 30px;\n' +
    '    border-bottom: 1px solid grey;\n' +
    '}\n' +
    '\n' +
    '.second-section-1-container .right .bottom {\n' +
    '    padding-top: 30px;\n' +
    '}\n' +
    '\n' +
    '.second-section-1-item {\n' +
    '    display: flex;\n' +
    '    flex-direction: column;\n' +
    '    gap: 15px;\n' +
    '    margin: 0 10px;\n' +
    '    padding: 10px;\n' +
    '    transition: scale .2s;\n' +
    '    border-radius: 10px;\n' +
    '    opacity: 0;\n' +
    '}\n' +
    '\n' +
    '.second-section-item-animation{\n' +
    '    animation: end-header-element .7s forwards;\n' +
    '    opacity: 0;\n' +
    '}\n' +
    '\n' +
    '.second-section-1-item:hover {\n' +
    '    scale: 1.01;\n' +
    '\n' +
    '}\n' +
    '\n' +
    '.second-section-1-item span {\n' +
    '    display: flex;\n' +
    '    align-items: center;\n' +
    '    gap: 10px;\n' +
    '}\n' +
    '\n' +
    '.second-section-1-item span strong {\n' +
    '    font-size: 1.3rem;\n' +
    '    font-weight: 600;\n' +
    '}\n' +
    '\n' +
    '.second-section-1-item img {\n' +
    '    width: 30px;\n' +
    '    height: 30px;\n' +
    '    background: grey;\n' +
    '    border-radius: 50%;\n' +
    '}\n' +
    '\n' +
    '/* Troisième section */\n' +
    '\n' +
    '#third-section{\n' +
    '    position: relative;\n' +
    '    padding: 50px 50px 150px 50px;\n' +
    '    background: #ABF08C52;\n' +
    '    display: grid;\n' +
    '    gap: 20px;\n' +
    '    grid: auto / .8fr 1.4fr .8fr;\n' +
    '    border-bottom-right-radius: 30px;\n' +
    '    border-bottom-left-radius: 30px;\n' +
    '    box-shadow: rgba(100, 100, 111, 0.05) 0px 100px 20px 0px;\n' +
    '}\n' +
    '\n' +
    '#third-section .left, #third-section .right{\n' +
    '    display: flex;\n' +
    '    flex-direction: column;\n' +
    '    align-items: center;\n' +
    '    justify-content: center;\n' +
    '    gap: 20px;\n' +
    '}\n' +
    '\n' +
    '#third-section .left .little-image-container{\n' +
    '    width: 100px;\n' +
    '    height: 100px;\n' +
    '    border-radius: 50%;\n' +
    '    position: relative;\n' +
    '    overflow: hidden;\n' +
    '}\n' +
    '\n' +
    '.little-image-container img {\n' +
    '    width: 100%;\n' +
    '    height: unset;\n' +
    '    position: absolute;\n' +
    '    top: 50%;\n' +
    '    left: 50%;\n' +
    '    transform: translate(-50%, -50%);\n' +
    '}\n' +
    '\n' +
    '#third-section .left .little-image-container:nth-child(1){\n' +
    '    margin-left: auto;\n' +
    '    margin-right: 10%;\n' +
    '    opacity: 0;\n' +
    '}\n' +
    '\n' +
    '#third-section .left .little-image-container:nth-child(2){\n' +
    '    margin-right: auto;\n' +
    '    margin-left: 10%;\n' +
    '    opacity: 0;\n' +
    '    animation-delay: 1s;\n' +
    '}\n' +
    '\n' +
    '#third-section .right .little-image-container{\n' +
    '    width: 100px;\n' +
    '    height: 100px;\n' +
    '    border-radius: 50%;\n' +
    '    overflow: hidden;\n' +
    '    position: relative;\n' +
    '}\n' +
    '\n' +
    '#third-section .right .little-image-container:nth-child(2){\n' +
    '    margin-left: auto;\n' +
    '    margin-right: 10%;\n' +
    '    animation-delay: 1.5s;\n' +
    '    opacity: 0;\n' +
    '\n' +
    '}\n' +
    '\n' +
    '#third-section .right .little-image-container:nth-child(1){\n' +
    '    margin-right: auto;\n' +
    '    margin-left: 10%;\n' +
    '    animation-delay: .5s;\n' +
    '    opacity: 0;\n' +
    '}\n' +
    '\n' +
    '.little-image-container-animation{\n' +
    '    animation: members-right-animation .7s forwards;\n' +
    '    opacity: 0;\n' +
    '}\n' +
    '\n' +
    '#third-section .middle{\n' +
    '    display: flex;\n' +
    '    flex-direction: column;\n' +
    '    align-items: center;\n' +
    '    justify-content: space-evenly;\n' +
    '    gap: 20px;\n' +
    '    opacity: 0;\n' +
    '}\n' +
    '\n' +
    '.middle-animation{\n' +
    '    animation: member-middle-animation .5s forwards;\n' +
    '    opacity: 0;\n' +
    '    animation-delay: 2s;\n' +
    '}\n' +
    '\n' +
    '#third-section .middle .img-container{\n' +
    '    width: 250px;\n' +
    '    height: 250px;\n' +
    '    border-radius: 50%;\n' +
    '    position: relative;\n' +
    '    overflow: hidden;\n' +
    '}\n' +
    '\n' +
    '.middle .img-container img {\n' +
    '    width: 100%;\n' +
    '    height: unset;\n' +
    '    position: absolute;\n' +
    '    top: 50%;\n' +
    '    left: 50%;\n' +
    '    transform: translate(-50%, -50%);\n' +
    '}\n' +
    '\n' +
    '#third-section .middle h4 {\n' +
    '    margin-top: -25px;\n' +
    '    color: seagreen;\n' +
    '}\n' +
    '\n' +
    '#third-section .middle p{\n' +
    '    text-align: center;\n' +
    '}\n' +
    '\n' +
    '#third-section .middle .contact-member {\n' +
    '    padding: 10px 20px;\n' +
    '    color: white;\n' +
    '    background: seagreen;\n' +
    '    border-radius: 20px;\n' +
    '    transition: all .2s;\n' +
    '    border: 1px solid seagreen;\n' +
    '}\n' +
    '\n' +
    '#third-section .middle .contact-member:hover {\n' +
    '    background: transparent;\n' +
    '    color: seagreen;\n' +
    '    border: 1px solid seagreen;\n' +
    '}\n' +
    '\n' +
    '.arrows-container{\n' +
    '    position: absolute;\n' +
    '    display: flex;\n' +
    '    align-items: center;\n' +
    '    justify-content: space-between;\n' +
    '    width: 50%;\n' +
    '    bottom: 70px;\n' +
    '    left: 50%;\n' +
    '    transform: translateX(-50%);\n' +
    '}\n' +
    '\n' +
    '.arrow-left{\n' +
    '    display: block;\n' +
    '    position: relative;\n' +
    '    width: 50px;\n' +
    '    height: 50px;\n' +
    '    cursor: pointer;\n' +
    '    opacity: 0;\n' +
    '}\n' +
    '\n' +
    '.arrow-left-animation{\n' +
    '    opacity: 0;\n' +
    '    animation: arrow-left-animation 1s forwards;\n' +
    '}\n' +
    '\n' +
    '.arrow-right-animation{\n' +
    '    opacity: 0;\n' +
    '    animation: header-left-animation 1s forwards;\n' +
    '}\n' +
    '\n' +
    '.arrow-left::after {\n' +
    '    content: \'\';\n' +
    '    position: absolute;\n' +
    '    bottom: 27%;\n' +
    '    width: 60%;\n' +
    '    height: 5px;\n' +
    '    background: #3a5a40;\n' +
    '    border-radius: 5px;\n' +
    '    transform: rotate(45deg);\n' +
    '}\n' +
    '\n' +
    '.arrow-left::before {\n' +
    '    content: \'\';\n' +
    '    position: absolute;\n' +
    '    top: 27%;\n' +
    '    width: 60%;\n' +
    '    height: 5px;\n' +
    '    background: #3a5a40;\n' +
    '    border-radius: 5px;\n' +
    '    transform: rotate(135deg);\n' +
    '}\n' +
    '\n' +
    '.arrow-right{\n' +
    '    display: block;\n' +
    '    position: relative;\n' +
    '    width: 50px;\n' +
    '    height: 50px;\n' +
    '    cursor: pointer;\n' +
    '    opacity: 0;\n' +
    '}\n' +
    '\n' +
    '.arrow-right::before {\n' +
    '    content: \'\';\n' +
    '    position: absolute;\n' +
    '    bottom: 27%;\n' +
    '    right: 0;\n' +
    '    width: 60%;\n' +
    '    height: 5px;\n' +
    '    background: #3a5a40;\n' +
    '    border-radius: 5px;\n' +
    '    transform: rotate(135deg);\n' +
    '}\n' +
    '\n' +
    '.arrow-right::after {\n' +
    '    content: \'\';\n' +
    '    position: absolute;\n' +
    '    top: 27%;\n' +
    '    right: 0;\n' +
    '    width: 60%;\n' +
    '    height: 5px;\n' +
    '    background: #3a5a40;\n' +
    '    border-radius: 5px;\n' +
    '    transform: rotate(45deg);\n' +
    '}\n' +
    '\n' +
    '\n' +
    '\n' +
    '/* Instagram section */\n' +
    '\n' +
    '#instagram-section{\n' +
    '    display: flex;\n' +
    '    align-items: center;\n' +
    '    gap: 20px;\n' +
    '    padding: 50px;\n' +
    '    height: 80vh;\n' +
    '}\n' +
    '\n' +
    '#instagram-section .img-container {\n' +
    '    width: 100%;\n' +
    '    height: 100%;\n' +
    '    position: relative;\n' +
    '    background:grey;\n' +
    '    opacity: 0;\n' +
    '}\n' +
    '\n' +
    '.instagram-img-container{\n' +
    '    animation: member-middle-animation .5s forwards;\n' +
    '    opacity: 0;\n' +
    '}\n' +
    '\n' +
    '.imgs-container .img-container:nth-child(1){\n' +
    '    animation-delay: .3s;\n' +
    '}\n' +
    '\n' +
    '.imgs-container .img-container:nth-child(2){\n' +
    '    animation-delay: .6s;\n' +
    '}\n' +
    '\n' +
    '.imgs-container .img-container:nth-child(3){\n' +
    '    animation-delay: .9s;\n' +
    '}\n' +
    '\n' +
    '.imgs-container .img-container:nth-child(4){\n' +
    '    animation-delay: .12s;\n' +
    '}\n' +
    '\n' +
    '.imgs-container {\n' +
    '    width: 160% !important;\n' +
    '    height: 100%;\n' +
    '    display: grid;\n' +
    '    grid: auto / 1fr 1fr;\n' +
    '    gap: 20px;\n' +
    '}\n' +
    '\n' +
    '/* Footer */\n' +
    '\n' +
    'footer {\n' +
    '    padding: 50px 50px 10px 50px;\n' +
    '    background: #ABF08C52;\n' +
    '    display: flex;\n' +
    '    flex-direction: column;\n' +
    '    align-items: center;\n' +
    '    border-top-left-radius: 20px;\n' +
    '    border-top-right-radius: 20px;\n' +
    '    animation: footer-animation 1s;\n' +
    '}\n' +
    '\n' +
    'footer p {\n' +
    '    margin-top: 50px;\n' +
    '}\n' +
    '\n' +
    '/* Form contact */\n' +
    '\n' +
    '#footer-contact{\n' +
    '    width: 70%;\n' +
    '}\n' +
    '\n' +
    '#footer-contact form{\n' +
    '    display: flex;\n' +
    '    align-items: flex-end;\n' +
    '    width: 100%;\n' +
    '    gap: 30px;\n' +
    '    margin-top: 20px;\n' +
    '}\n' +
    '\n' +
    '#footer-contact form input, #footer-contact form textarea {\n' +
    '    padding: 20px;\n' +
    '    border: 1px solid #3a5a40;\n' +
    '    color: #3a5a40 !important;\n' +
    '    outline: 0;\n' +
    '    background: rgba(46,139,87, .07);\n' +
    '    border-radius: 15px;\n' +
    '    width: 100%;\n' +
    '    font-size: 1rem;\n' +
    '    font-weight: 500;\n' +
    '    font-family: \'Poppins\', sans-serif;\n' +
    '}\n' +
    '\n' +
    '#footer-contact form textarea{\n' +
    '    resize: vertical;\n' +
    '}\n' +
    '\n' +
    '#footer-contact form label {\n' +
    '    width: 100%;\n' +
    '}\n' +
    '\n' +
    '.label-text{\n' +
    '    display: none;\n' +
    '}\n' +
    '\n' +
    '#footer-contact form button {\n' +
    '    width: 30%;\n' +
    '    margin: 0 auto;\n' +
    '    font-size: 1.1rem;\n' +
    '    padding: 20px 0;\n' +
    '    border: 1px solid seagreen;\n' +
    '    color: white;\n' +
    '    background: seagreen;\n' +
    '    text-align: center;\n' +
    '    border-radius: 10px;\n' +
    '    transition: all .3s;\n' +
    '}\n' +
    '\n' +
    '#footer-contact form button:hover {\n' +
    '    background: transparent;\n' +
    '    color: seagreen;\n' +
    '    border: 1px solid seagreen;\n' +
    '}\n' +
    '\n' +
    '@media screen and (max-width: 1024px) and (min-width: 768px){\n' +
    '    .header-image{\n' +
    '        height:55%;\n' +
    '        width: 100%;\n' +
    '        background-position: bottom;\n' +
    '        bottom: 0%;\n' +
    '        top: unset;\n' +
    '        left: 50%;\n' +
    '\n' +
    '        transform: translateX(200%) translateY(0);\n' +
    '    }\n' +
    '\n' +
    '    .header-image-animation{\n' +
    '        animation: responcive-header-right-animation 1s forwards;\n' +
    '        animation-delay: 1s;\n' +
    '    }\n' +
    '\n' +
    '    .header-text-information{\n' +
    '        width: 80%;\n' +
    '        height: 50%;\n' +
    '        align-items: flex-start;\n' +
    '        margin: 0 auto;\n' +
    '        padding-top: 5%;\n' +
    '        justify-content: flex-start;\n' +
    '        transform: translateX(200%);\n' +
    '    }\n' +
    '\n' +
    '    .end-header {\n' +
    '        padding-top: 50px;\n' +
    '        gap: 40px;\n' +
    '    }\n' +
    '\n' +
    '    .end-header .section-items h4{\n' +
    '        font-size: .9rem;\n' +
    '    }\n' +
    '\n' +
    '    .second-section-1-container{\n' +
    '        flex-direction: column;\n' +
    '        gap: 50px;\n' +
    '    }\n' +
    '\n' +
    '    .second-section-1-container .left, .second-section-1-container .right{\n' +
    '        width: 100%;\n' +
    '    }\n' +
    '\n' +
    '    #instagram-section {\n' +
    '        flex-direction: column;\n' +
    '        height: unset;\n' +
    '    }\n' +
    '\n' +
    '    .imgs-container{\n' +
    '        width: 100% !important;\n' +
    '    }\n' +
    '\n' +
    '    #instagram-section .img-container{\n' +
    '        min-height: 300px\n' +
    '    }\n' +
    '}\n' +
    '\n' +
    '@media screen and (max-width: 720px) and (min-width: 360px){\n' +
    '\n' +
    '    h1{\n' +
    '        font-size: 2.5rem;\n' +
    '    }\n' +
    '\n' +
    '    h2 {\n' +
    '        font-size: 1.7rem;\n' +
    '    }\n' +
    '\n' +
    '    .desktop {\n' +
    '        display: none;\n' +
    '    }\n' +
    '\n' +
    '    .mobile {\n' +
    '        display: flex;\n' +
    '    }\n' +
    '\n' +
    '    #navbar-mobile{\n' +
    '        position: fixed;\n' +
    '        z-index: 999;\n' +
    '        top: 0;\n' +
    '        left: 0;\n' +
    '        width: 100vw;\n' +
    '        align-items: center;\n' +
    '        justify-content: space-between;\n' +
    '        padding:20px;\n' +
    '    }\n' +
    '\n' +
    '    #navbar-mobile .logo {\n' +
    '        width: 50px;\n' +
    '        height: 50px;\n' +
    '        border-radius: 50%;\n' +
    '        background: grey;\n' +
    '    }\n' +
    '\n' +
    '    #navbar-mobile .burger-menu{\n' +
    '        position: relative;\n' +
    '        width: 50px;\n' +
    '        height: 50px;\n' +
    '        cursor: pointer\n' +
    '    }\n' +
    '\n' +
    '    #navbar-mobile .burger-menu::after{\n' +
    '        content: \'\';\n' +
    '        position: absolute;\n' +
    '        top: 30%;\n' +
    '        left: 0;\n' +
    '        width: 100%;\n' +
    '        height: 3px;\n' +
    '        background: #3a5a40;\n' +
    '        border-radius: 10px\n' +
    '    }\n' +
    '\n' +
    '    #navbar-mobile .burger-menu::before{\n' +
    '        content: \'\';\n' +
    '        position: absolute;\n' +
    '        bottom: 30%;\n' +
    '        left: 0;\n' +
    '        width: 100%;\n' +
    '        height: 3px;\n' +
    '        background: #3a5a40;\n' +
    '        border-radius: 10px\n' +
    '    }\n' +
    '\n' +
    '    #navbar-mobile .onglet-container {\n' +
    '        position: fixed;\n' +
    '        z-index: 999;\n' +
    '        width: 60%;\n' +
    '        height: 100vh;\n' +
    '        background: white;\n' +
    '        top: 0;\n' +
    '        right: 0;\n' +
    '        padding: 100px 50px;\n' +
    '        display: flex;\n' +
    '        flex-direction: column;\n' +
    '        align-items: flex-start;\n' +
    '        gap: 30px;\n' +
    '        transform: translateX(200%);\n' +
    '        transition: transform 0.3s;\n' +
    '    }\n' +
    '\n' +
    '    .onglet-container-active {\n' +
    '        transform: translateX(0) !important;\n' +
    '    }\n' +
    '\n' +
    '    #navbar-mobile .onglet-container::before{\n' +
    '        content: \'\';\n' +
    '        position: absolute;\n' +
    '        top: 0;\n' +
    '        left: -70%;\n' +
    '        width: 70%;\n' +
    '        height: 100%;\n' +
    '        z-index: -1;\n' +
    '        background: rgba(0, 0, 0, .2);\n' +
    '    }\n' +
    '\n' +
    '    #navbar-mobile .onglet-container::after{\n' +
    '        content: \'\';\n' +
    '        position: absolute;\n' +
    '        top: 0;\n' +
    '        right: 0;\n' +
    '        width: 100%;\n' +
    '        height: 100%;\n' +
    '        z-index: -1;\n' +
    '        background: #ABF08C52;\n' +
    '    }\n' +
    '\n' +
    '    #navbar-mobile .onglet{\n' +
    '        font-size: 1.2rem;\n' +
    '    }\n' +
    '\n' +
    '    #navbar-mobile .contact-button {\n' +
    '        padding: 10px 15px;\n' +
    '        border-radius: 30px;\n' +
    '        border: 1px solid #3a5a40;\n' +
    '        background: transparent;\n' +
    '        transition: all .2s;\n' +
    '        font-size: .8rem;\n' +
    '        color: #3a5a40;\n' +
    '        margin-top: -10px;\n' +
    '        margin-left: -15px;\n' +
    '    }\n' +
    '\n' +
    '    #navbar-mobile .contact-button:hover{\n' +
    '        background: seagreen;\n' +
    '        color: white;\n' +
    '        scale: 1.1;\n' +
    '        border: 1px solid seagreen;\n' +
    '    }\n' +
    '\n' +
    '    .cross {\n' +
    '        position: absolute;\n' +
    '        width: 50px;\n' +
    '        height: 50px;\n' +
    '        top: 20px;\n' +
    '        right: 20px;\n' +
    '    }\n' +
    '\n' +
    '    .cross::after{\n' +
    '        content: "";\n' +
    '        position: absolute;\n' +
    '        width: 100%;\n' +
    '        height: 3px;\n' +
    '        background: #3a5a40;\n' +
    '        transform: rotate(45deg);\n' +
    '        top: 50%;\n' +
    '        left: 0;\n' +
    '        border-radius: 10px;\n' +
    '\n' +
    '    }\n' +
    '\n' +
    '    .cross::before{\n' +
    '        content: "";\n' +
    '        position: absolute;\n' +
    '        width: 100%;\n' +
    '        height: 3px;\n' +
    '        background: #3a5a40;\n' +
    '        transform: rotate(135deg);\n' +
    '        top: 50%;\n' +
    '        left: 0;\n' +
    '        border-radius: 10px;\n' +
    '    }\n' +
    '\n' +
    '    #header{\n' +
    '        padding-left: 20px;\n' +
    '    }\n' +
    '\n' +
    '    .header-image{\n' +
    '        height:50%;\n' +
    '        width: 100%;\n' +
    '        background-position: bottom;\n' +
    '        bottom: 5%;\n' +
    '        top: unset;\n' +
    '        left: 50%;\n' +
    '        transform: translateX(200%) translateY(0);\n' +
    '    }\n' +
    '\n' +
    '    .header-image-animation{\n' +
    '        animation: responcive-header-right-animation 1s forwards;\n' +
    '        animation-delay: 1s;\n' +
    '    }\n' +
    '\n' +
    '    .header-text-information{\n' +
    '        width: 100%;\n' +
    '        height: 50%;\n' +
    '        align-items: flex-start;\n' +
    '        padding-left: 0;\n' +
    '        padding-right: 20px;\n' +
    '        padding-top: 30%;\n' +
    '        justify-content: flex-start;\n' +
    '        transform: translateX(200%);\n' +
    '    }\n' +
    '\n' +
    '    .header-button-container{\n' +
    '        display: none;\n' +
    '    }\n' +
    '\n' +
    '    .end-header {\n' +
    '        padding-top: 50px;\n' +
    '        gap: 40px;\n' +
    '        flex-direction: column;\n' +
    '    }\n' +
    '\n' +
    '    .end-header .section-items h4{\n' +
    '        font-size: .9rem;\n' +
    '    }\n' +
    '\n' +
    '    .end-header .section-items {\n' +
    '        width: 200px;\n' +
    '        height: unset;\n' +
    '    }\n' +
    '\n' +
    '    .end-header .section-items:nth-child(1){\n' +
    '        margin-right: auto;\n' +
    '    }\n' +
    '\n' +
    '    .end-header .section-items:nth-child(3){\n' +
    '        margin-left: auto;\n' +
    '    }\n' +
    '\n' +
    '    .first-section-container {\n' +
    '        margin-top: 10px;\n' +
    '        overflow-x: scroll;\n' +
    '        padding-top: 50px;\n' +
    '        gap: 20px;\n' +
    '    }\n' +
    '\n' +
    '    .first-section-container .all {\n' +
    '        top: 0px;\n' +
    '        left: 0;\n' +
    '        right: unset;\n' +
    '    }\n' +
    '\n' +
    '    .first-section-item{\n' +
    '        width: calc(100vw - 150px);\n' +
    '    }\n' +
    '\n' +
    '    #second-section{\n' +
    '        padding: 50px 30px;\n' +
    '    }\n' +
    '\n' +
    '    .second-section-1-container{\n' +
    '        flex-direction: column;\n' +
    '        gap: 50px;\n' +
    '\n' +
    '    }\n' +
    '\n' +
    '    .second-section-1-container .left, .second-section-1-container .right{\n' +
    '        width: 100%;\n' +
    '        font-size: .8rem;\n' +
    '    }\n' +
    '\n' +
    '    .second-section-1-container .right{\n' +
    '        padding: 15px;\n' +
    '    }\n' +
    '\n' +
    '    .second-section-1-container .right .top, .second-section-1-container .right .bottom {\n' +
    '        display: flex;\n' +
    '        align-items: center;\n' +
    '    }\n' +
    '\n' +
    '    #third-section{\n' +
    '        display: flex;\n' +
    '        justify-content: center;\n' +
    '        align-items: center;\n' +
    '    }\n' +
    '\n' +
    '    #third-section .left, #third-section .right{\n' +
    '        display: none;\n' +
    '    }\n' +
    '\n' +
    '    .middle-animation {\n' +
    '        animation-delay: 0s;\n' +
    '    }\n' +
    '\n' +
    '    #instagram-section {\n' +
    '        flex-direction: column;\n' +
    '        height: unset;\n' +
    '        padding: 20px;\n' +
    '    }\n' +
    '\n' +
    '    .imgs-container{\n' +
    '        width: 100% !important;\n' +
    '    }\n' +
    '\n' +
    '    #instagram-section .img-container{\n' +
    '        min-height: 300px\n' +
    '    }\n' +
    '\n' +
    '    footer{\n' +
    '        margin-top: 20px;\n' +
    '        padding: 30px;\n' +
    '    }\n' +
    '\n' +
    '    #footer-contact{\n' +
    '        width: 100%;\n' +
    '    }\n' +
    '\n' +
    '    #footer-contact form{\n' +
    '        gap: 10px;\n' +
    '    }\n' +
    '\n' +
    '    #footer-contact form button{\n' +
    '        width: 50%;\n' +
    '    }\n' +
    '\n' +
    '}'