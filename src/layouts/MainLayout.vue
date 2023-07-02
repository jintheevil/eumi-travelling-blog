<script setup>
import MainHeader from "components/MainHeader.vue";

</script>

<template>
  <q-layout class="layout">
    <main-header></main-header>
    <q-page-container class="container">
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<style lang="scss">
.layout {
  position: relative;
}
.container {
  height: 100vh;
  padding-top: 8rem;
  scroll-snap-type: y mandatory;
  overflow: auto;
}
.container::-webkit-scrollbar {
  width: 0;
}
</style>
