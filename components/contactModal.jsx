/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { MailIcon } from '@heroicons/react/outline'
import Button from './button'

export default function Contact(props) {
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
                <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto rounded-full bg-olive-100 sm:mx-0 sm:h-10 sm:w-10">
                      <MailIcon className="w-6 h-6 text-olive-800" aria-hidden="true" />
                    </div>
                    <div id="contact-fields" className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-olive-800">
                        Email Me
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Send me an email. I will read it.
                        </p>
                      </div>
                      <textarea className="w-full mt-2 rounded-sm shadow-inner"/>
                      <input type="email" className="w-full mt-2 rounded-sm shadown-inner"/>
                      <div>Placeholder for anti-spam</div>
                    </div>
                    {/* Spacer div to mimic and balance space from above icon */}
                    <div className="flex-shrink-0 hidden w-12 h-12 mx-auto sm:flex sm:mx-0 sm:h-10 sm:w-10" />
                  </div>
                </div>
                <div className="px-4 py-3 sm:px-6 sm:flex sm:justify-end">
                  <Button className="mx-auto my-1 sm:mx-1" onClick={() => props.toggleOpen()}>Submit</Button>
                  <Button className="mx-auto my-1 sm:mx-1" onClick={() => props.toggleOpen()} ref={cancelButtonRef}>Cancel</Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
