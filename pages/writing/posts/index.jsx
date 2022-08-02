import ls from "/utils/ls.js"
import parseMarkdownFrontmatter from "/utils/parseMarkdownFrontmatter.js"
import * as fs from "node:fs/promises"
import Layout from "/components/layout"
import PostBox from "/components/postBox"

const postsDir = "data/posts/"

export async function getStaticProps(){ // Run from server on every page load
    // List all files in directory
    const filesList = await ls(postsDir).catch(console.error)
    
    // Parse each blog into array of objects so title and snippet can be retrieved
    const postsArr = await Promise.all(filesList.map(async (file) => {
        const _fileRaw = await fs.readFile(file.filepath,'utf8',(err,content)=>(content).catch(err))
        const _fileParsed = await parseMarkdownFrontmatter(_fileRaw)
        const postParsed = {
            ...file, 
            markdown : _fileParsed.markdown, 
            // vfile : _fileParsed.vfile, // Posterity: Returns same value as 'markdown' once frontmatter is processed, so can be left out
            postTitle : _fileParsed.frontmatter.title ? _fileParsed.frontmatter.title : null,
            postDate : _fileParsed.frontmatter.date ? _fileParsed.frontmatter.date : null,
            postImage : _fileParsed.frontmatter.image.match(/\.(jpg|jpeg|png|webp|svg|gif){1,10}$/) ? _fileParsed.frontmatter.image : null,
            postSlug : _fileParsed.frontmatter.slug ? _fileParsed.frontmatter.slug : file.filename.replace(/\.[a-zA-Z]{1,10}$/,""),
            isShown : false // Initially hide all post snippets; for use with filter later
        }
        return postParsed // Store each file object with name, path, and html in array
    }))
    // Return 'props' object which is passed to the Riddle jsx page component on page load
    return { props: { posts: postsArr }}
}

export default function Posts({posts}){
    const _posts = posts // Sort mutates the array so save a copy first
    _posts.sort((a,b)=>{
        const date1 = new Date(a.date)
        const date2 = new Date(b.date)
        return date2 - date1; // Sorts from newest to oldest
    })
    
    // Only show the first 6 post previews
    const _shownPosts = _posts.slice(0,5)
    
    // Render riddle boxes by looping through riddle data array
    const postElements = _shownPosts.map(_post => (
        <PostBox
            key={_post.filename} 
            title={_post.postTitle} 
            date={_post.postDate} 
            text={_post.markdown}
            textLength={300}
            slug={_post.postSlug} 
            image={_post.postImage}
            isShown={_post.isShown}
        />
    ))

    return (
        <Layout title="Blog Posts">
            {/* Render all post boxes on the page as elements, here */}
            <div className="grid grid-cols-1 gap-4 place-content-start sm:grid-cols-2">
                {postElements}
            </div>
        </Layout>
    )
}