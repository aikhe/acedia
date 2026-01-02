<script setup lang="ts">
import { useBlogs } from '@/composables/useBlogs'

const { blogs, loading, error } = useBlogs()
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
        <p v-if="blog.content">{{ blog.content }}</p>
        <span>{{ blog.category }}</span>
        <div>
          <span v-for="tag in blog.tags" :key="tag">{{ tag }}</span>
        </div>
      </article>
    </div>
  </section>
</template>
