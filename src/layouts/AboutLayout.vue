<script setup lang="ts"></script>

<template>
  <section class="">
    <div class="container about">
      <div class="about__title font-title">
        <h1>Who am I’</h1>
      </div>
      <p class="about__desc font-plex-sans font-desc">
        I’m curious about the world and enjoy exploring my hobbies and the little things that make
        life interesting. Here’s a bit more about me.
      </p>
      <div class="about__info">
        <div class="info">
          <strong class="info__title">Place of Birth</strong>
          <span class="info__desc">
            Tala Caloocan<br />
            PH
          </span>
        </div>

        <div class="info">
          <strong class="info__title">Lucky Number</strong>
          <span class="info__desc"> 34 </span>
        </div>

        <div class="info">
          <strong class="info__title">Favourite</strong>
          <span class="info__desc">
            Philosophy novels<br />
            I really like coding
          </span>
        </div>

        <div class="info">
          <strong class="info__title">Hobbies</strong>
          <span class="info__desc">
            I like cool games<br />
            I love reading books
          </span>
        </div>

        <div class="info">
          <strong class="info__title">Taste</strong>
          <span class="info__desc">
            Sweet stuff<br />
            Coffee
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
}

.about__title {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  line-height: 0.75;
}

.about__desc {
  width: 43ch;
}

.about__info {
  margin-top: 1.8rem;
  letter-spacing: -3.4%;
  line-height: 0.9;
  display: flex;
  gap: 5.5rem;
}

.info {
  font-size: 12.5pt;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  line-height: 1.3;
}

.info__title {
  font-family: ApercuMonoRegular;
}

.info__desc {
  font-family: ApercuMonoLight;
}

@media (max-width: 768px) {
  .about {
    gap: 0.8rem;
  }

  .about__desc {
    width: 30ch;
  }

  .about__info {
    margin-top: 1.34rem;
    flex-direction: column;
    gap: 2rem;
  }

  .info {
    gap: 0.6rem;
  }
}
</style>
