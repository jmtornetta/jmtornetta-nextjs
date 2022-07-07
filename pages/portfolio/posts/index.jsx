import { useState } from "react"
import ls from "/utils/ls.js"
import parseMarkdownFrontmatter from "/utils/parseMarkdownFrontmatter.js"
import * as fs from "node:fs/promises"
import Layout from "/components/layout"
import PostBox from "/components/postBox"

const postsDir = "data/posts/"

export async function getServerSideProps(){ // Run from server on every page load
    // List all files in directory
    const filesList = await ls(postsDir).catch(console.error)
    
    // Parse each blog into array of objects so title and snippet can be retrieved
    const postsArr = await Promise.all(filesList.map(async (file) => {
        const _fileRaw = await fs.readFile(file.filepath,'utf8',(err,content)=>(content).catch(err))
        const _fileParsed = await parseMarkdownFrontmatter(_fileRaw)
        const postParsed = {
            ...file, 
            markdown : _fileParsed.markdown, 
            // vfile : _fileParsed.vfile, // Returns same value as 'markdown' once frontmatter is processed, so can be left out
            postTitle : _fileParsed.frontmatter.title ? _fileParsed.frontmatter.title : null,
            postDate : _fileParsed.frontmatter.date ? _fileParsed.frontmatter.date : null,
            postImage : _fileParsed.frontmatter.image ? _fileParsed.frontmatter.image : null,
            postSlug : _fileParsed.frontmatter.slug ? _fileParsed.frontmatter.slug : file.filename,
            isShown : false // Initially hide all post snippets
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
    const _shownPosts = _posts.slice(0,5)
    console.log(_shownPosts)

    const [postsGallery,setPostsGallery] = useState(posts)
    
    // // Rebuild state-array of riddles toggling the show/hide property of clicked riddle
    // const toggleShown = (filename) => setPostsGallery(prevState => {
    //     return prevState.map(_riddle => {
    //         // Posterity: Expand all riddle properties before overwriting the 'isShown' property
    //         return _riddle.filename === filename ? {..._riddle, isShown: !_riddle.isShown} : _riddle 
    //     })
    // })
    
    // Render riddle boxes by looping through riddle data array
    const postElements = postsGallery.map(_post => (
        <PostBox
            handleClick={()=>toggleShown(_riddle.filename)} // Learning: Define new function to resolve eventHandler object
            key={_post.filename} 
            title={_post.postTitle} 
            date={_post.postDate} 
            text={_post.markdown}
            slug={_post.postSlug} 
            image={_post.postImage}
            isShown={_post.isShown}
        />
    ))

    return (
        <Layout title="Blog Posts">
            {/* Render all post boxes on the page as elements, here */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {postElements}
            </div>
        </Layout>
    )
}