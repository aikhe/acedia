<script setup lang="ts">
import { useBlogs } from '@/composables/useBlogs'

const { blogs, loading, error } = useBlogs()

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
  <section>
    <div class="container blog-layout">
      <div v-if="loading" class="blog-loading font-plex-sans">
        <p>Loading blogs...</p>
      </div>

      <div v-else-if="error" class="blog-error font-plex-sans">
        <p>{{ error }}</p>
      </div>

      <div v-else class="blog-grid">
        <article v-for="blog in blogs" :key="blog._id" class="blog-card">
          <div class="blog-card__image-wrapper">
            <img
              v-if="blog.coverUrl"
              :src="blog.coverUrl"
              :alt="blog.coverAlt || blog.title"
              class="blog-card__image"
            />
            <div v-else class="blog-card__image-placeholder"></div>
          </div>

          <div class="blog-card__content">
            <h3 class="blog-card__title">{{ blog.title }}</h3>

            <p v-if="blog.description" class="blog-card__description font-plex-sans">
              {{ blog.description }}
            </p>

            <div class="blog-card__meta">
              <span class="blog-card__author">Ike Rosacay</span>
              <span class="blog-card__separator">·</span>
              <span class="blog-card__date" v-if="blog._createdAt">
                {{ formatDate(blog._createdAt) }}
              </span>
              <template v-if="blog._updatedAt && blog._updatedAt !== blog._createdAt">
                <span class="blog-card__separator">·</span>
                <span class="blog-card__date blog-card__date--updated">
                  Updated {{ formatDate(blog._updatedAt) }}
                </span>
              </template>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.blog-layout {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.blog-loading,
.blog-error {
  padding: 4rem 0;
  opacity: 0.7;
}

.blog-error {
  color: #e74c3c;
}

.blog-grid {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.blog-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  cursor: pointer;
}

.blog-card__image-wrapper {
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

.blog-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.blog-card:hover .blog-card__image {
  transform: scale(1.02);
}

.blog-card__image-placeholder {
  width: 100%;
  height: 100%;
  background: var(--color-background-mute);
}

.blog-card__content {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.blog-card__title {
  font-family: ApercuMonoRegular;
  font-size: 24pt;
  letter-spacing: -4%;
  line-height: 1;
  margin: 0;
}

.blog-card__description {
  font-size: 12pt;
  font-weight: 350;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.blog-card__meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ApercuMonoLight;
  font-size: 10pt;
  opacity: 0.7;
}

.blog-card__separator {
  opacity: 0.5;
}

.blog-card__date--updated {
  opacity: 0.7;
}

@media (max-width: 768px) {
  .blog-grid {
    gap: 2.5rem;
  }

  .blog-card__title {
    font-size: 18pt;
  }

  .blog-card__description {
    font-size: 11pt;
  }

  .blog-card__meta {
    font-size: 9pt;
    flex-wrap: wrap;
  }
}
</style>
