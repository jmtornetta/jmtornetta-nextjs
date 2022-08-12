import Layout from "/components/layout"
import PostBox from "/components/postBox"
import { getAllMdContent } from "/lib"

export async function getStaticProps() { // Run from server on every page load    
    return {props : {posts : await getAllMdContent("data/posts/").catch(console.error)}}
}

export default function Posts({ posts }) {
    const _posts = posts // Sort mutates the array so save a copy first
    _posts.sort((a, b) => {
        const date1 = new Date(a.date)
        const date2 = new Date(b.date)
        return date2 - date1; // Sorts from newest to oldest
    })
    
    const _shownPosts = _posts.slice(0, 4)

    return (
        <Layout title="Blog Posts">
            {/* Render all post boxes on the page as elements, here */}
            <div className="grid grid-cols-1 gap-4 place-content-start sm:grid-cols-2">
                {_shownPosts.map(_post => (
                    // Render riddle boxes by looping through riddle data array
                    <PostBox
                        key={_post.slug}
                        title={_post.title}
                        date={_post.date}
                        text={_post.markdown}
                        textLength={300}
                        slug={_post.slug}
                        image={_post.image}
                        // isShown={_post.isShown} // Posterity: For riddles
                    />
                ))}
            </div>
        </Layout>
    )
}