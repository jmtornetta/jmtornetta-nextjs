import { useState } from "react";
import Layout from "../../components/layout";
import RiddleBox from "../../components/riddleBox";
import riddleData from "../../data/riddles"

export default function Riddles(){
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
        </Layout>
    )
}