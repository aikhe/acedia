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
  <section class="blog-section">
    <div v-if="loading" class="blog-loading">
      <div class="loading-spinner"></div>
      <p>Loading blogs...</p>
    </div>

    <div v-else-if="error" class="blog-error">
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

          <div class="blog-card__meta">
            <span class="blog-card__author">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              Ike Rosacay
            </span>
          </div>

          <div class="blog-card__dates">
            <span class="blog-card__date" v-if="blog._createdAt">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                <line x1="16" x2="16" y1="2" y2="6" />
                <line x1="8" x2="8" y1="2" y2="6" />
                <line x1="3" x2="21" y1="10" y2="10" />
              </svg>
              {{ formatDate(blog._createdAt) }}
            </span>
            <span class="blog-card__date blog-card__date--updated" v-if="blog._updatedAt">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
                <path d="M21 3v5h-5" />
              </svg>
              {{ formatDate(blog._updatedAt) }}
            </span>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.blog-section {
  width: 100%;
  max-width: 1200px;
  padding: 0 1.5rem;
}

.blog-loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 4rem 0;
  color: var(--color-text);
  opacity: 0.7;
}

.loading-spinner {
  width: 2rem;
  height: 2rem;
  border: 2px solid var(--color-border);
  border-top-color: var(--color-text);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.blog-error {
  text-align: center;
  padding: 4rem 0;
  color: #e74c3c;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 2rem;
}

.blog-card {
  background: var(--color-background-soft);
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid var(--color-border);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease;
  cursor: pointer;
}

.blog-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  border-color: var(--color-border-hover);
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
  transform: scale(1.05);
}

.blog-card__image-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--color-background-mute), var(--color-background-soft));
}

.blog-card__content {
  padding: 1.25rem 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.blog-card__title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-heading);
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 0;
}

.blog-card__meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.blog-card__author {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.875rem;
  color: var(--color-text);
  opacity: 0.85;
}

.blog-card__author svg {
  opacity: 0.7;
}

.blog-card__dates {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  padding-top: 0.5rem;
  border-top: 1px solid var(--color-border);
}

.blog-card__date {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.75rem;
  color: var(--color-text);
  opacity: 0.65;
}

.blog-card__date svg {
  opacity: 0.6;
}

.blog-card__date--updated {
  opacity: 0.5;
}

@media (max-width: 768px) {
  .blog-section {
    padding: 0 1rem;
  }

  .blog-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .blog-card__content {
    padding: 1rem 1.25rem 1.25rem;
  }

  .blog-card__title {
    font-size: 1.125rem;
  }
}
</style>
