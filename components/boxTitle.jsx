import { classNames } from "/lib/utils-js/domProps"

export default function BoxTitle(props) {
  // Custom style and node (h2) for feature box content titles
  return (
    <h2 {...props} className={classNames(props.className, "mt-2 text-xl font-bold text-current")}>{props.children}</h2>
  )
}