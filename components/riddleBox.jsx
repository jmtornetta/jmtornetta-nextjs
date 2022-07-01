export default function RiddleBox(props){
  const style = {
    opacity: props.isShown ? "100%" : "0%"
  } 
  // ^ probably won't work because page is being re-rendered so technically this style property isn't "changing"
  return (
    <div id="riddleBox" className="p-2 mx-auto mt-4 rounded-md shadow-md bg-brown-200">
      <h2>{props.title}</h2>
      <p className="font-semibold" id="riddleText">{props.text}</p>
      <p id="riddleAnswer" style={style} className={`mt-4 transition-opacity ${props.isShown ? "block" : "hidden"}`}>{props.answer}</p>
      <button className="px-2 py-1 mt-4 rounded-md bg-brown-800 text-olive-300 hover:bg-olive-500 hover:text-brown-800" onClick={props.handleClick}>{props.isShown ? "Hide" : "Show"}</button>
    </div>
  )
}