import Head from 'next/head'
import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { fetchContent } from '../lib/api'

export default function Home({ initialContent }) {
  const [content, setContent] = useState(initialContent)

  useEffect(() => {
    async function loadContent() {
      try {
        const dynamicContent = await fetchContent()
        setContent(dynamicContent)
      } catch (error) {
        console.error('Failed to fetch dynamic content:', error)
      }
    }
    loadContent()
  }, [])

  return (
    <div>
      <Head>
        <title>{content.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header navItems={content.navItems} />

      <main>
        <h1>{content.heading}</h1>
        <p>{content.description}</p>
      </main>

      <Footer text={content.footerText} />
    </div>
  )
}

export async function getStaticProps() {
  // Provide static content for build time
  return {
    props: {
      initialContent: {
        title: "ACORN",
        heading: "Welcome to ACORN",
        description: "ACORN is a community-based union of low and moderate income people.",
        navItems: [
          { url: "/", text: "Home" },
          { url: "/about", text: "About" },
          { url: "/campaigns", text: "Campaigns" },
        ],
        footerText: "© 2024 ACORN. All rights reserved.",
      }
    }
  }
}
