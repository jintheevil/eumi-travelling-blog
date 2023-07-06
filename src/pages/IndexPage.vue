<script setup>
import { useUserStore } from "stores/user";
import MainPageAbout from "components/MainPageAbout.vue";
import MainPageBlog from "components/MainPageBlog.vue";
import LandingHeader from "components/LandingHeader.vue";
</script>

<template>
  <LandingHeader></LandingHeader>
  <MainPageAbout></MainPageAbout>
  <MainPageBlog></MainPageBlog>
</template>

<style lang="scss" scoped>
</style>
