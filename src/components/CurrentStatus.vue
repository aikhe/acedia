<script setup lang="ts"></script>

<template>
  <div class="section--status">
    <div class="container--status">
      <div />
      <div class="status">
        <ul class="status__message">
          <li>I’m Currently finding what this path leads to</li>
        </ul>
        <span class="status__label">Still Unknown</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.section--status {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.2rem;
}

.container--status {
  width: 1380px;
  display: flex;
  justify-content: space-between;
}

.status {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-weight: 300;
}

.status__message {
  color: #28ae3c;
}

ul li {
  padding-left: 0.2rem;
}

.status__label {
  opacity: 0.4;
}
</style>
