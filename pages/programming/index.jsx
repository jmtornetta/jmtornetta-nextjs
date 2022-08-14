import Layout from "/components/layout";
import ProgrammingWebsites from "/components/content/programmingFrontend";
import ProgrammingIntro from "/components/content/programmingIntro";

export default function Programming() {
    return (
        <Layout title="Programming">
            <ProgrammingIntro />
            <p>See some of my software development projects below.</p>
            <section id="frontendDevelopment">
                <h2>Front-End Application Development</h2>
                <p>Here are a few of my web applications: </p>
                <ProgrammingWebsites />
            </section>
            <section id="backendDevelopment">
                <h2>Back-End Application Development</h2>
                <p>Some of my CLI and back-end work includes:</p>
                <ol className="ml-4 list-decimal">
                    <li>Automatic fitness class extractor {"=>"} Converts public fitness classes from dozens of websites to JSON objects in a single schedule object.</li>
                    <li>Bookmark exporter {"=>"} Exports browser bookmarks to native HTML files which can be easily launched by indexing programs.</li>
                    <li>GitHub Candidate Search {"=>"} Search GitHub for developers by name, email, and more. Next.js application using a combination of server-side rendering and client-side fetching via the GitHub API.</li>
                    <li>Wordpress server migrator {"=>"} Spin up, back up, migrate, and sync different server instances with different requirements (e.g. Sandbox, Development, Staging, Production). Uses 100% Linux-native tools.</li>
                    <li>Multi-machine WSL sync {"=>"} Keeps multiple, discrete WSL image instances to be synced with automatic drive mapping, git repo checking, and additional environment prep. Uses 100% Linux-native tools.</li>
                </ol>
            </section>
        </Layout>
    )
}