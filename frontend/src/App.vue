<template>
  <div class="bg-[#FFFAFA]">
    <Layout />
    <div class="container mx-auto ">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Layout from './layouts/Layout.vue'
</script>


<style scoped></style>
