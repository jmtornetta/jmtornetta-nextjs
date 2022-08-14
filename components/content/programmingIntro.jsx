import Link from "next/link"

export default function ProgrammingIntro() {
  return (
    <>
      <p>I like creating and maintaining declarative, functional programs that solve problems.</p>
      <p>I believe in building things that last. I like minimizing uneditable dependencies for projects.</p>
      <p>When sourcing dependencies, I select those that are longstanding, lightweight, and minimize side-effects.</p>
      <p>I like choosing the simplest tool possible to get efficient, clean work done.</p>
      <p>Find me on GitHub <Link href="https://github.com/jmtornetta"><a className="text-green-600 underline hover:text-brown-600" target="_blank">here</a></Link>.</p>
    </>
  )
}