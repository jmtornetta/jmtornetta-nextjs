import Layout from "/components/layout"
import Link from "next/link"

export default function Poems() {
  return (
      <Layout title="Poems">
          {/* Make max container width just large enough so that inner calendar hits its max width. This keeps the contact form and calendar widths equal. */}
          <p>Coming soon! In the meantime, check out my <Link href="/writing/riddles">Riddles</Link>.
          </p>
      </Layout>
  )
}