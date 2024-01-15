import './Template/style-without-animation.css'
import "../Style/style.css"
import changeText from "../tools/changeText.jsx";
import changeImage from "../tools/changeImg.jsx";
import React from "react";
import changeLink from "../tools/changeLink.jsx";

export default function Template({img, text, setText, setImg, members, setMembers, links, setLinks}) {

    function autoResize() {
        document.querySelectorAll('.auto-resize-textarea').forEach(textareaSelect => {
            textareaSelect.style.height = 'auto';
            textareaSelect.style.height = (textareaSelect.scrollHeight + 2) + 'px';
        })
    }

    function getLetterWidth(letter, font) {
        const measurer = document.getElementById('hidden-measurer');
        measurer.style.font = font;
        measurer.textContent = letter;
        return measurer.offsetWidth;
    }

    function autoResizeInput(type) {
        let fontSize = 0

        switch (type){

            case 'h3':
                fontSize = 5
                break

            case 'h4':
                fontSize = 20
                break

            default:
                break
        }

        document.querySelectorAll('.nav').forEach(navElement => {
            const font = window.getComputedStyle(navElement).font
            const letterWidth = getLetterWidth('A', font)
            navElement.style.width = (navElement.value.length * letterWidth + 10 + fontSize) + 'px';
        })
    }

    function addMemberFile(e, key){
        setImg(prev => ({...prev, [key]:  URL.createObjectURL(e.target.files[0])}))
        setMembers(prev => prev.map(memberSelect => memberSelect.id === 2 ? {
            ...memberSelect,
            image: URL.createObjectURL(e.target.files[0])
        } : {...memberSelect}))
    }

    function nextMember() {
        setMembers(prev => (
            prev.map(memberSelect => {
                if (memberSelect.id === 4) {
                    return { ...memberSelect, id: 0 };
                } else {
                    return { ...memberSelect, id: memberSelect.id + 1 };
                }
            })
        ));
    }

    function prevMember() {
        setMembers(prev => (
            prev.map(memberSelect => {
                if (memberSelect.id === 0) {
                    return { ...memberSelect, id: 4 };
                } else {
                    return { ...memberSelect, id: memberSelect.id - 1 };
                }
            })
        ));
    }


    React.useEffect(() => {
        autoResize()
        autoResizeInput()

    }, [])

    return (
        <>
            <div id="hidden-measurer" style={{position: 'absolute', visibility: 'hidden', whiteSpace: 'nowrap'}}></div>

            <nav id="navbar-desktop" className="desktop">
                <span className="logo"></span>

                <ul className="onglet-container">
                    <li className="onglet"><input type="text" value={text.nav1} onInput={() => autoResizeInput()}
                                                  onChange={(e) => changeText(e, "nav1", setText)} className="nav"/>
                    </li>
                    <li className="onglet"><input type="text" value={text.nav2} onInput={() => autoResizeInput()}
                                                  onChange={(e) => changeText(e, "nav2", setText)} className="nav"/>
                    </li>
                    <li className="onglet"><input type="text" value={text.nav3} onInput={() => autoResizeInput()}
                                                  onChange={(e) => changeText(e, "nav3", setText)} className="nav"/>
                    </li>
                </ul>

                <a href="#footer-contact" className="contact-button">Nous Contacter</a>

            </nav>
            <nav id="navbar-mobile" className="mobile">
                <span className="logo"></span>

                <span className="burger-menu"></span>
                <ul className="onglet-container">
                    <span className="cross"></span>

                    <li className="onglet"><a href="#header">{text.nav1}</a></li>
                    <li className="onglet"><a href="#first-section">{text.nav2}</a></li>
                    <li className="onglet"><a href="#second-section">{text.nav3}</a></li>

                    <a href="#footer-contact" className="contact-button">Nous Contacter</a>

                </ul>
            </nav>

            <header  id="header">
                <section className="header-image" style={{backgroundImage: `url(${img.header})`}}>
                    <div className="change-img">
                        <input type="file" id='file' onChange={(e) => changeImage(e, 'header', setImg)}/>
                        <label htmlFor="file" className='label-name header'></label>
                    </div>
                </section>
                <section className="header-text-information">
                    <input type="text" value={text.header1} onChange={(e) => changeText(e, "header1", setText)}
                           className="h1"/>
                    <input style={{marginTop: '-10px', marginBottom: '10px'}} type="text" value={text.header2}
                           onChange={(e) => changeText(e, "header2", setText)} className="h2"/>
                    <textarea onInput={() => autoResize()} value={text.header3}
                              onChange={(e) => changeText(e, "header3", setText)} className="p auto-resize-textarea"/>

                    <div className="header-button-container">
                        <a href="" className="contact-button">Nous Contacter</a>
                        <a href="" className="about-button">Plus d'information</a>
                    </div>
                </section>
            </header>

            <main>
                <section className="end-header">

                    <div className="section-items">
                        <div className="icons">
                            <img src={img.subHeader1} alt=""/>
                            <div className="change-img">
                                <input type="file" id={`file2`} onChange={(e) => changeImage(e, 'subHeader1', setImg)}/>
                                <label htmlFor={`file2`} className='label-name'></label>
                            </div>
                        </div>
                        <input type="text" value={text.subHeader1}
                               onChange={(e) => changeText(e, "subHeader1", setText)}
                               className="p" style={{textAlign: 'center'}}/>
                    </div>
                    <div className="section-items">
                        <div className="icons">
                            <img src={img.subHeader2} alt=""/>
                            <div className="change-img">
                                <input type="file" id={`file3`} onChange={(e) => changeImage(e, 'subHeader2', setImg)}/>
                                <label htmlFor={`file3`} className='label-name'></label>
                            </div>
                        </div>
                        <input type="text" value={text.subHeader2}
                               onChange={(e) => changeText(e, "subHeader2", setText)}
                               className="p" style={{textAlign: 'center'}}/>
                    </div>
                    <div className="section-items">
                        <div className="icons">
                            <img src={img.subHeader3} alt=""/>
                            <div className="change-img">
                                <input type="file" id={`file4`}
                                       onChange={(e) => changeImage(e, 'subHeader3', setImg)}/>
                                <label htmlFor={`file4`} className='label-name'></label>
                            </div>
                        </div>
                        <input type="text" value={text.subHeader3}
                               onChange={(e) => changeText(e, "subHeader3", setText)}
                               className="p" style={{textAlign: 'center'}}/>
                    </div>

                </section>

                <section id="first-section">
                    <input type="text" value={text.projetTitle} onChange={(e) => changeText(e, "projetTitle", setText)}
                           className="h2"/>

                    <div className="first-section-container">
                        <div className="first-section-item">
                            <div className="first-section-item-image" style={{backgroundImage: `url(${img.projet1})`}}>
                                <div className="change-img">
                                    <input type="file" id={`file5`}
                                           onChange={(e) => changeImage(e, 'projet1', setImg)}/>
                                    <label htmlFor={`file5`} className='label-name header'></label>
                                </div>
                            </div>
                            <input type="text" value={text.projet1} onChange={(e) => changeText(e, "projet1", setText)}
                                   className="h4"/>
                            <a href={`//${links.project1}`} className="more-information">Plus d'information</a>
                            <input type="text" value={links.project1}
                                   onChange={(e) => changeLink(e, 'project1', setLinks)}/>
                        </div>
                        <div className="first-section-item">
                            <div className="first-section-item-image" style={{backgroundImage: `url(${img.projet2})`}}>
                                <div className="change-img">
                                    <input type="file" id={`file6`}
                                           onChange={(e) => changeImage(e, 'projet2', setImg)}/>
                                    <label htmlFor={`file6`} className='label-name header'></label>
                                </div>
                            </div>
                            <input type="text" value={text.projet2} onChange={(e) => changeText(e, "projet2", setText)}
                                   className="h4"/>
                            <a href={`//${links.project2}`} className="more-information">Plus d'information</a>
                            <input type="text" value={links.project2}
                                   onChange={(e) => changeLink(e, 'project2', setLinks)}/>
                        </div>
                        <div className="first-section-item">
                            <div className="first-section-item-image" style={{backgroundImage: `url(${img.projet3})`}}>
                                <div className="change-img">
                                    <input type="file" id={`file7`}
                                           onChange={(e) => changeImage(e, 'projet3', setImg)}/>
                                    <label htmlFor={`file7`} className='label-name header'></label>
                                </div>
                            </div>
                            <input type="text" value={text.projet3} onChange={(e) => changeText(e, "projet3", setText)}
                                   className="h4"/>
                            <a href={`//${links.project3}`} className="more-information"><span>Plus d'information</span></a>

                            <input type="text" value={links.project3}
                                   onChange={(e) => changeLink(e, 'project3', setLinks)}/>
                        </div>


                        <div className="link-input">
                            <a href={`//${links.linkAllProject}`} className="all">Voir tous les projets {`->`}</a>
                            <input type="text" value={links.linkAllProject}
                                   onChange={(e) => changeLink(e, 'linkAllProject', setLinks)}/>
                        </div>
                    </div>
                </section>

                <section id="second-section">
                    <input type="text" value={text.aboutTitle} onChange={(e) => changeText(e, "aboutTitle", setText)}
                           className="h2"/>

                    <section className="second-section-1-container">
                    <div className="left">
                            <input type="text" value={text.sectionAbout1Title}
                                   onChange={(e) => changeText(e, "sectionAbout1Title", setText)} className="h3"/>
                            <input type="text" value={text.sectionAbout1Text}
                                   onChange={(e) => changeText(e, "sectionAbout1Text", setText)} className="p"/>
                        </div>
                        <div className="right">
                            <div className="top">
                                <div className="second-section-1-item">
                                    <span>
                                        <div className="icons">
                                            <img src={img.about1} alt=""/>
                                            <div className="change-img">
                                                <input type="file" id={`file8`}
                                                       onChange={(e) => changeImage(e, 'about1', setImg)}/>
                                                <label htmlFor={`file8`} className='label-name'></label>
                                            </div>
                                        </div>

                                        <input type="text" value={text.sectionAbout2Title_1}
                                               onChange={(e) => changeText(e, "sectionAbout2Title_1", setText)}
                                               className="strong"/></span>
                                    <input type="text" value={text.sectionAbout2Text_1}
                                           onChange={(e) => changeText(e, "sectionAbout2Text_1", setText)}
                                           className="p"/>
                                </div>
                                <div className="second-section-1-item" style={{
                                    borderLeft: "1px solid grey",
                                    paddingLeft: "20px",
                                    borderTopLeftRadius: "0",
                                    borderBottomLeftRadius: "0"
                                }}>
                                    <span>
                                        <div className="icons">
                                            <img src={img.about2} alt=""/>
                                            <div className="change-img">
                                                <input type="file" id={`file9`}
                                                       onChange={(e) => changeImage(e, 'about2', setImg)}/>
                                                <label htmlFor={`file9`} className='label-name'></label>
                                            </div>
                                        </div>

                                        <input type="text" value={text.sectionAbout2Title_2}
                                               onChange={(e) => changeText(e, "sectionAbout2Title_2", setText)}
                                               className="strong"/></span>
                                    <input type="text" value={text.sectionAbout2Text_2}
                                           onChange={(e) => changeText(e, "sectionAbout2Text_2", setText)}
                                           className="p"/>
                                </div>
                            </div>
                            <div className="bottom">
                                <div className="second-section-1-item" style={{
                                    paddingLeft: "20px",
                                    borderTopLeftRadius: "0",
                                    borderBottomLeftRadius: "0"
                                }}>
                                    <span>
                                        <div className="icons">
                                            <img src={img.about3} alt=""/>
                                            <div className="change-img">
                                                <input type="file" id={`file10`}
                                                       onChange={(e) => changeImage(e, 'about3', setImg)}/>
                                                <label htmlFor={`file10`} className='label-name'></label>
                                            </div>
                                        </div>
                                        <input type="text" value={text.sectionAbout2Title_3}
                                               onChange={(e) => changeText(e, "sectionAbout2Title_3", setText)}
                                               className="strong"/></span>
                                    <input type="text" value={text.sectionAbout2Text_3}
                                           onChange={(e) => changeText(e, "sectionAbout2Text_3", setText)}
                                           className="p"/>
                                </div>
                                <div className="second-section-1-item" style={{
                                    borderLeft: "1px solid grey",
                                    paddingLeft: "20px", borderTopLeftRadius: "0", borderBottomLeftRadius: "0"
                                }}>
                                    <span>
                                        <div className="icons">
                                            <img src={img.about4} alt=""/>
                                            <div className="change-img">
                                                <input type="file" id={`file11`}
                                                       onChange={(e) => changeImage(e, 'about4', setImg)}/>
                                                <label htmlFor={`file11`} className='label-name'></label>
                                            </div>
                                        </div>

                                        <input type="text" value={text.sectionAbout2Title_4}
                                               onChange={(e) => changeText(e, "sectionAbout2Title_4", setText)}
                                               className="strong"/></span>
                                    <input type="text" value={text.sectionAbout2Text_4}
                                           onChange={(e) => changeText(e, "sectionAbout2Text_4", setText)}
                                           className="p"/>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>


                <section id="third-section">
                    <div className="left">
                        <div className="little-image-container">
                            <img src={members.filter(memberSelect => memberSelect.id === 3)[0].image} alt=""/>
                        </div>
                        <div className="little-image-container">
                            <img src={members.filter(member => member.id === 4)[0].image} alt=""/>
                        </div>
                    </div>
                    <div className="middle">
                        <div className="img-container">
                            <img src={members.filter(member => member.id === 2)[0].image} alt=""/>
                            <div className="change-img">
                                <input type="file" id='file12'
                                       onChange={(e) => addMemberFile(e, members.filter(member => member.id === 2)[0].ref)}/>
                                <label htmlFor="file12" className='label-name header'></label>
                            </div>
                        </div>
                        <input type="text" onInput={() => autoResizeInput('h3')} value={members.filter(member => member.id === 2)[0].name}
                               onChange={(e) => setMembers(prev => prev.map(memberSelect => memberSelect.id === 2 ? {
                                   ...memberSelect,
                                   name: e.target.value
                               } : {...memberSelect}))}
                               className="h3 nav"/>
                        <input type="text" onInput={() => autoResizeInput('h4')} value={members.filter(member => member.id === 2)[0].proffession}
                               onChange={(e) => setMembers(prev => prev.map(memberSelect => memberSelect.id === 2 ? {
                                   ...memberSelect,
                                   proffession: e.target.value
                               } : {...memberSelect}))}
                               className="h4 nav"/>
                        <textarea onInput={() => autoResize()} value={members.filter(member => member.id === 2)[0].description}
                               onChange={(e) => setMembers(prev => prev.map(memberSelect => memberSelect.id === 2 ? {
                                   ...memberSelect,
                                   description: e.target.value
                               } : {...memberSelect}))}
                               className="p auto-resize-textarea"/>
                        <a href={`mailto:${members.filter(member => member.id === 2)[0].contact}`}
                           className="contact-member">Me Contacter</a>
                        <input type="text" value={members.filter(member => member.id === 2)[0].contact} onChange={(e) => setMembers(prev => {
                            return prev.map(member => member.id === 2 ? {...member, contact: e.target.value} : {...member})
                        })}/>
                    </div>
                    <div className="right">
                        <div className="little-image-container">
                            <img src={members.filter(member => member.id === 1)[0].image} alt=""/>
                        </div>
                        <div className="little-image-container">
                            <img src={members.filter(member => member.id === 0)[0].image} alt=""/>
                        </div>
                    </div>

                    <div className="arrows-container">
                        <span className="arrow-left" onClick={() => prevMember()}></span>
                        <span className="arrow-right" onClick={() => nextMember()}></span>
                    </div>
                </section>

                <section id="instagram-section">
                    <div className="img-container">
                        <img src="" alt=""/>
                    </div>
                    <div className="imgs-container">
                        <div className="img-container">
                            <img src="" alt=""/>
                        </div>
                        <div className="img-container">
                            <img src="" alt=""/>
                        </div>
                        <div className="img-container">
                            <img src="" alt=""/>
                        </div>
                        <div className="img-container">
                            <img src="" alt=""/>
                        </div>
                    </div>
                </section>
            </main>

            <footer>
                <section id="footer-contact">
                    <h3>Pour nous contacter:</h3>
                    <form action="#">
                        <label className="label-email" htmlFor="email">
                            <input readOnly type="text" id="email" value="exemple@exemple.exemple"/>
                        </label>
                        <button className="button-form" type="submit">Continuer</button>
                    </form>
                </section>

                <p style={{textAlign: "center"}}>© Developed by Devlowave</p>
            </footer>
        </>
    )
}

