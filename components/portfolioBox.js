import BoxTitle from "/components/boxTitle"
import BoxSubtitle from "/components/boxSubtitle"
import Image from "next/image"
import Link from "next/link"
import Button from '/components/button'
import { classNames } from '/lib/utils-js/domProps'

export default function PortfolioBox({className, title, about, image, link, text}) {
  return (
    <div id="portfolioBox" className={classNames(className,"flex flex-col justify-end w-full p-4 rounded-md shadow-md bg-brown-200")}>
      {/* Display image if it exists and is image extension. Determined on parent page by passing image path or null to component. */}
      <div className="mx-auto overflow-hidden basis-[300px] rounded-md">
        {image && <Image className="rounded-md" alt={`${title} portfolio image`} src={image} width="600px" height="600px" />}
      </div>
      <BoxTitle className="mt-2">{title}</BoxTitle>
      <BoxSubtitle descriptor="About">{about}</BoxSubtitle>
      <p id="portfolioPreview" className="w-auto mt-2 overflow-hidden break-all text-ellipsis text-md max-h-60">
        {text}
      </p>
      {/* Read more button that links to post slug */}
      <Link href={link}><a className='contents' target="_blank"><Button className="mt-4 justify-self-end w-fit">View</Button></a></Link>
    </div>
  )
}