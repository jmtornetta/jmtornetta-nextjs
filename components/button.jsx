export default function Button(props) {
  return(
    <button type="button" onClick={props.onClick} 
      className={`${props.className} inline-flex justify-center w-full px-4 py-2 text-base font-medium border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-olive-500 sm:w-auto sm:text-sm bg-brown-800 text-olive-300 hover:bg-olive-500 hover:text-brown-800`}>
      {props.children}
    </button>
  )
}