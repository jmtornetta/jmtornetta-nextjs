import ReactMarkdown from "react-markdown"
import { Transition } from '@headlessui/react'
import Button from './button'
import BoxTitle from "/components/boxTitle"
import BoxSubtitle from "/components/boxSubtitle"

export default function RiddleBox(props){
  return (
    <div id="riddleBox" className="p-4 mx-auto mt-4 rounded-md shadow-md bg-brown-200">
      <BoxTitle>{props.title}</BoxTitle>
      <BoxSubtitle descriptor="Difficulty">{props.difficulty}</BoxSubtitle>
      <ReactMarkdown 
        className="mt-2 text-md" 
        id="riddleText"
        children={props.text}
        // Posterity: Easier to pass title via YAML frontmatter as prop instead of remapping all headings
        // components={{
        //   // Remap all riddle markdown nodes (h[x]) to Title node
        //   h1 : ({node, ...props}) => <Title title={props.title} {...props} />,
        //   h2 : ({node, ...props}) => <Title {...props} />,
        //   h3 : ({node, ...props}) => <Title {...props} />,
        //   h4 : ({node, ...props}) => <Title {...props} />,
        //   h5 : ({node, ...props}) => <Title {...props} />,
        //   h6 : ({node, ...props}) => <Title {...props} />
        // }}
      />
      {/* Animations for React via Tailwind: https://headlessui.com/react/transition */}
      <Transition 
        as='div' 
        id="riddleAnswer" 
        className="mt-2 italic"
        show={props.isShown} 
        enter="transition transform duration-1000"
        enterFrom="opacity-0 translate-y-5"
        enterTo="opacity-100 translate-y-0"
        leave="transition transform duration-1000"
        leaveFrom="opacity-100 scale-y-100"
        leaveTo="opacity-0 scale-y-0"
      >
      <BoxSubtitle descriptor="Answer">{props.answer}</BoxSubtitle>
      </Transition>
      <Button className="mt-4" onClick={props.handleClick}>{props.isShown ? "Hide" : "Show"}</Button>
    </div>
  )
}