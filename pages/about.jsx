import Layout from '../components/layout'
import Image from 'next/image'


export default function About() {
    return (
        <Layout title="About">
            <section className="flex flex-col items-center justify-end md:flex-row">
                <div className="w-full m-auto">
                    <p>Hi, I'm Jon.</p>
                </div>
                <div className="min-w-[180px] h-[50vh] relative overflow-hidden">
                    <Image src="/images/jonTornetta-profile--tall.jpg" height={800} width={360} />
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
