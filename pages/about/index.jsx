import Layout from '/components/layout'
import ProgrammingIntro from '/components/content/programmingIntro'
import Image from 'next/image'
import Link from 'next/link'


export default function About() {
    return (
        <Layout title="About">
            <section id="intro">
                <p>Hi, I'm Jon. I am a software and business developer. I enjoy using technology to solve problems for healthcare businesses.</p>
            </section>
            <div id="image-profile" className="leading-[0] max-h-[80vh] w-full mx-auto md:float-right mt-4 md:ml-4 md:w-1/2 lg:w-1/3 overflow-hidden rounded-md shadow-md shadow-gray-600">
                <Image  src="/images/jonTornetta-profile--tall.jpg" height={1697} width={768} />
            </div>
            <section id="interests">
                <h2>Interests</h2>
                <p>When I am not working, I spend my time with my fiancée, outdoors (hiking, camping, fishing, bushcrafting), or exercising (martial arts, HIIT, yoga, gym).</p>
                <p>I write a bit but not regularly. I have written for several healthcare publications. I also like writing poetry and riddles.</p>
                <p>I like reading about psychology, biographies, philosophy, science-fiction, and fantasy. I prefer books that have been around for a while.</p>
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
                    <ProgrammingIntro />
                    <p>See my projects <Link href="/programming"><a className="text-green-600 underline hover:text-brown-600">here</a></Link>.</p>
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
