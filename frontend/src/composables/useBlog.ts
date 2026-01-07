import { ref } from 'vue'
import { client } from '@/sanity/client'
import type { Blog } from '@/types/blog'

export function useBlog(id: string) {
  const blog = ref<Blog | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  const fetchBlog = async () => {
    try {
      loading.value = true
      error.value = null

      const query = `*[_type == "blog" && _id == $id][0] {
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

      blog.value = await client.fetch<Blog>(query, { id })
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to fetch blog'
      console.error('Error fetching blog:', err)
    } finally {
      loading.value = false
    }
  }

  fetchBlog()

  return {
    blog,
    loading,
    error,
    fetchBlog,
  }
}
