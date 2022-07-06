import { useState } from "react"
import * as fs from "node:fs/promises"
import Layout from "/components/layout"
import RiddleBox from "/components/riddleBox"

// Requirements for markdown frontmatter processing
import {unified} from 'unified'
import compiler from 'remark-stringify'
import parser from 'remark-parse'
import frontmatter from "remark-frontmatter"
import extract from "remark-extract-frontmatter"
import yaml from "yaml"

const riddleDir = "data/riddles/" // '/data/' is not found by `fs`; not certain why

const ls = async (path) => {
    // Return all files from a given directory path in an array of objects
    const out = []
    const dir = await fs.opendir(path) // Need to 'await' if running 'fs' async
    for await (const _file of dir) {
        const _obj = {}
        _obj.filename = _file.name // File name property
        _obj.filepath = path + _file.name // Full file path propery
        out.push(_obj) // Store file object in array of files to return
    }
    return(out)
}    

const parseMarkdownFrontmatter = async (vfile) => {
    // Parse and return markdown + frontmatter data (string or virtual file)
    const parsed = {}
    unified()
        .use(parser)
        .use(compiler)
        .use(frontmatter)
        .use(extract, { yaml: yaml.parse, remove: true })
        .process(vfile, (err, _vfile) => {
            if (err) { console.error(err); return} 
            // const obj = {}
            parsed.frontmatter = _vfile.data // Extract returns 'data' property appended to input virtual file
            parsed.markdown = _vfile.value
            parsed.vfile = _vfile.toString()
        })
    return parsed
}

export async function getServerSideProps(){ // Run from server on every page load
    // List all files in directory
    const filesList = await ls(riddleDir).catch(console.error)
    
    // Parse each riddle into array of objects
    const riddlesArr = await Promise.all(filesList.map(async (file) => {
        // 
        const _fileRaw = await fs.readFile(file.filepath,'utf8',(err,content)=>(content).catch(err))
        const _fileParsed = await parseMarkdownFrontmatter(_fileRaw)
        const riddleParsed = {
            ...file, 
            markdown : _fileParsed.markdown, 
            // vfile : _fileParsed.vfile, // Returns same value as 'markdown' once frontmatter is processed, so can be left out
            riddleAnswer : _fileParsed.frontmatter.answer, 
            riddleDifficulty : _fileParsed.frontmatter.difficulty, 
            riddleTitle : _fileParsed.frontmatter.title ? _fileParsed.frontmatter.title : null,
            isShown : false // Add property so the initial state hides the riddle answer
        }
        console.log(riddleParsed)
        return riddleParsed // Store each file object with name, path, and html in array
    }))
    // Return 'props' object which is passed to the Riddle jsx page component on page load
    return { props: { riddles: riddlesArr }}
}

export default function Riddles({riddles}){  
    // Define state as array of riddles; when anything changes on a riddle (e.g. "isShown"), re-render the riddles
    const [riddleDrawer,setRiddleDrawer] = useState(riddles)
    
    // Rebuild state-array of riddles toggling the show/hide property of clicked riddle
    const toggleShown = (filename) => setRiddleDrawer(prevState => {
        return prevState.map(_riddle => {
            // Posterity: Expand all riddle properties before overwriting the 'isShown' property
            return _riddle.filename === filename ? {..._riddle, isShown: !_riddle.isShown} : _riddle 
        })
    })
    
    // Render riddle boxes by looping through riddle data array
    const riddleElements = riddleDrawer.map(_riddle => (
        <RiddleBox
            handleClick={()=>toggleShown(_riddle.filename)} // Learning: Define new function to resolve eventHandler object
            key={_riddle.filename} 
            title={_riddle.riddleTitle} 
            text={_riddle.markdown}
            answer={_riddle.riddleAnswer} 
            difficulty={_riddle.riddleDifficulty}
            isShown={_riddle.isShown}
        />
    ))

    return (
        <Layout title="Riddles">
            <p>Enjoy riddles? If so, you are in the minority. Nonetheless, here are a few I have written.</p>
            <p>Yes, I had a bit too much time on my hands during the pandemic and my latest knee surgery...</p>
            <p className="mt-4 text-sm"><span className="font-semibold">Technical notes: </span>These riddles are pre-rendered server-side dynamically with Next.js. They are parsed from markdown files with YAML frontmatter and converted to React JSX components for infinite scalability.</p>
            {/* Render all riddle boxes on the page as elements, here */}
            {riddleElements}
        </Layout>
    )
}