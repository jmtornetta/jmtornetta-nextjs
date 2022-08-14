import { MailIcon } from '@heroicons/react/outline'
import Button from '/components/button'
import { classNames } from "/lib/utils-js/domProps"

export default function ContactForm(props) {
  const handleSubmit = () => {
    // Pass data via AP
    // {PLACEHOLDER}
    // Close modal if form exists in modal (i.e. 'handleClose' function exists)
    if (typeof props.handleClose === "function") { props.handleClose() }
  }

  return (
    <div className={classNames(props.className, "sm:flex sm:items-start")}>
      <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto rounded-full bg-olive-100 sm:mx-0 sm:h-10 sm:w-10">
        <MailIcon className="w-6 h-6 text-olive-800" aria-hidden="true" />
      </div>
      <div id="contact-fields" className="flex-grow pt-2 text-center sm:mt-0 sm:ml-4 sm:text-left">
        <h3 as="h3" className="text-lg font-medium leading-6 text-olive-800">
          Email Me
        </h3>
        <p className="mt-2 text-sm text-gray-500">
          Send me an email. I usually respond within 48 hours.
        </p>
        <textarea placeholder="Your Message..." className="w-full mt-2 rounded-md shadow-inner" />
        <input placeholder="Your Email Address..." type="email" className="w-full mt-2 rounded-md shadown-inner" />
        <div className="w-full mt-2 rounded-md">{/*Placeholder for anti-spam captcha*/}</div>
        <Button className="mx-auto mt-6 sm:ml-auto sm:mr-0 sm:block" onClick={() => handleSubmit()}>Submit</Button>
      </div>
      {/* Spacer div to mimic and balance space from above icon */}
      <div className="flex-shrink-0 hidden w-12 h-12 mx-auto sm:flex sm:mx-0 sm:h-10 sm:w-10" />
    </div>
  )
}