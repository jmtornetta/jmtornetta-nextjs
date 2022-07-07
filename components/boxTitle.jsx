export default function BoxTitle(props){
  // Custom style and node (h2) for feature box content titles
  return(
    <h2 className="mb-2 text-lg font-bold">{props.children}</h2>
  )
}