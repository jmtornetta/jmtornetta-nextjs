import Layout from "/components/layout"
import RiddleBox from "/components/riddleBox"
import { useState } from "react"
import { getAllMdContent } from "/lib/getMarkdown"

export async function getStaticProps(){ // Run once as riddles should be static
    return {props : {riddles : await getAllMdContent("content/riddles/", "riddles").catch(console.error)}}
}

export default function Riddles({riddles}){  
    // Define state as array of riddles; when anything changes on a riddle (e.g. "isShown"), re-render the riddles
    const [riddleDrawer,setRiddleDrawer] = useState(riddles)
    
    // Rebuild state-array of riddles toggling the show/hide property of clicked riddle
    const toggleShown = (slug) => setRiddleDrawer(prevState => {
        return prevState.map(_riddle => { // Posterity: Use function because toggling state depends on prior state.
            // Posterity: Expand all riddle properties before overwriting the 'isShown' property
            return _riddle.slug === slug ? {..._riddle, isShown: !_riddle.isShown} : _riddle 
        })
    })
    
    // Render riddle boxes by looping through riddle data array
    const riddleElements = riddleDrawer.map(_riddle => (
        <RiddleBox
            handleClick={()=>toggleShown(_riddle.slug)} // Posterity: Define new function to resolve eventHandler object
            key={_riddle.slug} 
            title={_riddle.title} 
            text={_riddle.markdown}
            answer={_riddle.answer} 
            difficulty={_riddle.difficulty}
            isShown={_riddle.isShown}
        />
    ))

    return (
        <Layout title="Riddles">
            <p>Fancy your abstract problem-solving capabilities? Test yourself with a few riddles I have written.</p>
            <p className="mt-4 text-sm"><span className="font-semibold">Technical notes: </span>Content is pre-rendered by the server for speed and search indexing but re-rendered dynamically via application state with NextJS. Content is parsed from markdown files with YAML frontmatter and rendered in React JSX components for maintenance and scalability.</p>
            {/* Render all riddle boxes on the page as elements, here */}
            {riddleElements}
        </Layout>
    )
}