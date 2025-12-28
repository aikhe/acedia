<script setup lang="ts">
import { useBlogs } from '@/composables/useBlogs'
import { PortableText } from '@portabletext/vue'
import { h } from 'vue'
import { createImageUrlBuilder } from '@sanity/image-url'
import { client } from '@/sanity/client'

const { blogs, loading, error } = useBlogs()

const builder = createImageUrlBuilder(client)

interface ImageValue {
  _type: 'image'
  asset: {
    _ref?: string
    _type?: string
  }
  alt?: string
  caption?: string
}

const components = {
  types: {
    image: ({ value }: { value: ImageValue }) => {
      if (!value?.asset) return null

      const imageUrl = builder.image(value).width(1200).url()

      return h('img', {
        src: imageUrl,
        alt: value.alt || '',
        style: { maxWidth: '100%', height: 'auto' },
      })
    },
  },
}
</script>

<template>
  <section>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error: {{ error }}</div>

    <div v-else>
      <article v-for="blog in blogs" :key="blog._id">
        <h2>{{ blog.title }}</h2>
        <img v-if="blog.coverUrl" :src="blog.coverUrl" :alt="blog.coverAlt || blog.title" />
        <p v-if="blog.description">{{ blog.description }}</p>

        <div v-if="blog.content">
          <PortableText :value="blog.content" :components="components" />
        </div>

        <span>{{ blog.category }}</span>
        <div>
          <span v-for="tag in blog.tags" :key="tag">{{ tag }}</span>
        </div>
      </article>
    </div>
  </section>
</template>
