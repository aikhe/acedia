<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useBlog } from '@/composables/useBlog'
import { PortableText } from '@portabletext/vue'
import { h } from 'vue'
import { createImageUrlBuilder } from '@sanity/image-url'
import { client } from '@/sanity/client'
import type { ImageValue } from '@/types/blog'
import CurrentStatus from '@/components/CurrentStatus.vue'

const route = useRoute()
const blogId = route.params.id as string
const { blog, loading, error } = useBlog(blogId)

const builder = createImageUrlBuilder(client)

const components = {
  types: {
    image: ({ value }: { value: ImageValue }) => {
      if (!value?.asset) return null

      const imageUrl = builder.image(value).width(1200).url()

      const children = [
        h('div', { class: 'img-container' }, [
          h('img', {
            src: imageUrl,
            alt: value.alt || '',
          }),
        ]),
      ]

      if (value.caption) {
        children.push(
          h('p', { class: 'img-caption font-plex-sans sub-reg' }, value.caption),
        )
      }

      return h('figure', { class: 'content-figure' }, children)
    },
  },
}

const formatDate = (dateString?: string) => {
  if (!dateString) return ''
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}
</script>

<template>
  <main>
    <CurrentStatus />
    <div class="spacing" />

    <section>
      <div class="blog-container blog-detail" v-if="loading">
        <p class="font-plex-sans">Loading...</p>
      </div>

      <div class="blog-container blog-detail" v-else-if="error">
        <p class="font-plex-sans">{{ error }}</p>
      </div>

      <div class="blog-container blog-detail" v-else-if="blog">
        <header class="blog-header">
          <h1 class="blog-title">{{ blog.title }}</h1>

          <p v-if="blog.description" class="blog-description font-plex-sans font-desc">
            {{ blog.description }}
          </p>

          <div class="blog-meta font-plex-sans">
            <span class="blog-author">Ike Rosacay</span>
            <span class="blog-separator">·</span>
            <span class="blog-date" v-if="blog._createdAt">
              {{ formatDate(blog._createdAt) }}
            </span>
            <template v-if="blog._updatedAt && blog._updatedAt !== blog._createdAt">
              <span class="blog-separator">·</span>
              <span class="blog-date">Updated {{ formatDate(blog._updatedAt) }}</span>
            </template>
          </div>
        </header>

        <div class="blog-cover" v-if="blog.coverUrl">
          <img :src="blog.coverUrl" :alt="blog.coverAlt || blog.title" class="blog-cover__image" />
        </div>

        <article class="blog-content font-plex-sans font-desc" v-if="blog.content">
          <PortableText :value="blog.content" :components="components" />
        </article>
      </div>
    </section>

    <div class="spacing--medium" />
  </main>
</template>

<style scoped>
.spacing {
  width: 100%;
  height: 12rem;
}

.spacing--medium {
  width: 100%;
  height: 16rem;
}

.blog-detail {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.blog-header {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.blog-description {
  width: 48ch;
  margin-top: 0.8rem;
}

.blog-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 10pt;
  font-family: ApercuMonoLight;
  opacity: 0.7;
  margin-top: 0.4rem;
}

.blog-separator {
  opacity: 0.5;
}

.blog-cover {
  margin-top: 1.4rem;
}

.blog-cover__image {
  width: 100%;
}

.blog-content {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.blog-content :deep(p) {
  line-height: 1.6;
}

.blog-content :deep(strong) {
  font-weight: 450;
}

.blog-content :deep(ul),
.blog-content :deep(ol) {
  padding-left: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.blog-content :deep(.content-figure) {
  margin: 1rem 0;
}

.blog-content :deep(.img-container) {
  max-width: 90%;
  margin: auto;
}

.blog-content :deep(.img-container img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.blog-content :deep(.img-caption) {
  width: 90%;
  margin: auto;
  margin-top: 0.4rem;
  opacity: 0.6;
}

.blog-content :deep(h2),
.blog-content :deep(h3),
.blog-content :deep(h4) {
  font-family: ApercuMonoRegular;
  letter-spacing: -2%;
  margin-top: 1rem;
}

.blog-content :deep(blockquote) {
  border-left: 3px solid var(--color-border);
  padding-left: 1.5rem;
  opacity: 0.8;
  font-style: italic;
}

@media (max-width: 768px) {
  .spacing {
    height: 8rem;
  }

  .spacing--medium {
    height: 8rem;
  }

  .blog-description {
    width: 34ch;
    margin-top: 0rem;
  }

  .blog-cover {
    margin-top: 1rem;
  }

  .blog-content {
    gap: 1.2rem;
  }

  .blog-content :deep(.img-container) {
    max-width: 100%;
  }

  .blog-content :deep(.img-caption) {
    width: 100%;
  }
}
</style>
