import { allPosts } from 'contentlayer/generated'
import { NextResponse } from 'next/server'
import RSS from 'rss'

import { defaultMetadata } from '@/lib/metadata'
import { getBaseUrl } from '@/lib/utils'

export const GET = () => {
  const feed = new RSS({
    title: defaultMetadata.author.name,
    description: defaultMetadata.description,
    site_url: getBaseUrl(),
    feed_url: `${getBaseUrl()}/feed.xml`,
    image_url: `${getBaseUrl()}/static/images/logo.svg`,
  })

  allPosts
    .filter((post) => post.published)
    .map(({ title, longExcerpt, excerpt, slug, date }) => {
      feed.item({
        title,
        description: longExcerpt ?? excerpt,
        url: `${getBaseUrl()}/blog/${slug}`,
        date,
        author: defaultMetadata.author.name,
      })
    })

  return new NextResponse(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}