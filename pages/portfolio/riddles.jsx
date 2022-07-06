import { useState } from "react"
import ls from "/utils/ls.js"
import parseMarkdownFrontmatter from "/utils/parseMarkdownFrontmatter.js"
import * as fs from "node:fs/promises"
import Layout from "/components/layout"
import RiddleBox from "/components/riddleBox"

const riddleDir = "data/riddles/" // '/data/' is not found by `fs`; not certain why 

export async function getServerSideProps(){ // Run from server on every page load
    // List all files in directory
    const filesList = await ls(riddleDir).catch(console.error)
    
    // Parse each riddle into array of objects
    const riddlesArr = await Promise.all(filesList.map(async (file) => {
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
            <p>Yes, I had a bit too much time on my hands during the pandemic and my knee surgery...</p>
            <p className="mt-4 text-sm"><span className="font-semibold">Technical notes: </span>These riddles are pre-rendered server-side dynamically with Next.js. They are parsed from markdown files with YAML frontmatter and converted to React JSX components for infinite scalability.</p>
            {/* Render all riddle boxes on the page as elements, here */}
            {riddleElements}
        </Layout>
    )
}