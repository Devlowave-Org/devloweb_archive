export const site = "<!doctype html>\n" +
    "<html lang=\"fr\">\n" +
    "<head>\n" +
    "\n" +
    "    <!-- Prérequis du HTML -->\n" +
    "    <meta charset=\"UTF-8\">\n" +
    "    <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'>\n" +
    "    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n" +
    "\n" +
    "    <!-- Links Fonts -->\n" +
    "    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css\">\n" +
    "\n" +
    "    <!-- Links Fonts -->\n" +
    "    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n" +
    "    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n" +
    "    <link href=\"https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;900&display=swap\" rel=\"stylesheet\">\n" +
    "\n" +
    "     <!-- Css -->\n" +
    "    <style>\n" +
    "        /* Animations */\n" +
    "\n" +
    "        @keyframes nav-animation {\n" +
    "            0%{\n" +
    "                transform: translateY(-100%);\n" +
    "            }\n" +
    "            100%{\n" +
    "                transform: translateY(0);\n" +
    "            }\n" +
    "        }\n" +
    "\n" +
    "        @keyframes footer-animation {\n" +
    "            0%{\n" +
    "                transform: translateY(100%);\n" +
    "            }\n" +
    "            100%{\n" +
    "                transform: translateY(0);\n" +
    "            }\n" +
    "        }\n" +
    "\n" +
    "        @keyframes header-left-animation {\n" +
    "            0%{\n" +
    "                transform: translateX(-100%);\n" +
    "                opacity: 0;\n" +
    "            }\n" +
    "            100%{\n" +
    "                transform: translateX(0);\n" +
    "                opacity: 1;\n" +
    "            }\n" +
    "        }\n" +
    "\n" +
    "        @keyframes header-right-animation {\n" +
    "            0%{\n" +
    "                transform: translateX(100%) translateY(-50%);\n" +
    "            }\n" +
    "            100%{\n" +
    "                transform: translateX(0) translateY(-50%);\n" +
    "            }\n" +
    "        }\n" +
    "\n" +
    "        @keyframes responcive-header-right-animation {\n" +
    "            0%{\n" +
    "                transform: translateX(100%);\n" +
    "            }\n" +
    "            100%{\n" +
    "                transform: translateX(-50%);\n" +
    "            }\n" +
    "        }\n" +
    "\n" +
    "        @keyframes arrow-left-animation {\n" +
    "            0%{\n" +
    "                transform: translateX(100%) ;\n" +
    "                opacity: 0;\n" +
    "            }\n" +
    "            100%{\n" +
    "                transform: translateX(0) ;\n" +
    "                opacity: 1;\n" +
    "            }\n" +
    "        }\n" +
    "\n" +
    "        @keyframes end-header-element {\n" +
    "            0%{\n" +
    "                opacity: 0;\n" +
    "                transform: translateY(100%);\n" +
    "            }\n" +
    "\n" +
    "            100%{\n" +
    "                opacity: 1;\n" +
    "                transform: translateY(0%);\n" +
    "            }\n" +
    "        }\n" +
    "\n" +
    "        @keyframes members-left-animation {\n" +
    "            0%{\n" +
    "                opacity: 0;\n" +
    "                transform: translateX(-200%);\n" +
    "            }\n" +
    "            100%{\n" +
    "                opacity: 1;\n" +
    "                transform: translateX(0);\n" +
    "            }\n" +
    "        }\n" +
    "\n" +
    "        @keyframes members-right-animation {\n" +
    "            0%{\n" +
    "                opacity: 0;\n" +
    "                transform: translateX(200%);\n" +
    "            }\n" +
    "            100%{\n" +
    "                opacity: 1;\n" +
    "                transform: translateX(0);\n" +
    "            }\n" +
    "        }\n" +
    "\n" +
    "        @keyframes member-middle-animation {\n" +
    "            0%{\n" +
    "                opacity: 0;\n" +
    "                transform: scale(0);\n" +
    "            }\n" +
    "            100%{\n" +
    "                opacity: 1;\n" +
    "                transform: scale(1);\n" +
    "            }\n" +
    "        }\n" +
    "\n" +
    "\n" +
    "        * {\n" +
    "            padding: 0;\n" +
    "            margin: 0;\n" +
    "            box-sizing: border-box;\n" +
    "            text-decoration: none;\n" +
    "            list-style-type: none;\n" +
    "            color: unset;\n" +
    "            font-weight: unset;\n" +
    "        }\n" +
    "\n" +
    "        html {\n" +
    "            font-size: 16px;\n" +
    "            font-weight: 500;\n" +
    "            color: #3a5a40;\n" +
    "            font-family: 'Poppins', sans-serif;\n" +
    "            overflow-x: hidden;\n" +
    "            scroll-behavior: smooth;\n" +
    "        }\n" +
    "\n" +
    "        body{\n" +
    "            position: relative;\n" +
    "        }\n" +
    "\n" +
    "        h1 {\n" +
    "            font-size: 3rem;\n" +
    "            font-weight: 700;\n" +
    "        }\n" +
    "\n" +
    "        h2 {\n" +
    "            font-size: 2rem;\n" +
    "            font-weight: 600;\n" +
    "        }\n" +
    "\n" +
    "        h3 {\n" +
    "            font-size: 1.8rem;\n" +
    "            font-weight: 600;\n" +
    "        }\n" +
    "\n" +
    "        h4 {\n" +
    "            font-size: 1.3rem;\n" +
    "            font-weight: 600;\n" +
    "        }\n" +
    "\n" +
    "        .green {\n" +
    "            color: seagreen;\n" +
    "        }\n" +
    "\n" +
    "        /* Navbar */\n" +
    "\n" +
    "        #navbar-desktop {\n" +
    "            z-index: 999;\n" +
    "            position: absolute;\n" +
    "            top: 0;\n" +
    "            left: 0;\n" +
    "            width: 100vw;\n" +
    "            padding: 20px 50px;\n" +
    "            align-items: center;\n" +
    "            justify-content: space-between;\n" +
    "        }\n" +
    "\n" +
    "        .desktop {\n" +
    "            display: flex;\n" +
    "        }\n" +
    "\n" +
    "        .mobile {\n" +
    "            display: none;\n" +
    "        }\n" +
    "\n" +
    "        .navbar-animation{\n" +
    "            animation: nav-animation 1s forwards;\n" +
    "        }\n" +
    "\n" +
    "        #navbar-desktop .logo {\n" +
    "            width: 50px;\n" +
    "            height: 50px;\n" +
    "            border-radius: 50%;\n" +
    "            background: grey;\n" +
    "        }\n" +
    "\n" +
    "        #navbar-desktop .onglet-container {\n" +
    "            display: flex;\n" +
    "            align-items: center;\n" +
    "            gap: 80px;\n" +
    "        }\n" +
    "\n" +
    "        #navbar-desktop .onglet {\n" +
    "            position: relative;\n" +
    "            transition: color .1s ease-in-out;\n" +
    "        }\n" +
    "\n" +
    "        #navbar-desktop .onglet::after {\n" +
    "            content: \"\";\n" +
    "            position: absolute;\n" +
    "            bottom: 0;\n" +
    "            left: 50%;\n" +
    "            width: 90%;\n" +
    "            height: 1px;\n" +
    "            background: seagreen;\n" +
    "            transform: translateX(-50%) scale(0);\n" +
    "            transition: transform .3s ease-in-out;\n" +
    "        }\n" +
    "\n" +
    "        #navbar-desktop .onglet:hover::after {\n" +
    "            transform: translateX(-50%) scale(1);\n" +
    "        }\n" +
    "\n" +
    "        #navbar-desktop .onglet:hover {\n" +
    "            color: seagreen !important;\n" +
    "        }\n" +
    "\n" +
    "        #navbar-desktop .contact-button {\n" +
    "            padding: 10px 15px;\n" +
    "            border-radius: 30px;\n" +
    "            border: 1px solid #3a5a40;\n" +
    "            background: transparent;\n" +
    "            transition: all .2s;\n" +
    "            color: #3a5a40;\n" +
    "        }\n" +
    "\n" +
    "        #navbar-desktop .contact-button:hover{\n" +
    "            background: seagreen;\n" +
    "            color: white;\n" +
    "            scale: 1.1;\n" +
    "            border: 1px solid seagreen;\n" +
    "        }\n" +
    "\n" +
    "        /* Header */\n" +
    "\n" +
    "        #header {\n" +
    "            position: relative;\n" +
    "            height: 100vh;\n" +
    "            overflow: hidden;\n" +
    "            background: #ABF08C52;\n" +
    "        }\n" +
    "\n" +
    "        .header-image{\n" +
    "            position: absolute;\n" +
    "            top: 50%;\n" +
    "            right: -2%;\n" +
    "            width: 80%;\n" +
    "            height: 80%;\n" +
    "            transform: translateY(-50%) translateX(100%);\n" +
    "            background-position: 90%;\n" +
    "            background-size: contain;\n" +
    "            background-repeat: no-repeat;\n" +
    "        }\n" +
    "\n" +
    "        .header-image-animation{\n" +
    "            animation: header-right-animation 1s forwards;\n" +
    "            animation-delay: 1s;\n" +
    "        }\n" +
    "\n" +
    "        .header-text-information{\n" +
    "            width: 50%;\n" +
    "            height: 100%;\n" +
    "            display: flex;\n" +
    "            flex-direction: column;\n" +
    "            align-items: start;\n" +
    "            justify-content: center;\n" +
    "            padding-left: 50px;\n" +
    "            padding-top: 100px;\n" +
    "            padding-bottom: 0;\n" +
    "            transform: translateX(-100%);\n" +
    "        }\n" +
    "\n" +
    "        .header-text-animation {\n" +
    "            animation: header-left-animation 1s forwards;\n" +
    "            animation-delay: 1s;\n" +
    "        }\n" +
    "\n" +
    "        .header-text-information h2 {\n" +
    "            margin-top: -15px;\n" +
    "            margin-bottom: 10px;\n" +
    "        }\n" +
    "\n" +
    "        .header-button-container {\n" +
    "            display: flex;\n" +
    "            align-items: center;\n" +
    "            gap: 50px;\n" +
    "            margin-top: 40px;\n" +
    "        }\n" +
    "\n" +
    "        .header-button-container a{\n" +
    "            padding: 10px 15px;\n" +
    "            border: 1px solid seagreen;\n" +
    "            background: transparent;\n" +
    "            border-radius: 30px;\n" +
    "            transition: all .3s;\n" +
    "        }\n" +
    "\n" +
    "        .header-button-container .contact-button{\n" +
    "            background: seagreen;\n" +
    "            color: white;\n" +
    "        }\n" +
    "\n" +
    "        .header-button-container .contact-button:hover {\n" +
    "            background: transparent;\n" +
    "            color: seagreen;\n" +
    "            font-weight: bold;\n" +
    "            border: 1px solid seagreen;\n" +
    "            scale: 1.1;\n" +
    "        }\n" +
    "\n" +
    "        .header-button-container .about-button {\n" +
    "            background: transparent;\n" +
    "            color: seagreen;\n" +
    "        }\n" +
    "\n" +
    "        .header-button-container .about-button:hover {\n" +
    "            background: seagreen;\n" +
    "            font-weight: bold;\n" +
    "            color: white;\n" +
    "            scale: 1.1;\n" +
    "        }\n" +
    "\n" +
    "        /* End Header section */\n" +
    "\n" +
    "        .end-header {\n" +
    "            display: flex;\n" +
    "            align-items: center;\n" +
    "            justify-content: space-evenly;\n" +
    "            gap: 100px;\n" +
    "            padding: 0px 50px 50px 50px;\n" +
    "            background: #ABF08C52;\n" +
    "            box-shadow: rgba(100, 100, 111, 0.05) 0 43px 7px 0;\n" +
    "            border-bottom-right-radius: 30px;\n" +
    "            border-bottom-left-radius: 30px;\n" +
    "        }\n" +
    "\n" +
    "        .end-header .section-items {\n" +
    "            text-align: center;\n" +
    "            width: 300px;\n" +
    "            height: 100px;\n" +
    "            background: white;\n" +
    "            border-radius: 46px;\n" +
    "            transition: all .2s ease;\n" +
    "            padding: 20px 25px;\n" +
    "            display: flex;\n" +
    "            flex-direction: column;\n" +
    "            align-items: center;\n" +
    "            justify-content: center;\n" +
    "            gap: 5px;\n" +
    "            opacity: 0;\n" +
    "        }\n" +
    "\n" +
    "        .end-header-animation{\n" +
    "            animation: end-header-element 1s forwards;\n" +
    "            opacity: 0;\n" +
    "        }\n" +
    "\n" +
    "        .end-header .section-items img {\n" +
    "            width: 30px;\n" +
    "            height: 30px;\n" +
    "        }\n" +
    "\n" +
    "        .end-header .section-items:hover{\n" +
    "            scale: 1.05;\n" +
    "            box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;\n" +
    "        }\n" +
    "\n" +
    "        /* Première section */\n" +
    "\n" +
    "        #first-section {\n" +
    "            padding:50px;\n" +
    "        }\n" +
    "\n" +
    "        .first-section-container {\n" +
    "            position: relative;\n" +
    "            display: grid;\n" +
    "            grid: auto / 1fr 1fr 1fr;\n" +
    "            gap: 50px;\n" +
    "            margin-top: 20px;\n" +
    "        }\n" +
    "\n" +
    "        .first-section-container .all {\n" +
    "            position: absolute;\n" +
    "            top: -30px;\n" +
    "            right: 30px;\n" +
    "        }\n" +
    "\n" +
    "        .first-section-container .all::after {\n" +
    "            content: '';\n" +
    "            position: absolute;\n" +
    "            bottom: 0;\n" +
    "            left: 0;\n" +
    "            width: 0;\n" +
    "            height: 1px;\n" +
    "            background: #3a5a40;\n" +
    "            transition: width .4s ease-in-out;\n" +
    "        }\n" +
    "\n" +
    "        .first-section-container .all:hover::after {\n" +
    "            width: 100%;\n" +
    "        }\n" +
    "\n" +
    "        .first-section-item{\n" +
    "            max-width: 500px;\n" +
    "            height: 400px;\n" +
    "            padding: 10px;\n" +
    "            border-radius: 20px;\n" +
    "            display: flex;\n" +
    "            flex-direction: column;\n" +
    "            gap: 10px;\n" +
    "        }\n" +
    "        .first-section-item-image{\n" +
    "            width: 100%;\n" +
    "            height: 60%;\n" +
    "            border-radius: 36px;\n" +
    "            background-size: cover;\n" +
    "            background-position: center;\n" +
    "        }\n" +
    "\n" +
    "        .first-section-item:hover .more-information{\n" +
    "            opacity: 1  ;\n" +
    "        }\n" +
    "\n" +
    "        .first-section-container .more-information{\n" +
    "            width: 100%;\n" +
    "            padding: 10px 0;\n" +
    "            border: 1px solid seagreen;\n" +
    "            color: seagreen;\n" +
    "            background: transparent;\n" +
    "            text-align: center;\n" +
    "            border-radius: 20px;\n" +
    "            opacity: 0;\n" +
    "            transition: all .3s;\n" +
    "        }\n" +
    "\n" +
    "        .first-section-item .more-information:hover {\n" +
    "            background: #3a5a40;\n" +
    "            color: white;\n" +
    "            border: 1px solid #3a5a40;\n" +
    "        }\n" +
    "\n" +
    "        /* Seconde section */\n" +
    "\n" +
    "        #second-section {\n" +
    "            background: #ABF08C52;\n" +
    "            padding: 50px;\n" +
    "        }\n" +
    "\n" +
    "        .second-section-1-container {\n" +
    "            margin-top: 40px;\n" +
    "            display: flex;\n" +
    "            align-items: center;\n" +
    "            gap: 20px;\n" +
    "        }\n" +
    "\n" +
    "        .second-section-1-container .left {\n" +
    "            display: flex;\n" +
    "            flex-direction: column;\n" +
    "            gap: 20px;\n" +
    "            width: 40%;\n" +
    "        }\n" +
    "\n" +
    "        .second-section-1-container .left h3 {\n" +
    "            opacity: 0;\n" +
    "        }\n" +
    "\n" +
    "        .second-section-h3-animation {\n" +
    "            animation: end-header-element .7s forwards;\n" +
    "            opacity: 0;\n" +
    "        }\n" +
    "\n" +
    "        .second-section-1-container .right {\n" +
    "            width: 60%;\n" +
    "            background: rgba(46,139,87, .1);\n" +
    "            border: 1px solid grey;\n" +
    "            display: flex;\n" +
    "            flex-direction: column;\n" +
    "            align-items: center;\n" +
    "            justify-content: center;\n" +
    "            border-radius: 10px;\n" +
    "            padding: 30px;\n" +
    "            box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgba(192,192,192, .7) 0px 0px 0px 8px;\n" +
    "        }\n" +
    "\n" +
    "        .second-section-1-container .right .top, .second-section-1-container .right .bottom {\n" +
    "            display: flex;\n" +
    "            align-items: center;\n" +
    "        }\n" +
    "\n" +
    "        .second-section-1-container .right .top {\n" +
    "            padding-bottom: 30px;\n" +
    "            border-bottom: 1px solid grey;\n" +
    "        }\n" +
    "\n" +
    "        .second-section-1-container .right .bottom {\n" +
    "            padding-top: 30px;\n" +
    "        }\n" +
    "\n" +
    "        .second-section-1-item {\n" +
    "            display: flex;\n" +
    "            flex-direction: column;\n" +
    "            gap: 15px;\n" +
    "            margin: 0 10px;\n" +
    "            padding: 10px;\n" +
    "            transition: scale .2s;\n" +
    "            border-radius: 10px;\n" +
    "            opacity: 0;\n" +
    "        }\n" +
    "\n" +
    "        .second-section-item-animation{\n" +
    "            animation: end-header-element .7s forwards;\n" +
    "            opacity: 0;\n" +
    "        }\n" +
    "\n" +
    "        .second-section-1-item:hover {\n" +
    "            scale: 1.01;\n" +
    "\n" +
    "        }\n" +
    "\n" +
    "        .second-section-1-item span {\n" +
    "            display: flex;\n" +
    "            align-items: center;\n" +
    "            gap: 10px;\n" +
    "        }\n" +
    "\n" +
    "        .second-section-1-item span strong {\n" +
    "            font-size: 1.3rem;\n" +
    "            font-weight: 600;\n" +
    "        }\n" +
    "\n" +
    "        .second-section-1-item img {\n" +
    "            width: 30px;\n" +
    "            height: 30px;\n" +
    "            background: grey;\n" +
    "            border-radius: 50%;\n" +
    "        }\n" +
    "\n" +
    "        /* Troisième section */\n" +
    "\n" +
    "        #third-section{\n" +
    "            position: relative;\n" +
    "            padding: 50px 50px 150px 50px;\n" +
    "            background: #ABF08C52;\n" +
    "            display: grid;\n" +
    "            gap: 20px;\n" +
    "            grid: auto / .8fr 1.4fr .8fr;\n" +
    "            border-bottom-right-radius: 30px;\n" +
    "            border-bottom-left-radius: 30px;\n" +
    "            box-shadow: rgba(100, 100, 111, 0.05) 0px 100px 20px 0px;\n" +
    "        }\n" +
    "\n" +
    "        #third-section .left, #third-section .right{\n" +
    "            display: flex;\n" +
    "            flex-direction: column;\n" +
    "            align-items: center;\n" +
    "            justify-content: center;\n" +
    "            gap: 20px;\n" +
    "        }\n" +
    "\n" +
    "        #third-section .left .little-image-container{\n" +
    "            width: 100px;\n" +
    "            height: 100px;\n" +
    "            border-radius: 50%;\n" +
    "            position: relative;\n" +
    "            overflow: hidden;\n" +
    "        }\n" +
    "\n" +
    "        .little-image-container img {\n" +
    "            width: 100%;\n" +
    "            height: unset;\n" +
    "            position: absolute;\n" +
    "            top: 50%;\n" +
    "            left: 50%;\n" +
    "            transform: translate(-50%, -50%);\n" +
    "        }\n" +
    "\n" +
    "        #third-section .left .little-image-container:nth-child(1){\n" +
    "            margin-left: auto;\n" +
    "            margin-right: 10%;\n" +
    "            opacity: 0;\n" +
    "        }\n" +
    "\n" +
    "        #third-section .left .little-image-container:nth-child(2){\n" +
    "            margin-right: auto;\n" +
    "            margin-left: 10%;\n" +
    "            opacity: 0;\n" +
    "            animation-delay: 1s;\n" +
    "        }\n" +
    "\n" +
    "        #third-section .right .little-image-container{\n" +
    "            width: 100px;\n" +
    "            height: 100px;\n" +
    "            border-radius: 50%;\n" +
    "            overflow: hidden;\n" +
    "            position: relative;\n" +
    "        }\n" +
    "\n" +
    "        #third-section .right .little-image-container:nth-child(2){\n" +
    "            margin-left: auto;\n" +
    "            margin-right: 10%;\n" +
    "            animation-delay: 1.5s;\n" +
    "            opacity: 0;\n" +
    "\n" +
    "        }\n" +
    "\n" +
    "        #third-section .right .little-image-container:nth-child(1){\n" +
    "            margin-right: auto;\n" +
    "            margin-left: 10%;\n" +
    "            animation-delay: .5s;\n" +
    "            opacity: 0;\n" +
    "        }\n" +
    "\n" +
    "        .little-image-container-animation{\n" +
    "            animation: members-right-animation .7s forwards;\n" +
    "            opacity: 0;\n" +
    "        }\n" +
    "\n" +
    "        #third-section .middle{\n" +
    "            display: flex;\n" +
    "            flex-direction: column;\n" +
    "            align-items: center;\n" +
    "            justify-content: space-evenly;\n" +
    "            gap: 20px;\n" +
    "            opacity: 0;\n" +
    "        }\n" +
    "\n" +
    "        .middle-animation{\n" +
    "            animation: member-middle-animation .5s forwards;\n" +
    "            opacity: 0;\n" +
    "            animation-delay: 2s;\n" +
    "        }\n" +
    "\n" +
    "        #third-section .middle .img-container{\n" +
    "            width: 250px;\n" +
    "            height: 250px;\n" +
    "            border-radius: 50%;\n" +
    "            position: relative;\n" +
    "            overflow: hidden;\n" +
    "        }\n" +
    "\n" +
    "        .middle .img-container img {\n" +
    "            width: 100%;\n" +
    "            height: unset;\n" +
    "            position: absolute;\n" +
    "            top: 50%;\n" +
    "            left: 50%;\n" +
    "            transform: translate(-50%, -50%);\n" +
    "        }\n" +
    "\n" +
    "        #third-section .middle h4 {\n" +
    "            margin-top: -25px;\n" +
    "            color: seagreen;\n" +
    "        }\n" +
    "\n" +
    "        #third-section .middle p{\n" +
    "            text-align: center;\n" +
    "        }\n" +
    "\n" +
    "        #third-section .middle .contact-member {\n" +
    "            padding: 10px 20px;\n" +
    "            color: white;\n" +
    "            background: seagreen;\n" +
    "            border-radius: 20px;\n" +
    "            transition: all .2s;\n" +
    "            border: 1px solid seagreen;\n" +
    "        }\n" +
    "\n" +
    "        #third-section .middle .contact-member:hover {\n" +
    "            background: transparent;\n" +
    "            color: seagreen;\n" +
    "            border: 1px solid seagreen;\n" +
    "        }\n" +
    "\n" +
    "        .arrows-container{\n" +
    "            position: absolute;\n" +
    "            display: flex;\n" +
    "            align-items: center;\n" +
    "            justify-content: space-between;\n" +
    "            width: 50%;\n" +
    "            bottom: 70px;\n" +
    "            left: 50%;\n" +
    "            transform: translateX(-50%);\n" +
    "        }\n" +
    "\n" +
    "        .arrow-left{\n" +
    "            display: block;\n" +
    "            position: relative;\n" +
    "            width: 50px;\n" +
    "            height: 50px;\n" +
    "            cursor: pointer;\n" +
    "            opacity: 0;\n" +
    "        }\n" +
    "\n" +
    "        .arrow-left-animation{\n" +
    "            opacity: 0;\n" +
    "            animation: arrow-left-animation 1s forwards;\n" +
    "        }\n" +
    "\n" +
    "        .arrow-right-animation{\n" +
    "            opacity: 0;\n" +
    "            animation: header-left-animation 1s forwards;\n" +
    "        }\n" +
    "\n" +
    "        .arrow-left::after {\n" +
    "            content: '';\n" +
    "            position: absolute;\n" +
    "            bottom: 27%;\n" +
    "            width: 60%;\n" +
    "            height: 5px;\n" +
    "            background: #3a5a40;\n" +
    "            border-radius: 5px;\n" +
    "            transform: rotate(45deg);\n" +
    "        }\n" +
    "\n" +
    "        .arrow-left::before {\n" +
    "            content: '';\n" +
    "            position: absolute;\n" +
    "            top: 27%;\n" +
    "            width: 60%;\n" +
    "            height: 5px;\n" +
    "            background: #3a5a40;\n" +
    "            border-radius: 5px;\n" +
    "            transform: rotate(135deg);\n" +
    "        }\n" +
    "\n" +
    "        .arrow-right{\n" +
    "            display: block;\n" +
    "            position: relative;\n" +
    "            width: 50px;\n" +
    "            height: 50px;\n" +
    "            cursor: pointer;\n" +
    "            opacity: 0;\n" +
    "        }\n" +
    "\n" +
    "        .arrow-right::before {\n" +
    "            content: '';\n" +
    "            position: absolute;\n" +
    "            bottom: 27%;\n" +
    "            right: 0;\n" +
    "            width: 60%;\n" +
    "            height: 5px;\n" +
    "            background: #3a5a40;\n" +
    "            border-radius: 5px;\n" +
    "            transform: rotate(135deg);\n" +
    "        }\n" +
    "\n" +
    "        .arrow-right::after {\n" +
    "            content: '';\n" +
    "            position: absolute;\n" +
    "            top: 27%;\n" +
    "            right: 0;\n" +
    "            width: 60%;\n" +
    "            height: 5px;\n" +
    "            background: #3a5a40;\n" +
    "            border-radius: 5px;\n" +
    "            transform: rotate(45deg);\n" +
    "        }\n" +
    "\n" +
    "\n" +
    "\n" +
    "        /* Instagram section */\n" +
    "\n" +
    "        #instagram-section{\n" +
    "            display: flex;\n" +
    "            align-items: center;\n" +
    "            gap: 20px;\n" +
    "            padding: 50px;\n" +
    "            height: 80vh;\n" +
    "        }\n" +
    "\n" +
    "        #instagram-section .img-container {\n" +
    "            width: 100%;\n" +
    "            height: 100%;\n" +
    "            position: relative;\n" +
    "            background:grey;\n" +
    "            opacity: 0;\n" +
    "        }\n" +
    "\n" +
    "        .instagram-img-container{\n" +
    "            animation: member-middle-animation .5s forwards;\n" +
    "            opacity: 0;\n" +
    "        }\n" +
    "\n" +
    "        .imgs-container .img-container:nth-child(1){\n" +
    "            animation-delay: .3s;\n" +
    "        }\n" +
    "\n" +
    "        .imgs-container .img-container:nth-child(2){\n" +
    "            animation-delay: .6s;\n" +
    "        }\n" +
    "\n" +
    "        .imgs-container .img-container:nth-child(3){\n" +
    "            animation-delay: .9s;\n" +
    "        }\n" +
    "\n" +
    "        .imgs-container .img-container:nth-child(4){\n" +
    "            animation-delay: .12s;\n" +
    "        }\n" +
    "\n" +
    "        .imgs-container {\n" +
    "            width: 160% !important;\n" +
    "            height: 100%;\n" +
    "            display: grid;\n" +
    "            grid: auto / 1fr 1fr;\n" +
    "            gap: 20px;\n" +
    "        }\n" +
    "\n" +
    "        /* Footer */\n" +
    "\n" +
    "        footer {\n" +
    "            padding: 50px 50px 10px 50px;\n" +
    "            background: #ABF08C52;\n" +
    "            display: flex;\n" +
    "            flex-direction: column;\n" +
    "            align-items: center;\n" +
    "            border-top-left-radius: 20px;\n" +
    "            border-top-right-radius: 20px;\n" +
    "            animation: footer-animation 1s;\n" +
    "        }\n" +
    "\n" +
    "        footer p {\n" +
    "            margin-top: 50px;\n" +
    "        }\n" +
    "\n" +
    "        /* Form contact */\n" +
    "\n" +
    "        #footer-contact{\n" +
    "            width: 70%;\n" +
    "        }\n" +
    "\n" +
    "        #footer-contact form{\n" +
    "            display: flex;\n" +
    "            align-items: flex-end;\n" +
    "            width: 100%;\n" +
    "            gap: 30px;\n" +
    "            margin-top: 20px;\n" +
    "        }\n" +
    "\n" +
    "        #footer-contact form input, #footer-contact form textarea {\n" +
    "            padding: 20px;\n" +
    "            border: 1px solid #3a5a40;\n" +
    "            color: #3a5a40 !important;\n" +
    "            outline: 0;\n" +
    "            background: rgba(46,139,87, .07);\n" +
    "            border-radius: 15px;\n" +
    "            width: 100%;\n" +
    "            font-size: 1rem;\n" +
    "            font-weight: 500;\n" +
    "            font-family: 'Poppins', sans-serif;\n" +
    "        }\n" +
    "\n" +
    "        #footer-contact form textarea{\n" +
    "            resize: vertical;\n" +
    "        }\n" +
    "\n" +
    "        #footer-contact form label {\n" +
    "            width: 100%;\n" +
    "        }\n" +
    "\n" +
    "        .label-text{\n" +
    "            display: none;\n" +
    "        }\n" +
    "\n" +
    "        #footer-contact form button {\n" +
    "            width: 30%;\n" +
    "            margin: 0 auto;\n" +
    "            font-size: 1.1rem;\n" +
    "            padding: 20px 0;\n" +
    "            border: 1px solid seagreen;\n" +
    "            color: white;\n" +
    "            background: seagreen;\n" +
    "            text-align: center;\n" +
    "            border-radius: 10px;\n" +
    "            transition: all .3s;\n" +
    "        }\n" +
    "\n" +
    "        #footer-contact form button:hover {\n" +
    "            background: transparent;\n" +
    "            color: seagreen;\n" +
    "            border: 1px solid seagreen;\n" +
    "        }\n" +
    "\n" +
    "        @media screen and (max-width: 1024px) and (min-width: 768px){\n" +
    "            .header-image{\n" +
    "                height:55%;\n" +
    "                width: 100%;\n" +
    "                background-position: bottom;\n" +
    "                bottom: 0%;\n" +
    "                top: unset;\n" +
    "                left: 50%;\n" +
    "\n" +
    "                transform: translateX(200%) translateY(0);\n" +
    "            }\n" +
    "\n" +
    "            .header-image-animation{\n" +
    "                animation: responcive-header-right-animation 1s forwards;\n" +
    "                animation-delay: 1s;\n" +
    "            }\n" +
    "\n" +
    "            .header-text-information{\n" +
    "                width: 80%;\n" +
    "                height: 50%;\n" +
    "                align-items: flex-start;\n" +
    "                margin: 0 auto;\n" +
    "                padding-top: 5%;\n" +
    "                justify-content: flex-start;\n" +
    "                transform: translateX(200%);\n" +
    "            }\n" +
    "\n" +
    "            .end-header {\n" +
    "                padding-top: 50px;\n" +
    "                gap: 40px;\n" +
    "            }\n" +
    "\n" +
    "            .end-header .section-items h4{\n" +
    "                font-size: .9rem;\n" +
    "            }\n" +
    "\n" +
    "            .second-section-1-container{\n" +
    "                flex-direction: column;\n" +
    "                gap: 50px;\n" +
    "            }\n" +
    "\n" +
    "            .second-section-1-container .left, .second-section-1-container .right{\n" +
    "                width: 100%;\n" +
    "            }\n" +
    "\n" +
    "            #instagram-section {\n" +
    "                flex-direction: column;\n" +
    "                height: unset;\n" +
    "            }\n" +
    "\n" +
    "            .imgs-container{\n" +
    "                width: 100% !important;\n" +
    "            }\n" +
    "\n" +
    "            #instagram-section .img-container{\n" +
    "                min-height: 300px\n" +
    "            }\n" +
    "        }\n" +
    "\n" +
    "        @media screen and (max-width: 720px) and (min-width: 360px){\n" +
    "\n" +
    "            h1{\n" +
    "                font-size: 2.5rem;\n" +
    "            }\n" +
    "\n" +
    "            h2 {\n" +
    "                font-size: 1.7rem;\n" +
    "            }\n" +
    "\n" +
    "            .desktop {\n" +
    "                display: none;\n" +
    "            }\n" +
    "\n" +
    "            .mobile {\n" +
    "                display: flex;\n" +
    "            }\n" +
    "\n" +
    "            #navbar-mobile{\n" +
    "                position: fixed;\n" +
    "                z-index: 999;\n" +
    "                top: 0;\n" +
    "                left: 0;\n" +
    "                width: 100vw;\n" +
    "                align-items: center;\n" +
    "                justify-content: space-between;\n" +
    "                padding:20px;\n" +
    "            }\n" +
    "\n" +
    "            #navbar-mobile .logo {\n" +
    "                width: 50px;\n" +
    "                height: 50px;\n" +
    "                border-radius: 50%;\n" +
    "                background: grey;\n" +
    "            }\n" +
    "\n" +
    "            #navbar-mobile .burger-menu{\n" +
    "                position: relative;\n" +
    "                width: 50px;\n" +
    "                height: 50px;\n" +
    "                cursor: pointer\n" +
    "            }\n" +
    "\n" +
    "            #navbar-mobile .burger-menu::after{\n" +
    "                content: '';\n" +
    "                position: absolute;\n" +
    "                top: 30%;\n" +
    "                left: 0;\n" +
    "                width: 100%;\n" +
    "                height: 3px;\n" +
    "                background: #3a5a40;\n" +
    "                border-radius: 10px\n" +
    "            }\n" +
    "\n" +
    "            #navbar-mobile .burger-menu::before{\n" +
    "                content: '';\n" +
    "                position: absolute;\n" +
    "                bottom: 30%;\n" +
    "                left: 0;\n" +
    "                width: 100%;\n" +
    "                height: 3px;\n" +
    "                background: #3a5a40;\n" +
    "                border-radius: 10px\n" +
    "            }\n" +
    "\n" +
    "            #navbar-mobile .onglet-container {\n" +
    "                position: fixed;\n" +
    "                z-index: 999;\n" +
    "                width: 60%;\n" +
    "                height: 100vh;\n" +
    "                background: white;\n" +
    "                top: 0;\n" +
    "                right: 0;\n" +
    "                padding: 100px 50px;\n" +
    "                display: flex;\n" +
    "                flex-direction: column;\n" +
    "                align-items: flex-start;\n" +
    "                gap: 30px;\n" +
    "                transform: translateX(200%);\n" +
    "                transition: transform 0.3s;\n" +
    "            }\n" +
    "\n" +
    "            .onglet-container-active {\n" +
    "                transform: translateX(0) !important;\n" +
    "            }\n" +
    "\n" +
    "            #navbar-mobile .onglet-container::before{\n" +
    "                content: '';\n" +
    "                position: absolute;\n" +
    "                top: 0;\n" +
    "                left: -70%;\n" +
    "                width: 70%;\n" +
    "                height: 100%;\n" +
    "                z-index: -1;\n" +
    "                background: rgba(0, 0, 0, .2);\n" +
    "            }\n" +
    "\n" +
    "            #navbar-mobile .onglet-container::after{\n" +
    "                content: '';\n" +
    "                position: absolute;\n" +
    "                top: 0;\n" +
    "                right: 0;\n" +
    "                width: 100%;\n" +
    "                height: 100%;\n" +
    "                z-index: -1;\n" +
    "                background: #ABF08C52;\n" +
    "            }\n" +
    "\n" +
    "            #navbar-mobile .onglet{\n" +
    "                font-size: 1.2rem;\n" +
    "            }\n" +
    "\n" +
    "            #navbar-mobile .contact-button {\n" +
    "                padding: 10px 15px;\n" +
    "                border-radius: 30px;\n" +
    "                border: 1px solid #3a5a40;\n" +
    "                background: transparent;\n" +
    "                transition: all .2s;\n" +
    "                font-size: .8rem;\n" +
    "                color: #3a5a40;\n" +
    "                margin-top: -10px;\n" +
    "                margin-left: -15px;\n" +
    "            }\n" +
    "\n" +
    "            #navbar-mobile .contact-button:hover{\n" +
    "                background: seagreen;\n" +
    "                color: white;\n" +
    "                scale: 1.1;\n" +
    "                border: 1px solid seagreen;\n" +
    "            }\n" +
    "\n" +
    "            .cross {\n" +
    "                position: absolute;\n" +
    "                width: 50px;\n" +
    "                height: 50px;\n" +
    "                top: 20px;\n" +
    "                right: 20px;\n" +
    "            }\n" +
    "\n" +
    "            .cross::after{\n" +
    "                content: \"\";\n" +
    "                position: absolute;\n" +
    "                width: 100%;\n" +
    "                height: 3px;\n" +
    "                background: #3a5a40;\n" +
    "                transform: rotate(45deg);\n" +
    "                top: 50%;\n" +
    "                left: 0;\n" +
    "                border-radius: 10px;\n" +
    "\n" +
    "            }\n" +
    "\n" +
    "            .cross::before{\n" +
    "                content: \"\";\n" +
    "                position: absolute;\n" +
    "                width: 100%;\n" +
    "                height: 3px;\n" +
    "                background: #3a5a40;\n" +
    "                transform: rotate(135deg);\n" +
    "                top: 50%;\n" +
    "                left: 0;\n" +
    "                border-radius: 10px;\n" +
    "            }\n" +
    "\n" +
    "            #header{\n" +
    "                padding-left: 20px;\n" +
    "            }\n" +
    "\n" +
    "            .header-image{\n" +
    "                height:50%;\n" +
    "                width: 100%;\n" +
    "                background-position: bottom;\n" +
    "                bottom: 5%;\n" +
    "                top: unset;\n" +
    "                left: 50%;\n" +
    "                transform: translateX(200%) translateY(0);\n" +
    "            }\n" +
    "\n" +
    "            .header-image-animation{\n" +
    "                animation: responcive-header-right-animation 1s forwards;\n" +
    "                animation-delay: 1s;\n" +
    "            }\n" +
    "\n" +
    "            .header-text-information{\n" +
    "                width: 100%;\n" +
    "                height: 50%;\n" +
    "                align-items: flex-start;\n" +
    "                padding-left: 0;\n" +
    "                padding-right: 20px;\n" +
    "                padding-top: 30%;\n" +
    "                justify-content: flex-start;\n" +
    "                transform: translateX(200%);\n" +
    "            }\n" +
    "\n" +
    "            .header-button-container{\n" +
    "                display: none;\n" +
    "            }\n" +
    "\n" +
    "            .end-header {\n" +
    "                padding-top: 50px;\n" +
    "                gap: 40px;\n" +
    "                flex-direction: column;\n" +
    "            }\n" +
    "\n" +
    "            .end-header .section-items h4{\n" +
    "                font-size: .9rem;\n" +
    "            }\n" +
    "\n" +
    "            .end-header .section-items {\n" +
    "                width: 200px;\n" +
    "                height: unset;\n" +
    "            }\n" +
    "\n" +
    "            .end-header .section-items:nth-child(1){\n" +
    "                margin-right: auto;\n" +
    "            }\n" +
    "\n" +
    "            .end-header .section-items:nth-child(3){\n" +
    "                margin-left: auto;\n" +
    "            }\n" +
    "\n" +
    "            .first-section-container {\n" +
    "                margin-top: 10px;\n" +
    "                overflow-x: scroll;\n" +
    "                padding-top: 50px;\n" +
    "                gap: 20px;\n" +
    "            }\n" +
    "\n" +
    "            .first-section-container .all {\n" +
    "                top: 0px;\n" +
    "                left: 0;\n" +
    "                right: unset;\n" +
    "            }\n" +
    "\n" +
    "            .first-section-item{\n" +
    "                width: calc(100vw - 150px);\n" +
    "            }\n" +
    "\n" +
    "            #second-section{\n" +
    "                padding: 50px 30px;\n" +
    "            }\n" +
    "\n" +
    "            .second-section-1-container{\n" +
    "                flex-direction: column;\n" +
    "                gap: 50px;\n" +
    "\n" +
    "            }\n" +
    "\n" +
    "            .second-section-1-container .left, .second-section-1-container .right{\n" +
    "                width: 100%;\n" +
    "                font-size: .8rem;\n" +
    "            }\n" +
    "\n" +
    "            .second-section-1-container .right{\n" +
    "                padding: 15px;\n" +
    "            }\n" +
    "\n" +
    "            .second-section-1-container .right .top, .second-section-1-container .right .bottom {\n" +
    "                display: flex;\n" +
    "                align-items: center;\n" +
    "            }\n" +
    "\n" +
    "            #third-section{\n" +
    "                display: flex;\n" +
    "                justify-content: center;\n" +
    "                align-items: center;\n" +
    "            }\n" +
    "\n" +
    "            #third-section .left, #third-section .right{\n" +
    "                display: none;\n" +
    "            }\n" +
    "\n" +
    "            .middle-animation {\n" +
    "                animation-delay: 0s;\n" +
    "            }\n" +
    "\n" +
    "            #instagram-section {\n" +
    "                flex-direction: column;\n" +
    "                height: unset;\n" +
    "                padding: 20px;\n" +
    "            }\n" +
    "\n" +
    "            .imgs-container{\n" +
    "                width: 100% !important;\n" +
    "            }\n" +
    "\n" +
    "            #instagram-section .img-container{\n" +
    "                min-height: 300px\n" +
    "            }\n" +
    "\n" +
    "            footer{\n" +
    "                margin-top: 20px;\n" +
    "                padding: 30px;\n" +
    "            }\n" +
    "\n" +
    "            #footer-contact{\n" +
    "                width: 100%;\n" +
    "            }\n" +
    "\n" +
    "            #footer-contact form{\n" +
    "                gap: 10px;\n" +
    "            }\n" +
    "\n" +
    "            #footer-contact form button{\n" +
    "                width: 50%;\n" +
    "            }\n" +
    "\n" +
    "        }\n" +
    "    </style>\n" +
    "\n" +
    "\n" +
    "    <title>Template</title>\n" +
    "</head>\n" +
    "<body>\n" +
    "<nav id=\"navbar-desktop\" class=\"desktop\">\n" +
    "    <span class=\"logo\"></span>\n" +
    "\n" +
    "    <ul class=\"onglet-container\">\n" +
    "        <li class=\"onglet\"><a href=\"#header\">Home</a></li>\n" +
    "        <li class=\"onglet\"><a href=\"#first-section\">Projets</a></li>\n" +
    "        <li class=\"onglet\"><a href=\"#second-section\">A Propos</a></li>\n" +
    "    </ul>\n" +
    "\n" +
    "    <a href=\"#footer-contact\" class=\"contact-button\">Nous Contacter</a>\n" +
    "\n" +
    "</nav>\n" +
    "\n" +
    "<nav id=\"navbar-mobile\" class=\"mobile\">\n" +
    "    <span class=\"logo\"></span>\n" +
    "\n" +
    "    <span class=\"burger-menu\"></span>\n" +
    "    <ul class=\"onglet-container\">\n" +
    "        <span class=\"cross\"></span>\n" +
    "\n" +
    "        <li class=\"onglet\"><a href=\"#header\">Home</a></li>\n" +
    "        <li class=\"onglet\"><a href=\"#first-section\">Projets</a></li>\n" +
    "        <li class=\"onglet\"><a href=\"#second-section\">A Propos</a></li>\n" +
    "\n" +
    "        <a href=\"#footer-contact\" class=\"contact-button\">Nous Contacter</a>\n" +
    "\n" +
    "    </ul>\n" +
    "</nav>\n" +
    "\n" +
    "<header id=\"header\">\n" +
    "    <section class=\"header-image\" style=\"background-image: url(./assets/header.png)\">\n" +
    "    </section>\n" +
    "    <section class=\"header-text-information\">\n" +
    "        <h1>Touts <strong class=\"green\">actes</strong></h1>\n" +
    "        <h2>ont des <strong class=\"green\">conséquances...</strong></h2>\n" +
    "        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa eligendi eveniet, ipsam officiis ratione unde vero. Adipisci aspernatur cum illo in placeat. Ab cupiditate dolores facere ipsa quis sed voluptatem?</p>\n" +
    "\n" +
    "        <div class=\"header-button-container\">\n" +
    "            <a href=\"\" class=\"contact-button\">Nous Contacter</a>\n" +
    "            <a href=\"\" class=\"about-button\">Plus d'information</a>\n" +
    "        </div>\n" +
    "    </section>\n" +
    "</header>\n" +
    "\n" +
    "<main>\n" +
    "    <section class=\"end-header\">\n" +
    "\n" +
    "        <div class=\"section-items\">\n" +
    "            <img src=\"./assets/feuille.svg\" alt=\"\">\n" +
    "            <h4>Sensibilitée <strong class=\"green\">Ecologique</strong></h4>\n" +
    "        </div>\n" +
    "        <div class=\"section-items\">\n" +
    "            <img src=\"./assets/feuille.svg\" alt=\"\">\n" +
    "            <h4>Sensibilitée <strong class=\"green\">Ecologique</strong></h4>\n" +
    "        </div>\n" +
    "        <div class=\"section-items\">\n" +
    "            <img src=\"./assets/feuille.svg\" alt=\"\">\n" +
    "            <h4>Sensibilitée <strong class=\"green\">Ecologique</strong></h4>\n" +
    "        </div>\n" +
    "\n" +
    "    </section>\n" +
    "\n" +
    "    <section id=\"first-section\">\n" +
    "        <h2>Nos Projets</h2>\n" +
    "\n" +
    "        <div class=\"first-section-container\">\n" +
    "            <div class=\"first-section-item\">\n" +
    "                <div class=\"first-section-item-image\" style=\"background-image: url(./assets/eco1.jpg)\"></div>\n" +
    "                <h4 class=\"first-section-item-title\">Jardinage dans un jardin public</h4>\n" +
    "                <a href=\"\" class=\"more-information\">Plus d'information</a>\n" +
    "            </div>\n" +
    "            <div class=\"first-section-item\">\n" +
    "                <div class=\"first-section-item-image\" style=\"background-image: url(./assets/eco1.jpg)\"></div>\n" +
    "                <h4 class=\"first-section-item-title\">Jardinage dans un jardin public</h4>\n" +
    "                <a href=\"\" class=\"more-information\">Plus d'information</a>\n" +
    "            </div>\n" +
    "            <div class=\"first-section-item\">\n" +
    "                <div class=\"first-section-item-image\" style=\"background-image: url(./assets/eco1.jpg)\"></div>\n" +
    "                <h4 class=\"first-section-item-title\">Jardinage dans un jardin public</h4>\n" +
    "                <a href=\"\" class=\"more-information\">Plus d'information</a>\n" +
    "            </div>\n" +
    "\n" +
    "\n" +
    "            <a href=\"\" class=\"all\">Voir tous les projets -></a>\n" +
    "        </div>\n" +
    "    </section>\n" +
    "\n" +
    "    <section id=\"second-section\">\n" +
    "        <h2>Qui sommes nous ?</h2>\n" +
    "\n" +
    "        <section class=\"second-section-1-container\">\n" +
    "            <div class=\"left\">\n" +
    "                <h3>Nos <span class=\"green\">Valeurs</span></h3>\n" +
    "                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium blanditiis culpa debitis dignissimos fugiat officiis, repellendus repudiandae sequi. Alias architecto at dolore dolorem eligendi eos harum inventore odio repellendus repudiandae?</p>\n" +
    "            </div>\n" +
    "            <div class=\"right\">\n" +
    "                <div class=\"top\">\n" +
    "                    <div class=\"second-section-1-item\">\n" +
    "                        <span><img src=\"\" alt=\"\"> <strong class=\"green\">Trust</strong></span>\n" +
    "                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at cum</p>\n" +
    "                    </div>\n" +
    "                    <div class=\"second-section-1-item\" style=\"border-left: 1px solid grey; padding-left: 20px; border-top-left-radius: 0; border-bottom-left-radius: 0\">\n" +
    "                    <span><img src=\"\" alt=\"\"> <strong class=\"green\">Trust</strong></span>\n" +
    "                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at cum</p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"bottom\">\n" +
    "                    <div class=\"second-section-1-item\">\n" +
    "                        <span><img src=\"\" alt=\"\"> <strong class=\"green\">Trust</strong></span>\n" +
    "                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at cum</p>\n" +
    "                    </div>\n" +
    "                    <div class=\"second-section-1-item\" style=\"border-left: 1px solid grey; padding-left: 20px; border-top-left-radius: 0; border-bottom-left-radius: 0\">\n" +
    "                        <span><img src=\"\" alt=\"\"> <strong class=\"green\">Trust</strong></span>\n" +
    "                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at cum</p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </section>\n" +
    "    </section>\n" +
    "\n" +
    "\n" +
    "    <section id=\"third-section\">\n" +
    "        <div class=\"left\">\n" +
    "            <div class=\"little-image-container\">\n" +
    "                <img src=\"./assets/Design.jpg\" alt=\"\">\n" +
    "            </div>\n" +
    "            <div class=\"little-image-container\">\n" +
    "                <img src=\"./assets/developeur.jpg\" alt=\"\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"middle\">\n" +
    "            <div class=\"img-container\">\n" +
    "                <img src=\"./assets/CEO.jpg\" alt=\"\">\n" +
    "            </div>\n" +
    "            <h3>John Doe</h3>\n" +
    "            <h4>CEO</h4>\n" +
    "            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam architecto cupiditate, delectus deserunt dolorem fuga, nemo non nostrum provident quas quisquam quo repellat repudiandae rerum, sunt ullam unde voluptatum!</p>\n" +
    "            <a href=\"mailto:CEO@gmail.com\" class=\"contact-member\">Me Contacter</a>\n" +
    "        </div>\n" +
    "        <div class=\"right\">\n" +
    "            <div class=\"little-image-container\">\n" +
    "                <img src=\"./assets/CM.jpg\" alt=\"\">\n" +
    "            </div>\n" +
    "            <div class=\"little-image-container\">\n" +
    "                <img src=\"./assets/Chef-Projet.jpg\" alt=\"\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"arrows-container\">\n" +
    "            <span class=\"arrow-left\"></span>\n" +
    "            <span class=\"arrow-right\"></span>\n" +
    "        </div>\n" +
    "    </section>\n" +
    "\n" +
    "    <section id=\"instagram-section\">\n" +
    "        <div class=\"img-container\">\n" +
    "            <img src=\"\" alt=\"\">\n" +
    "        </div>\n" +
    "        <div class=\"imgs-container\">\n" +
    "            <div class=\"img-container\">\n" +
    "                <img src=\"\" alt=\"\">\n" +
    "            </div>\n" +
    "            <div class=\"img-container\">\n" +
    "                <img src=\"\" alt=\"\">\n" +
    "            </div>\n" +
    "            <div class=\"img-container\">\n" +
    "                <img src=\"\" alt=\"\">\n" +
    "            </div>\n" +
    "            <div class=\"img-container\">\n" +
    "                <img src=\"\" alt=\"\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </section>\n" +
    "</main>\n" +
    "\n" +
    "<div id=\"instagram-posts\"></div>\n" +
    "\n" +
    "<footer>\n" +
    "    <section id=\"footer-contact\">\n" +
    "        <h3>Pour nous contacter:</h3>\n" +
    "        <p class=\"validation\" style=\"margin-top: -00px\"></p>\n" +
    "        <form action=\"#\">\n" +
    "            <label class=\"label-email\" for=\"email\">\n" +
    "                <input type=\"text\" id=\"email\" placeholder=\"exemple@exemple.exemple\">\n" +
    "            </label>\n" +
    "            <label class=\"label-text\" for=\"text\">\n" +
    "                <textarea id=\"text\" placeholder=\"exemple@exemple.exemple\"></textarea>\n" +
    "            </label>\n" +
    "            <button class=\"button-form\" type=\"submit\">Continuer</button>\n" +
    "        </form>\n" +
    "    </section>\n" +
    "\n" +
    "    <p style=\"text-align: center;\">© Developed by Devlowave</p>\n" +
    "</footer>\n" +
    "\n" +
    "<script>\n" +
    "    window.addEventListener('scroll', () => {\n" +
    "        let time = 0\n" +
    "\n" +
    "        if (scrollY >= 83 && scrollY <= 800){\n" +
    "            document.querySelector(\".end-header\").querySelectorAll('.section-items').forEach(item => {\n" +
    "                setTimeout(() => {\n" +
    "                    item.classList.add('end-header-animation')\n" +
    "                }, time)\n" +
    "\n" +
    "                time+=200\n" +
    "            })\n" +
    "\n" +
    "        }else if(scrollY >= 1100 && scrollY <= 1900) {\n" +
    "            document.querySelectorAll(\".second-section-1-item\").forEach(item => {\n" +
    "                setTimeout(() => {\n" +
    "                    item.classList.add('second-section-item-animation')\n" +
    "                }, time)\n" +
    "\n" +
    "                time += 300\n" +
    "            })\n" +
    "\n" +
    "            if (scrollY >= 1200 && scrollY <= 1700){\n" +
    "                document.querySelector('.second-section-1-container').querySelector('.left').querySelector('h3').classList.add('second-section-h3-animation')\n" +
    "            }\n" +
    "\n" +
    "        }else if (scrollY >= 1800 && scrollY <= 2550){\n" +
    "            document.querySelectorAll('.little-image-container').forEach(item => {\n" +
    "                item.classList.add('little-image-container-animation')\n" +
    "            })\n" +
    "            document.querySelector('.middle').classList.add('middle-animation')\n" +
    "\n" +
    "            if (scrollY >= 2000){\n" +
    "                document.querySelector('.arrow-left').classList.add('arrow-left-animation')\n" +
    "                document.querySelector('.arrow-right').classList.add('arrow-right-animation')\n" +
    "            }\n" +
    "        }else if(scrollY >= 2400 && scrollY <= 2700){\n" +
    "            document.querySelector('#instagram-section').querySelector('.img-container').classList.add('instagram-img-container')\n" +
    "            document.querySelector('#instagram-section').querySelector('.imgs-container').querySelectorAll('.img-container').forEach(item => {\n" +
    "                item.classList.add('instagram-img-container')\n" +
    "            })\n" +
    "        }\n" +
    "    })\n" +
    "\n" +
    "    window.addEventListener('load', () => {\n" +
    "        document.querySelector(\"#navbar-desktop\")?.classList.add('navbar-animation')\n" +
    "        document.querySelector(\"#navbar-mobile\")?.classList.add('navbar-animation')\n" +
    "        document.querySelector(\".header-image\").classList.add('header-image-animation')\n" +
    "        document.querySelector(\".header-text-information\").classList.add('header-text-animation')\n" +
    "    })\n" +
    "\n" +
    "    // Responcive menu\n" +
    "\n" +
    "    const burger = document.querySelector(\"#navbar-mobile\").querySelector('.burger-menu')\n" +
    "    const cross = document.querySelector('.cross')\n" +
    "\n" +
    "    burger.addEventListener('click', () => {\n" +
    "        document.querySelector('#navbar-mobile').querySelector('.onglet-container').classList.add('onglet-container-active')\n" +
    "    })\n" +
    "\n" +
    "    cross.addEventListener('click', () => {\n" +
    "        document.querySelector('#navbar-mobile').querySelector('.onglet-container').classList.remove('onglet-container-active')\n" +
    "    })\n" +
    "\n" +
    "\n" +
    "\n" +
    "    const users = [\n" +
    "        {\n" +
    "            id: 0,\n" +
    "            name: 'John Doe',\n" +
    "            image: \"./assets/Chef-Projet.jpg\",\n" +
    "            proffession: 'Chef de projets',\n" +
    "            description: 'lroem ipsum',\n" +
    "            contact: 'CP@gmail.com'\n" +
    "        },\n" +
    "        {\n" +
    "            id: 1,\n" +
    "            name: 'John Doe',\n" +
    "            image: \"./assets/CM.jpg\",\n" +
    "            proffession: 'Community Manager',\n" +
    "            description: 'lroem',\n" +
    "            contact: 'test@gmail.com'\n" +
    "        },\n" +
    "        {\n" +
    "            id: 2,\n" +
    "            name: 'John Doe',\n" +
    "            image: \"./assets/CEO.jpg\",\n" +
    "            proffession: 'CEO',\n" +
    "            description: 'lroem',\n" +
    "            contact: 'CEO@gmail.com'\n" +
    "        },\n" +
    "        {\n" +
    "            id: 3,\n" +
    "            name: 'John Doe',\n" +
    "            image: \"./assets/developeur.jpg\",\n" +
    "            proffession: 'Developpeur',\n" +
    "            description: 'lroem',\n" +
    "            contact: 'dev@gmail.com'\n" +
    "        },\n" +
    "        {\n" +
    "            id: 4,\n" +
    "            name: 'John Doe',\n" +
    "            image: \"./assets/Design.jpg\",\n" +
    "            proffession: 'Designeuse',\n" +
    "            description: 'lroem',\n" +
    "            contact: 'Design@gmail.com'\n" +
    "        },\n" +
    "    ]\n" +
    "\n" +
    "\n" +
    "    const leftarrow = document.querySelector('.arrow-left')\n" +
    "    const rightarrow = document.querySelector('.arrow-right')\n" +
    "\n" +
    "    leftarrow.addEventListener('click', () => {\n" +
    "        for (let i = 0; i < users.length; i++) {\n" +
    "            const user = users[i]\n" +
    "\n" +
    "            if (user.id === 4){\n" +
    "                user.id = 0\n" +
    "            }else {\n" +
    "                user.id ++\n" +
    "            }\n" +
    "\n" +
    "            if (user.id !== 2){\n" +
    "                changeImages(user, user.id)\n" +
    "            }else{\n" +
    "                changeUser(user, user.id)\n" +
    "            }\n" +
    "        }\n" +
    "    })\n" +
    "\n" +
    "    rightarrow.addEventListener('click', () => {\n" +
    "        for (let i = 0; i < users.length; i++) {\n" +
    "            const user = users[i]\n" +
    "\n" +
    "            if (user.id === 0){\n" +
    "                user.id = 4\n" +
    "            }else {\n" +
    "                user.id --\n" +
    "            }\n" +
    "\n" +
    "            if (user.id !== 2){\n" +
    "                changeImages(user, user.id)\n" +
    "            }else{\n" +
    "                changeUser(user, user.id)\n" +
    "            }\n" +
    "        }\n" +
    "    })\n" +
    "\n" +
    "\n" +
    "    const all = [\n" +
    "        {\n" +
    "            id: 0,\n" +
    "            element: document.querySelector('#third-section').querySelector('.right').querySelectorAll('.little-image-container')[1].querySelector('img'),\n" +
    "        },\n" +
    "        {\n" +
    "            id: 1,\n" +
    "            element: document.querySelector('#third-section').querySelector('.right').querySelectorAll('.little-image-container')[0].querySelector('img'),\n" +
    "        },\n" +
    "        {\n" +
    "            id: 2,\n" +
    "            element: document.querySelector('#third-section').querySelector('.middle'),\n" +
    "        },\n" +
    "        {\n" +
    "            id: 3,\n" +
    "            element: document.querySelector('#third-section').querySelector('.left').querySelectorAll('.little-image-container')[0].querySelector('img'),\n" +
    "        },\n" +
    "        {\n" +
    "            id: 4,\n" +
    "            element: document.querySelector('#third-section').querySelector('.left').querySelectorAll('.little-image-container')[1].querySelector('img'),\n" +
    "        },\n" +
    "    ]\n" +
    "\n" +
    "    function changeImages(user, id){\n" +
    "\n" +
    "        console.log(user, all[id])\n" +
    "\n" +
    "        all[id].element.src = user.image\n" +
    "\n" +
    "    }\n" +
    "\n" +
    "    function changeUser(user, id){\n" +
    "        const thirdElement = all[id].element\n" +
    "\n" +
    "        thirdElement.querySelector('.img-container').querySelector('img').src = user.image\n" +
    "        thirdElement.querySelector('h3').innerText = user.name\n" +
    "        thirdElement.querySelector('h4').innerText = user.proffession\n" +
    "        thirdElement.querySelector('p').innerText = user.description\n" +
    "        thirdElement.querySelector('a').href = `mailto:${user.contact}`\n" +
    "    }\n" +
    "\n" +
    "    // Footer contact\n" +
    "\n" +
    "    const form = document.querySelector('form')\n" +
    "    const email = document.querySelector('#email')\n" +
    "    const message = document.querySelector('#text')\n" +
    "    const labelEmail = document.querySelector('.label-email')\n" +
    "    const labelMessage = document.querySelector('.label-text')\n" +
    "    const button = document.querySelector('.button-form')\n" +
    "    let userEmail =''\n" +
    "    let isPass = false\n" +
    "\n" +
    "    console.log(message)\n" +
    "\n" +
    "    form.addEventListener('submit', (e) => {\n" +
    "        e.preventDefault()\n" +
    "\n" +
    "        if (isPass){\n" +
    "            if (message.value === ''){\n" +
    "                return\n" +
    "            }else{\n" +
    "                console.log(message.value)\n" +
    "                window.location.href = `mailto:${userEmail}?subject=${encodeURIComponent('Message provenant du site.')}&body=${encodeURIComponent(message.value)}`\n" +
    "            }\n" +
    "        }\n" +
    "\n" +
    "        if (email.value === ''){\n" +
    "            return\n" +
    "        }else{\n" +
    "            userEmail = email.value\n" +
    "\n" +
    "            labelEmail.style.display = \"none\"\n" +
    "            labelMessage.style.display = \"block\"\n" +
    "            button.innerText = 'Envoyer !'\n" +
    "            isPass = true\n" +
    "\n" +
    "            if(window.innerWidth <= 720){\n" +
    "                form.style.flexDirection = 'column'\n" +
    "                button.style.width = '100%'\n" +
    "                message.style.minHeight = '300px'\n" +
    "            }\n" +
    "        }\n" +
    "\n" +
    "    })\n" +
    "</script>\n" +
    "</body>\n" +
    "</html>"