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
  category: string
}

// 모든 카테고리 목록을 가져오는 함수
export function getAllCategories(): string[] {
  return fs.readdirSync(postsDirectory).filter(file => 
    fs.statSync(path.join(postsDirectory, file)).isDirectory()
  )
}

// 특정 카테고리의 모든 포스트를 가져오는 함수
export function getPostsByCategory(category: string): PostMetadata[] {
  const categoryPath = path.join(postsDirectory, category)
  
  if (!fs.existsSync(categoryPath)) {
    return []
  }

  const files = fs.readdirSync(categoryPath)
  
  const posts = files
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(categoryPath, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)
      
      return {
        ...(data as Omit<PostMetadata, 'slug' | 'category'>),
        slug,
        category,
      }
    })
    .sort((a, b) => (new Date(b.createdAt)).getTime() - (new Date(a.createdAt)).getTime())
    
  return posts
}

// 모든 포스트를 가져오는 함수
export function getAllPosts(): PostMetadata[] {
  const categories = getAllCategories()
  
  const posts = categories.flatMap(category => 
    getPostsByCategory(category)
  ).sort((a, b) => (new Date(b.createdAt)).getTime() - (new Date(a.createdAt)).getTime())
  
  return posts
}

// slug로 특정 포스트를 가져오는 함수
export function getPostBySlug(category: string, slug: string) {
  const fullPath = path.join(postsDirectory, category, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  
  return {
    content,
    metadata: {
      ...(data as Omit<PostMetadata, 'slug' | 'category'>),
      slug,
      category,
    },
  }
}

// 카테고리별 포스트 수를 가져오는 함수
export function getCategoryStats(): Array<{ category: string; count: number }> {
  const categories = getAllCategories()
  
  return categories.map(category => ({
    category,
    count: getPostsByCategory(category).length
  }))
}