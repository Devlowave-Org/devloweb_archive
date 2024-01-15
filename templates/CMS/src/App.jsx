import React from "react";
import JSZip from "jszip";
import Template from "./Page/TemplateForCms.jsx";
import {saveAs} from 'file-saver'
import {GetState} from "./Data/dataSite.js";
import TemplateRender from "./Page/TemplateRender.jsx";
import {siteHTML} from "./tools/SiteHTML.js";

function App() {
    const {img, text, setText, setImg, members, setMembers, links, setLinks} = GetState()
    const [render, setRender] = React.useState( JSON.parse(sessionStorage.getItem('render')) ? JSON.parse(sessionStorage.getItem('render')) : false)
    let newImg = img
    let newMembers = members

    function handleRender(){
        setRender(prev => !prev)
        const render2 = !render
        sessionStorage.setItem('render', JSON.stringify(render2))
    }

    async function addFileToZip(zip, zipPath, localPath) {
        const response = await fetch(localPath);
        const fileContent = await response.text();
        zip.file(zipPath, fileContent);
    }

    async function downloadSite() {
        let numberImage = 1
        const zip = new JSZip();


        for (let key of Object.keys(img)) {
            const responce = await fetch(img[key])
            const result = await responce.blob()
            const imageExtention = () => {
                if(result.name){
                    const imageName = result.name.split('.')
                    const imageNameLength = imageName.length
                    return imageName[imageNameLength - 1]
                }else{
                    const imageName = img[key].split('.')
                    const imageNameLength = imageName.length
                    return imageName[imageNameLength - 1]
                }
            }

            zip.file(`/assets/image${numberImage}.${imageExtention()}`, result)
            newImg[key] = `./assets/image${numberImage}.${imageExtention()}`
            newMembers = newMembers.map(membreSelect => {
                if (membreSelect.ref === key){
                    return {...membreSelect, image: `./assets/image${numberImage}.${imageExtention()}`}
                }else{
                    return {...membreSelect}
                }
            })


            numberImage++
        }

        console.log({...newMembers})

        const HTML = siteHTML({img: {...newImg}, text, members: newMembers})

        zip.file('index.html', HTML)
        await addFileToZip(zip, "/script.js", '/src/Page/Template/script.js')

        zip.generateAsync({type: 'blob'}).then(blob => saveAs(blob, 'site.zip'))

    }

    return (
        <>
            {
                render ?
                    <TemplateRender text={text} img={img} members={members} links={links}/>
                    :
                    <Template text={text} img={img} setText={setText} setImg={setImg} members={members} setMembers={setMembers} links={links} setLinks={setLinks}/>
            }
            <input type="file"
                   onChange={(e) => setImg(prev => ({...prev, header: URL.createObjectURL(e.target.files[0])}))}/>
            <button onClick={() => downloadSite()}>Download</button>
            <button onClick={() => handleRender()}>Render</button>
        </>
    )
}

export default App
