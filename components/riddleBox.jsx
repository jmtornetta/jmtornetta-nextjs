import { Transition } from '@headlessui/react'
import Button from './button'

export default function RiddleBox(props){
  return (
    <div id="riddleBox" className="p-2 mx-auto mt-4 rounded-md shadow-md bg-brown-200">
      <h2>{props.title}</h2>
      <p className="font-semibold" id="riddleText">{props.text}</p>
      {/* Animations for React via Tailwind: https://headlessui.com/react/transition */}
      <Transition 
        as='p' 
        id="riddleAnswer" 
        className="mt-2"
        show={props.isShown} 
        enter="transition transform duration-1000"
        enterFrom="opacity-0 translate-y-5"
        enterTo="opacity-100 translate-y-0"
        leave="transition transform duration-1000"
        leaveFrom="opacity-100 scale-y-100"
        leaveTo="opacity-0 scale-y-0"
      >
        {props.answer}
      </Transition>
      <Button className="mt-2" onClick={props.handleClick}>{props.isShown ? "Hide" : "Show"}</Button>
    </div>
  )
}