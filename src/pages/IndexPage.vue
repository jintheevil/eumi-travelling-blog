<script setup>
import { useUserStore } from "stores/user";
import MainPageBlog from "components/MainPageBlog.vue";
import LandingHeader from "components/LandingHeader.vue";
</script>

<template>
  <LandingHeader></LandingHeader>
  <MainPageBlog></MainPageBlog>
</template>

<style lang="scss" scoped>
</style>
