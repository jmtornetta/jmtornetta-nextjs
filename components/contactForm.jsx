import { MailIcon } from '@heroicons/react/outline'
import Button from '/components/button'

export default function ContactForm(props) {
  const handleSubmit = () => {
    // Pass data via AP
    // {PLACEHOLDER}
    // Close modal if form exists in modal (i.e. 'handleClose' function exists)
    if(typeof props.handleClose === "function"){props.handleClose()}
  }
  
  return (
    <div>
      <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div className="sm:flex sm:items-start">
          <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto rounded-full bg-olive-100 sm:mx-0 sm:h-10 sm:w-10">
            <MailIcon className="w-6 h-6 text-olive-800" aria-hidden="true" />
          </div>
          <div id="contact-fields" className="flex-grow mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 as="h3" className="text-lg font-medium leading-6 text-olive-800">
              Email Me
            </h3>
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                Send me an email. I usually respond within 48 hours.
              </p>
            </div>
            <textarea placeholder="Your Message..." className="w-full mt-2 rounded-sm shadow-inner" />
            <input placeholder="Your Email Address..." type="email" className="w-full mt-2 rounded-sm shadown-inner" />
            <div>Placeholder for anti-spam</div>
            <Button className="mx-auto mt-6 sm:ml-auto sm:mr-0 sm:block" onClick={() => handleSubmit()}>Submit</Button>
          </div>
          {/* Spacer div to mimic and balance space from above icon */}
          <div className="flex-shrink-0 hidden w-12 h-12 mx-auto sm:flex sm:mx-0 sm:h-10 sm:w-10" />
        </div>
      </div>
      {/* <div className="px-4 py-3 sm:px-6 sm:flex sm:justify-end">
        <Button className="mx-auto my-1 sm:mx-1" onClick={() => props.toggleOpen()} ref={cancelButtonRef}>Cancel</Button>
      </div> */}
    </div>
  )
}