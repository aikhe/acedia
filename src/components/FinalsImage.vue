<template>
  <section class="section">
    <div class="blog-container">
      <div class="img-container">
        <img src="/finals.png" alt="" />
      </div>
      <p class="font-plex-sans sub-reg">(Poster I've made for finishing our finals)</p>
    </div>
  </section>
</template>

<style scoped>
.img-container {
  max-width: 90%;
  margin: auto;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

p {
  width: 90%;
  margin: auto;
  margin-top: 0.4rem;
  opacity: 0.6;
}

@media (max-width: 768px) {
  .img-container {
    max-width: 100%;
  }

  p {
    width: 100%;
  }
}
</style>
