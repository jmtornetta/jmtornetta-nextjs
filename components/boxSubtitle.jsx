export default function BoxSubtitle(props){
  // Shows a descriptor of a feature content box as a subtitle
  return(
    <p className="italic"><span className="font-semibold">{props.descriptor}: </span><span>{props.children}</span></p>
  )
}