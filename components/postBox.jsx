// import ReactMarkdown from "react-markdown"
// import * as fs from "node:fs/promises"
import BoxTitle from "/components/boxTitle"
import BoxSubtitle from "/components/boxSubtitle"
import Image from "next/image"
import Link from "next/link"
import Button from '/components/button'

export default function PostBox(props) {
  // Create preview string from markdown
  const previewStr = ((text = props.text, length = props.textLength) => {
    // Replace markdown headers and line breaks
    const _transMarkdown = text.replace(/#{1,10}.*/g, "").replace(/(\r\n|\n|\r)/gm, " ")
    // Slice markdown at first space and add ellipses if it exceeds target length
    const newStr = _transMarkdown.length > length ? _transMarkdown.slice(0, _transMarkdown.indexOf(" ", length)) + "..." : _transMarkdown
    return newStr
  })()

  return (
    <div id="postBox" className="flex flex-col justify-end w-full p-4 rounded-md shadow-md bg-brown-200">
      {/* Display image if it exists and is image extension. Determined on parent page by passing image path or null to component. */}
      <div className="mx-auto overflow-hidden basis-[300px] rounded-md">
        {props.image && <Image className="rounded-md" alt="Post Featured Image" src={props.image} width="600px" height="600px" />}
      </div>
      <BoxTitle className="mt-2">{props.title}</BoxTitle>
      <BoxSubtitle descriptor="Date">{props.date}</BoxSubtitle>
      <p id="postPreview" className="w-auto mt-2 overflow-hidden break-all text-ellipsis text-md max-h-60">
        {previewStr}
      </p>

      {/* Read more button that links to post slug */}
      <Link href={props.slug}><a className='contents'><Button className="mt-4 justify-self-end w-fit">Read More</Button></a></Link>
    </div>
  )
}