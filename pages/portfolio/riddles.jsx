import { useState } from "react"
import Layout from "/components/layout"
import RiddleBox from "/components/riddleBox"
import riddleData from "/data/riddles"
const riddleDataDir = "data/riddles/" // '/data/' is not found by `fs`; not certain why
const md = require("markdown-it")();
const fs = require("fs");

async function ls(path) {
    const out = []
    const dir = await fs.promises.opendir(path) // Need to 'await' if running 'fs' async
    for await (const _file of dir) {
        const _obj = {}
        _obj.name = _file.name // File name property
        _obj.path = path + _file.name // Full file path propery
        out.push(_obj) // Store file object in array of files to return
    }
    return(out)
}    

export async function getServerSideProps(){
    // List all files in directory
    const _files = await ls(riddleDataDir).catch(console.error)
    
    // Read each file and parse markdown
    const arrHtml = await Promise.all(_files.map(async (_file) => {
        const _markdown = await fs.promises.readFile(_file.path,'utf8', (err,data)=>{
            if (err) {console.error(err); return;} // Error handling
            return data // Return raw markdown from file
        })
        // Convert markdown to html
        _file.html = md.render(_markdown) // [ ] Need to parse instead of render
        return _file // Store each file object with name, path, and html in array
    }))
    // console.log(newArr)
    // for await (const _file of _files){
    //     await fs.readFile(_file.path,'utf8',(err,data)=>{
    //         if (err) {console.error(err); return;} // Error handling
    //         _file.html = md.render(data)
    //         arrHtml.push(_file)
    //         // console.log(arrHtml)
    //     })
    // }
    // console.log(arrHtml)
    return { props: { txtRiddles: arrHtml }}
}

export default function Riddles({txtRiddles}){    
    // Define state as array of riddles; when anything changes on a riddle (e.g. "isShown"), re-render the riddles
    const [riddles,setRiddles] = useState(riddleData)
    
    // const initSetRiddles = () => setRiddles(prevState => {
    //     return prevState.map(_riddle => {
    //         return {..._riddle, isShown: false}
    //     })
    // })
    // initSetRiddles()
    
    // Rebuild array of riddles but toggle the show/hide property of clicked riddle
    const toggleShown = (id) => setRiddles(prevState => {
        return prevState.map(_riddle => {
            // Learning: Expand all riddle properties before overwriting the 'isShown' property
            return _riddle.id === id ? {..._riddle, isShown: !_riddle.isShown} : _riddle 
        })
    })
    
    // Create riddle boxes by looping through riddle data array
    const riddleElements = riddles.map(_riddle => (
        <RiddleBox
            handleClick={()=>toggleShown(_riddle.id)} // Learning: Define new function to resolve eventHandler object
            key={_riddle.id} 
            title={_riddle.title} 
            text={_riddle.text} 
            answer={_riddle.answer} 
            isShown={_riddle.isShown}
        />
    ))

    return (
        <Layout title="Riddles">
            {/* Render all riddle boxes on the page, here */}
            {riddleElements}
            <div>
                {txtRiddles.map((_riddle)=>(<div>{_riddle.html}</div>))}
            </div>
        </Layout>
    )
}