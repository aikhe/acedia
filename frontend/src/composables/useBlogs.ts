import { ref, computed } from 'vue'
import { client } from '@/sanity/client'

export interface Blog {
  _id: string
  _type: 'myDocument'
  title: string
  description?: string
  cover: {
    asset: {
      _ref: string
      _type: 'reference'
      url?: string
    }
    alt?: string
  }
  content: Array<{
    _type: 'block' | 'image'
    [key: string]: string
  }>
  category: 'aikhe' | 'acedia' | 'elapse' | 'miscs'
  tags: string[]
  _createdAt?: string
  _updatedAt?: string
}

export function useBlogs() {
  const blogs = ref<Blog[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const fetchAllBlogs = async () => {
    try {
      loading.value = true
      error.value = null

      const query = `*[_type == "blog"] | order(_createdAt desc) {
        _id,
        _type,
        title,
        description,
        "coverUrl": cover.asset->url,
        "coverAlt": cover.alt,
        category,
        tags,
        _createdAt,
        _updatedAt
      }`

      blogs.value = await client.fetch<Blog[]>(query)
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to fetch blogs'
      console.error('Error fetching blogs:', err)
    } finally {
      loading.value = false
    }
  }

  return {
    blogs,
    loading,
    error,
    fetchAllBlogs,
  }
}
