import Layout from '../components/layout'
import Image from 'next/image'

export default function About(){return(
    <Layout title="About">
        <p>This is the about page...</p>
        <Image src="/images/jonTornetta-profile--tall.jpg" height={400} width={180}/>
    </Layout>
)}

// Bio
// Interests {startups, jiu-jitsu, plants, blockchain, }
/* Skills & Knowledge: {
    Business Development: {partnerships, copywriting, sdr team build, product demos, sales automation, go-to-market planning},
    Software Engineering: {react.js, next.js, javascript, sass, wordpress, bash},
    Project Management: {team onboarding, //phases of project}
    Vertical Experience: {healthcare > acute, healthcare >it, healthcare > acute, startups, accounting}
} */ 
