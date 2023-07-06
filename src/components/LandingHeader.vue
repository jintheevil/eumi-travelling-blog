<script setup>
import {ref} from 'vue';

const slide = ref('1');

const slides = [
  {
    name: '1',
    content: 'faithful travel blog.'
  },
  {
    name: '2',
    content: 'trustworthy travel planner.'
  },
  {
    name: '3',
    content: 'favorite nomadic couple.'
  }
];

</script>

<template>
  <q-page class="q-page">
    <h1>
      Your
    </h1>
    <q-carousel
      v-model="slide"
      infinite
      :autoplay="2500"
      transition-prev="slide-right"
      transition-next="slide-left"
      animated
      control-color="primary"
      class="rounded-borders"
    >
      <q-carousel-slide v-for="slide in slides" :key="slide.name" :name="slide.name" class="carousel-slide">
        <h1>
          {{ slide.content }}
        </h1>
      </q-carousel-slide>
    </q-carousel>
  </q-page>
</template>

<style lang="scss" scoped>
.q-page {
  text-align: center;

  h1 {
    margin: 0;
    text-shadow: 0.3rem 0.4rem 0.2rem var(--q-primary);
    font-family: "Roboto", serif;
    font-weight: 500;
  }

  h2 {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
  }
}

.carousel-slide {
  background: var(--q-bg);
}
</style>
