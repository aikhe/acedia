<script setup lang="ts"></script>

<template>
  <section>
    <div class="blog-container">
      <h1 class="blog-content-title">College</h1>

      <p class="margin--medium font-plex-sans font-desc">
        This is the place where <strong>most could only dream of</strong> especially the ones with
        scholarships, im one of this people. I passed the exam and so have the privilage to have a
        <strong>free education</strong>.
      </p>

      <p class="margin--medium font-plex-sans font-desc">
        Having passed and getting into this UNI, people in my life are happy and proud. This is the
        oppurtunity that most can't just disregard, and so as I see the results I feel thankful. I
        chose my <strong>dream course "Computer Science"</strong> as this has been on my main quest
        ever since I developed a love and passion for building using computer languages and my
        creativity. College start the fire inside me, igniting as it expects and long for such
        experience that I could only get within here. And so it all started, I love most of the
        subjects especially my majors and math subject and I'm really grateful for being in a
        healthy environment with these <strong>amazing teachers</strong> and
        <strong>fun classroom</strong>.
      </p>

      <p class="margin--medium font-plex-sans font-desc">
        Some time have passed and I've noticed how overly reliant I was to my mother and other
        people in my life for financial reasons and <strong>it's really killing me inside</strong>.
        I've also noticed <strong>the lack of challenge</strong> that some of my subjects and majors
        are providing as im learning more from my own rather than college itself. My health have
        also not been in a great state and have been
        <strong>struggling to keep my education seriously</strong>. Whilst these bad things are
        happening <strong>I've also lost the motivation, passion, and drive</strong> to keep myself
        in touch with what I should be doing that will kept my future secure and healthy.
        <strong>I have been slowing losing myself</strong>.
      </p>

      <p class="margin--medium font-plex-sans font-desc">
        This unfortunate time and experience manifested through my education for the past 3 months.
        <strong>I was not going to most of my classes</strong> and
        <strong>have missed most of my exams</strong>. Our finals have passed and so my record is,
        <strong>I have dropped most my subjects</strong> this first semester.
      </p>
    </div>
  </section>
</template>

<style scoped>
strong {
  font-weight: 450;
}

.margin--medium {
  margin-top: 2rem;
}

.images-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

@media (max-width: 768px) {
  .images-grid {
    grid-template-columns: 1fr;
  }
}

.caption-group {
  display: block;
  margin-top: 0.5rem;
  opacity: 0.6;
  font-size: 0.9rem;
}
</style>
