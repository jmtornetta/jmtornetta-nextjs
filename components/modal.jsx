import ContactForm from '/components/contactForm'
import Calendar from '/components/calendar'
import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'

export default function ContactModal(props) {
  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={props.isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={props.toggleOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {/* Sets background to gray when modal pops up */}
          <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
        </Transition.Child>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative overflow-hidden text-left transition-all transform bg-white rounded-md shadow-xl sm:my-8 sm:max-w-lg sm:w-full">
                <button className="absolute ml-auto rounded right-2 top-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-olive-500 sm:w-fit sm:text-sm text-brown-800 hover:bg-olive-500 hover:text-brown-800" onClick={() => props.toggleOpen()} ref={cancelButtonRef}>
                  <XIcon  className="w-6 h-6 " />
                </button>
                {
                  props.type === "contact" && <ContactForm handleClose={props.toggleOpen} className="p-4 sm:p-6"/> ||
                  props.type === "meet" && <Calendar handleClose={props.toggleOpen} className="p-4 sm:p-6"/> || 
                  <p>Error: Could not render popup content.</p>
                }
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
