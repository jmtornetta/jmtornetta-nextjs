import { Transition } from '@headlessui/react';
export default function RiddleBox(props){
  const style = {
    opacity: props.isShown ? "100%" : "0%"
  } 
  // ^ probably won't work because page is being re-rendered so technically this style property isn't "changing"
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
      <button className="px-2 py-1 mt-4 rounded-md bg-brown-800 text-olive-300 hover:bg-olive-500 hover:text-brown-800" onClick={props.handleClick}>{props.isShown ? "Hide" : "Show"}</button>
    </div>
  )
}