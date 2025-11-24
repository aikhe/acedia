<template>
  <section class="section">
    <div class="blog-container">
      <div class="img-container">
        <img src="/PAGE 9.png" alt="" />
      </div>

      <div class="spacing" />

      <div class="img-container">
        <img src="/PAGE 4.png" alt="" />
      </div>

      <div class="spacing" />

      <div class="parent">
        <div class="div1">
          <img src="/Artboard9.png" alt="" />
        </div>
        <div class="div2">
          <img src="/PAGE 5.png" alt="" />
        </div>
        <div class="div3">
          <img src="/PAGE 8.png" alt="" />
        </div>
      </div>

      <div class="spacing" />

      <div class="img-container">
        <img src="/PAGE 10.png" alt="" />
      </div>

      <p class="font-plex-sans sub-reg">(Poster I've made for finishing our finals)</p>
    </div>
  </section>
</template>

<style scoped>
.spacing {
  width: 100%;
  height: 2rem;
}

.img-container {
  max-width: 90%;
  margin: auto;
}

.parent {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr;
  width: 100%;
  gap: 0.6rem;
}

.parent > div {
  overflow: hidden;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.div1 {
  grid-column: 1 / 2;
  grid-row: 1 / 3;
}

.div2 {
  grid-column: 2 / 3;
  grid-row: 1 / 1;
}

.div3 {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
}

p {
  width: 90%;
  margin: auto;
  margin-top: 0.4rem;
  opacity: 0.6;
}

@media (max-width: 768px) {
  .spacing {
    height: 0.6rem;
  }

  .img-container {
    max-width: 100%;
  }

  .parent {
    gap: 0.4rem;
  }

  p {
    width: 100%;
  }
}
</style>
