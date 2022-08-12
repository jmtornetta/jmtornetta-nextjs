import Layout from '/components/layout'
import ReactMarkdown from 'react-markdown'
import { getAllMdContent, getMdContent } from '/lib'

// Generates each post dynamically from markdown data in 'posts/' directory.

// Next.js API. Create post paths dynamically during application build 
export async function getStaticPaths() {
  const contentArr = await getAllMdContent("data/posts/", "posts").catch(console.error)   
  const paths = contentArr.map(post => {
    const params = { slug : post.slug }
    return { params }
  })
  return {paths, fallback: false }
}

// Next.js API. Use each created path to get each post's content. 
export async function getStaticProps({params}) { // Run from server on every page load    
  const {slug} = params
  return {props : {post : await getMdContent(`data/posts/${slug}.md`, "posts").catch(console.error)}}
}

// Convert post markdown to html. 
export default function Post(props) {
  return (
    <Layout title={props.post.title}>
        <ReactMarkdown 
        className="mt-2 text-md" 
        id="postText"
        children={props.post.markdown}
        components={{
          // Remap markdown nodes
          h1 : ({node, ...props}) => <h2 {...props} />,
          h2 : ({node, ...props}) => <h3 {...props} />,
          h3 : ({node, ...props}) => <h4 {...props} />,
          h4 : ({node, ...props}) => <h5 {...props} />,
          h5 : ({node, ...props}) => <h6 {...props} />,
          h6 : ({node, ...props}) => <h6 {...props} />
        }}
      />
    </Layout>
  )
}
