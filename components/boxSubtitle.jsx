import { classNames } from "/utils/classNames"
export default function BoxSubtitle(props){
  // Shows a descriptor of a feature content box as a subtitle
  return(
    <div {...props} className={classNames(props.className,"italic")}><span className="font-semibold">{props.descriptor}: </span><span>{props.children}</span></div>
  )
}