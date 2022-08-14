import { promises as fs } from 'fs'
import ls from "/lib/utils-js/node/ls"
import path from "path"
import parseMarkdownFrontmatter from "/lib/utils-js/node/parseMarkdownFrontmatter"

// Function library to parse markdown on content files

export const getMdContent = async (filepath, contentType) => {
  const _fileRaw = await fs.readFile(filepath, 'utf8', (err, content) => (content).catch(err))

  const { markdown, frontmatter } = await parseMarkdownFrontmatter(_fileRaw)
  const _extractedFrontmatter = (({ title, date, slug, image, answer, difficulty }) => ({ title, date, slug, image, answer, difficulty }))(frontmatter) // Extract object props from frontmatter
  const _overrideFrontmatter = {}

  const missingContentProp = `Missing ${contentType} properties!` // Default error message

  if (_extractedFrontmatter.image && !_extractedFrontmatter.image.match(/\.(jpg|jpeg|png|webp|svg|gif){1,10}$/)) _overrideFrontmatter.image = null // Unset image if format is bad  
  if (!_extractedFrontmatter.slug) _overrideFrontmatter.slug = encodeURIComponent(path.basename(filepath.replace(/\.[a-zA-Z]{1,10}$/, ""))) // Set slug to filename if not defined

  switch (contentType) {
    case "posts":
      if (!_extractedFrontmatter.date || !_extractedFrontmatter.title) throw missingContentProp;
      break;
    case "riddles":
      if (!_extractedFrontmatter.answer || !_extractedFrontmatter.difficulty) throw missingContentProp;
      _overrideFrontmatter.isShown = false // Add property so the initial state hides the riddle answer
      break;
    default:
      console.error("Invalid content!")
      break;
  }

  const _combinedContent = { filepath, markdown, ..._extractedFrontmatter, ..._overrideFrontmatter }
  const removeEmptyProps = Object.fromEntries(Object.entries(_combinedContent).filter(([_, v]) => v != null));
  return removeEmptyProps
}

export const getAllMdContent = async (dir, contentType) => {
  const filenames = await ls(dir).catch(console.error)
  const allContent = await Promise.all(filenames.map(async file => getMdContent(dir + file, contentType)))
  return allContent
}