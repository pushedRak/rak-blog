import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'src/content/posts')

export interface PostMetadata {
  title: string
  createdAt: string
  updatedAt?: string
  description: string
  thumbnail?: string
  slug: string
}

export function getAllPosts(): PostMetadata[] {
  const files = fs.readdirSync(postsDirectory)
  
  const posts = files
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)
      
      return {
        ...(data as Omit<PostMetadata, 'slug'>),
        slug,
      }
    })
    .sort((a, b) => (new Date(b.createdAt)).getTime() - (new Date(a.createdAt)).getTime())
    
  return posts
}

export function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  
  return {
    content,
    metadata: {
      ...(data as Omit<PostMetadata, 'slug'>),
      slug,
    },
  }
}