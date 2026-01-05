import { ref } from 'vue'
import { client } from '@/sanity/client'
import type { Blog } from '@/types/blog'

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
        content,
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

  fetchAllBlogs()

  return {
    blogs,
    loading,
    error,
    fetchAllBlogs,
  }
}
