// Generates each post dynamically from markdown data sent to 'posts/' directory.
import { useRouter } from 'next/router'
import ReactMarkdown from 'react-markdown';
const fs = require('fs')

const postsDir = "data/posts/" // Where posts markdown lives

// Render content from markdown files by iterating over all files in a folder.  

// Iterate over files in folder
async function ls(path) {
  const dir = await fs.promises.opendir(path)
  for await (const _file of dir) {
      console.log(_file.name)
  }
}
ls('./data/riddles').catch(console.error)

export default function Post() {
  const router = useRouter()
  const { pid } = router.query

  return <p>Post: {pid}</p>
}