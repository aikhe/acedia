<script setup lang="ts">
import { useBlogs } from '@/composables/useBlogs'

const { blogs, loading, error } = useBlogs()
</script>

<template>
  <section>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error: {{ error }}</div>
    <div v-else>
      <article v-for="blog in blogs" :key="blog._id" class="blog-card">
        <h2>{{ blog.title }}</h2>
        <p v-if="blog.description">{{ blog.description }}</p>
        <div class="meta">
          <span class="category">{{ blog.category }}</span>
          <div class="tags">
            <span v-for="tag in blog.tags" :key="tag">{{ tag }}</span>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
