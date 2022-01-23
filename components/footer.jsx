import Link from "next/link";

export default function Footer(){return(
    <footer>
        <section id="footer-boxes">
            <div><h3>First Footer Box</h3></div>
            <div><h3>Second Footer Box</h3></div>
            <div><h3>Third Footer Box</h3></div>
        </section>
        <section id="footer-disclaimers">
            <p id="copyright">© {new Date().getFullYear()} Jon Tornetta</p>
            <p id="privacyPolicy"><Link href="/privacy-policy">Privacy Policy</Link></p>
        </section>
    </footer>
)}