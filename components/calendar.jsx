import Cal from "@calcom/embed-react";
import { CalendarIcon } from "@heroicons/react/outline";
import { classNames } from "/utils-js/domProps"

export default function Calendar(props) {
  const calendarPath = "jmtornetta/mk-meeting"
  return (
    <div className={classNames(props.className, "sm:flex sm:items-start")}>
      <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto rounded-full bg-olive-100 sm:mx-0 sm:h-10 sm:w-10">
        <CalendarIcon className="w-6 h-6 text-olive-800" aria-hidden="true" />
      </div>
      <div id="calendar-field" className="flex-grow pt-2 text-center sm:mt-0 sm:ml-4 sm:text-left">
        <h3 as="h3" className="text-lg font-medium leading-6 text-olive-800">
          Meet Me
        </h3>
        <p className="mt-2 text-sm text-gray-500">
          Set up a meeting for less back-and-forth. Please make sure I am expecting it, first!
        </p>
        <Cal
          className="mt-2"
          calLink={calendarPath}
          config={{
            name: "",
            email: "",
            notes: "\n---\nBooked from jmtornetta.com.",
            guests: [],
            theme: "",
          }}
        />
      </div>
      {/* Spacer div to mimic and balance space from above icon */}
      <div className="flex-shrink-0 hidden w-12 h-12 mx-auto sm:flex sm:mx-0 sm:h-10 sm:w-10" />
    </div>
  )
}