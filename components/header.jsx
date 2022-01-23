import Link from "next/link";

export default function Header() {return(
    <section id="header">
        <div id="logo">Image Here</div>
        <div id="naviation">
            <nav>
                <ul>
                    <Link href="/"><a><li>Home</li></a></Link>
                    <Link href="/blog"><a><li>Blog</li></a></Link>
                    <Link href="/about"><a><li>About</li></a></Link>
                    <Link href="/contact"><a><li>Contact</li></a></Link>
                </ul>
            </nav>
        </div>
        <div id="social">Icons Here</div>
    </section>
)}