import Layout from '/components/layout'
import Image from 'next/image'


export default function About() {
    return (
        <Layout title="About">
            <section id="intro">
                <p>Hi, I'm Jon. I am a full-stack web developer and business developer. I enjoy building and selling technology to solve problems for businesses.</p>
            </section>
            <div id="image-profile" className="leading-[0] max-h-[80vh] w-full mx-auto md:float-right mt-4 md:ml-4 md:w-1/2 lg:w-1/3 overflow-hidden rounded-md shadow-md shadow-gray-600">
                <Image  src="/images/jonTornetta-profile--tall.jpg" height={1697} width={768} />
            </div>
            <section id="interests">
                <h2>Interests</h2>
                <p>When I am not working, I spend my time with my fiancée, outdoors (hiking, camping, fishing, bushcrafting), or exercising (martial arts, HIIT, yoga, gym).</p>
                <p>I write a bit but not regularly. I have written for several healthcare publications. I also like writing poetry and riddles.</p>
                <p>I enjoy reading about psychology, biographies, business, philosophy, science-fiction, and fantasy. I prefer books that have been around for a while.</p>
            </section>
            <section id="values">
                <h2>Values</h2>
                <p>I like to take the extra time to focus and do great work. This applies whether I am refactoring code, setting up scalable business infrastructure, or ensuring a client fully understands their options.</p>
                <p>I always attempt to stand by my word. Also:</p>
                <ol className="ml-4 list-decimal">
                    <li>I enjoy building things and fixing things.</li>
                    <li>I never break a promise.</li>
                    <li>I never give up.</li>
                </ol>
            </section>
            <section id="experience">
                <div className="container">
                    <h2>Programming</h2>
                    <p>I like creating and maintaining declarative, functional programs for the web.</p>
                    <p>I believe in building things that last. I like minimizing uneditable dependencies for projects.</p>
                    <p>When using dependencies, I select those that maintain this philosophy. I like choosing the simplest (i.e. least moving parts) tool possible to get efficient, clean work done.</p>
                    <p>Some of my front-end work includes:</p>
                    <ol className="ml-4 list-decimal">
                        <li>meddkit.com</li>
                        <li>virtualhealth.coach</li>
                        <li>everybodyschiropractic.com</li>
                        <li>avivaderm.com</li>
                        <li>superiorcounseling.care</li>
                        <li>suburbanmultispecialty.com</li>
                    </ol>
                    <p>Some of my CLI and back-end work includes:</p>
                    <ol className="ml-4 list-decimal">
                        <li>Automatic fitness class extractor {"=>"} Converts public fitness classes from dozens of websites to JSON objects in a single schedule object.</li>
                        <li>Bookmark exporter {"=>"} Exports browser bookmarks to native HTML files which can be easily launched by indexing programs.</li>
                        <li>GitHub Candidate Search {"=>"} Search GitHub for developers by name, email, and more. Next.js application using a combination of server-side rendering and client-side fetching via the GitHub API.</li>
                        <li>Wordpress server migrator {"=>"} Spin up, back up, migrate, and sync different server instances with different requirements (e.g. Sandbox, Development, Staging, Production). Uses 100% Linux-native tools.</li>
                        <li>Multi-machine WSL sync {"=>"} Keeps multiple, discrete WSL image instances to be synced with automatic drive mapping, git repo checking, and additional environment prep. Uses 100% Linux-native tools.</li>
                    </ol>
                </div>
            </section>
        </Layout>
    )
}

// Bio
// Interests {startups, jiu-jitsu, plants, blockchain, }
/* Skills & Knowledge: {
    Business Development: {partnerships, copywriting, sdr team build, product demos, sales automation, go-to-market planning},
    Software Engineering: {react.js, next.js, javascript, sass, wordpress, bash},
    Project Management: {team onboarding, //phases of project}
    Vertical Experience: {healthcare > acute, healthcare >it, healthcare > acute, startups, accounting}
} */
