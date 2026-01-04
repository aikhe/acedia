<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="navbar container">
      <div class="acedia">
        <div class="acedia__box" />
        <span class="sub-reg acedia__text">ACEDIA</span>
      </div>

      <nav class="sub-reg navbar__links">
        <RouterLink to="/">ME</RouterLink>
        <RouterLink to="/now">NOW</RouterLink>
      </nav>

      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="header__theme-toggle"
        >
          <path
            d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z"
          />
        </svg>
      </button>
    </div>
  </header>

  <RouterView />

  <footer>
    <div class="footer container">
      <div class="footer__info">
        <div class="info__left">
          <div class="info__container">
            <strong class="info__title">Specialty</strong>
            <span class="info__desc">
              Building cool stuff<br />
              Learning about myself
            </span>
          </div>

          <div class="info__container">
            <strong class="info__title">Social</strong>
            <span class="info__desc">
              <a href="https://github.com/aikhe">Github</a><br />
              <a href="https://www.facebook.com/ikeandrie.rosacay">Facebook</a><br />
              <a href="">Linkedin</a><br />
              <a href="">X</a>
            </span>
          </div>
        </div>

        <div class="info__right info__container">
          <strong class="info__title">Contact</strong>
          <span class="info__desc"> ikeandrie.ro@gmail.com </span>
        </div>
      </div>
      <div class="footer__brand sub-reg">
        <RouterLink class="brand__container" to="/">ACEDIA</RouterLink>
        <span class="brand__container">AIKHE @2025</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav {
  display: flex;
  gap: 4rem;
}

nav a.router-link-exact-active {
  color: black;
  opacity: 1;
}

nav a {
  color: black;
  opacity: 0.6;
}

nav a:hover {
  text-decoration: underline;
}

.acedia {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.acedia__text {
  margin-left: 1.2rem;
  position: absolute;
}

.acedia__box {
  width: 0.7rem;
  height: 0.7rem;
  background-color: black;
}

.header__theme-toggle {
  width: 1.2rem;
  height: 1.2em;
  fill: black;
}

footer {
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #252525;
  padding: 2.5rem 0 3rem 0;
}

.footer {
  display: flex;
  flex-direction: column;
  gap: 6rem;
}

.footer__brand {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer__title {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  line-height: 0.75;
}

.footer__info {
  margin-top: 1.8rem;
  display: flex;
}

.info__container {
  font-size: 12pt;
  line-height: 1.4;
  letter-spacing: -3.4%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.info__right {
  width: 38%;
}

.info__left {
  width: 62%;
  display: flex;
  justify-content: space-between;
}

.info__left div {
  width: 50%;
}

.info__title {
  font-family: ApercuMonoRegular;
}

.info__desc {
  font-family: ApercuMonoLight;
  line-height: 1.34;
  opacity: 0.45;
}

.info__desc a {
  color: white;
}

.brand__container:first-child {
  color: white;
  width: 62%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand__container:last-child {
  width: 38%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media (max-width: 768px) {
  nav {
    gap: 2rem;
  }

  nav a:hover {
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
  }

  .acedia__box {
    margin-top: -4px;
  }

  .footer {
    gap: 3rem;
  }

  .footer__info {
    flex-direction: column;
    gap: 2rem;
  }

  .info__right,
  .info__left {
    width: 100%;
  }

  .brand__container:first-child,
  .brand__container:last-child {
    width: 100%;
  }

  .footer__brand {
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
  }
}
</style>
