import React from "react";
import Template from "./Page/Template/TemplatePage.jsx";

function App() {
    const [text, setText] = React.useState({
        premier: 'test1'
    })
    const [img, setImg] = React.useState({
        header: '/vite.svg'
    })
    
    return (
        <>
            <Template text={text} img={img}/>
            <input type="file" onChange={(e) => setImg(prev => ({...prev, header: URL.createObjectURL(e.target.files[0])}))}/>
        </>
    )
}

export default App
