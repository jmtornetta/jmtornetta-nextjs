// import ReactMarkdown from "react-markdown"
import BoxTitle from "/components/boxTitle"
import BoxSubtitle from "/components/boxSubtitle"
import Image from "next/image"
import Link from "next/link"
import Button from './button'

export default function PostBox(props){
  // Create preview string from markdown
  const previewStr = ((text = props.text, length = 300) => {
    // Replace markdown headers and line breaks
    const _transMarkdown = text.replace(/#{1,10}.*/g,"").replace(/(\r\n|\n|\r)/gm," ")
    // Slice markdown at first space and add ellipses if it exceeds target length
    const newStr = _transMarkdown.length > length ? _transMarkdown.slice(0, _transMarkdown.indexOf(" ", length)) + "..." : _transMarkdown
    return newStr
  })()
  
  return (
    <div id="postBox" className="flex flex-col justify-between w-full p-2 rounded-md shadow-md bg-brown-200">
      {/* Display image if it exists */}
      {()=>{if(props.image) return <Image src={props.image} height="300px" width="300px" />}}
      <BoxTitle>{props.title}</BoxTitle>
      <BoxSubtitle descriptor="Date">{props.date}</BoxSubtitle>
      <p id="postPreview" className="w-auto mt-2 overflow-hidden break-all text-ellipsis text-md max-h-60">
        {previewStr}
      </p>
      {/* Posterity: Markdown component that removes all headers. Decided to do this with node.js, above.
      
      <ReactMarkdown 
        className="w-auto mt-2 overflow-hidden break-all text-ellipsis text-md max-h-60" 
        id="postText"
        children={previewStr}
        components={(()=>{
          // IIFE returns object to remove "heading" nodes from markup for preview text
          const obj = {}
          for(let i = 1; i<=6; i++){
            const _prop = `h${i}`
            obj[_prop] = () => (<></>)
          }
          return obj
        })()}
      /> */}
      {/* Read more button that links to post slug */}
      <Link href={"/portfolio/posts/" + props.slug}><Button className="mt-4 justify-self-end w-fit">Read More</Button></Link>
    </div>
  )
}